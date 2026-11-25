/* Kiểm chữ ký RSASSA-PKCS1-v1_5 + SHA-256 bằng JavaScript thuần, cho Word 2016, 2019 (Internet Explorer 11 không có crypto.subtle).
   Cần thư viện jsbn (BigInteger) nạp trước. Viết ES5 để IE11 chạy thẳng.
   ND30RSA.verify(khoaSpkiBase64, chuKyUint8, duLieuUint8) -> true | false */
(function (goc) {
  "use strict";

  /* ---------------------------------------------------------------- SHA-256 */
  var K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];

  function sha256(du) {
    var n = du.length, dai = ((n + 9 + 63) >> 6) << 6, b = new Uint8Array(dai), i, j;
    b.set(du); b[n] = 0x80;
    var bit = n * 8;
    b[dai - 4] = (bit >>> 24) & 255; b[dai - 3] = (bit >>> 16) & 255; b[dai - 2] = (bit >>> 8) & 255; b[dai - 1] = bit & 255;
    b[dai - 5] = Math.floor(n / 0x20000000) & 255;
    var H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    var w = new Array(64);
    for (i = 0; i < dai; i += 64) {
      for (j = 0; j < 16; j++) w[j] = (b[i + 4 * j] << 24) | (b[i + 4 * j + 1] << 16) | (b[i + 4 * j + 2] << 8) | b[i + 4 * j + 3];
      for (j = 16; j < 64; j++) {
        var x = w[j - 15], y = w[j - 2];
        var s0 = ((x >>> 7) | (x << 25)) ^ ((x >>> 18) | (x << 14)) ^ (x >>> 3);
        var s1 = ((y >>> 17) | (y << 15)) ^ ((y >>> 19) | (y << 13)) ^ (y >>> 10);
        w[j] = (w[j - 16] + s0 + w[j - 7] + s1) | 0;
      }
      var a = H[0], c = H[1], d = H[2], e = H[3], f = H[4], g = H[5], h = H[6], k = H[7];
      for (j = 0; j < 64; j++) {
        var S1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));
        var ch = (f & g) ^ (~f & h);
        var t1 = (k + S1 + ch + K[j] + w[j]) | 0;
        var S0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
        var maj = (a & c) ^ (a & d) ^ (c & d);
        var t2 = (S0 + maj) | 0;
        k = h; h = g; g = f; f = (e + t1) | 0; e = d; d = c; c = a; a = (t1 + t2) | 0;
      }
      H[0] = (H[0] + a) | 0; H[1] = (H[1] + c) | 0; H[2] = (H[2] + d) | 0; H[3] = (H[3] + e) | 0;
      H[4] = (H[4] + f) | 0; H[5] = (H[5] + g) | 0; H[6] = (H[6] + h) | 0; H[7] = (H[7] + k) | 0;
    }
    var ra = new Uint8Array(32);
    for (i = 0; i < 8; i++) { ra[4 * i] = (H[i] >>> 24) & 255; ra[4 * i + 1] = (H[i] >>> 16) & 255; ra[4 * i + 2] = (H[i] >>> 8) & 255; ra[4 * i + 3] = H[i] & 255; }
    return ra;
  }

  /* ---------------------------------------------------------------- đọc khoá SPKI (DER) */
  function docDer(b, p) {   // -> { the, dau (vị trí nội dung), dai }
    var the = b[p], dai = b[p + 1], q = p + 2;
    if (dai & 0x80) { var so = dai & 0x7f; dai = 0; for (var i = 0; i < so; i++) dai = dai * 256 + b[q++]; }
    return { the: the, dau: q, dai: dai };
  }
  function hex(b, tu, den) {
    var s = "";
    for (var i = tu; i < den; i++) s += (b[i] < 16 ? "0" : "") + b[i].toString(16);
    return s;
  }
  function docKhoa(spkiB64) {
    var s = atob(spkiB64), b = new Uint8Array(s.length), i;
    for (i = 0; i < s.length; i++) b[i] = s.charCodeAt(i);
    var ngoai = docDer(b, 0);                       // SEQUENCE
    var thuatToan = docDer(b, ngoai.dau);           // SEQUENCE { OID, NULL }
    var bitStr = docDer(b, thuatToan.dau + thuatToan.dai);   // BIT STRING
    var trong = docDer(b, bitStr.dau + 1);          // bỏ byte "số bit thừa" = 0
    var n = docDer(b, trong.dau), e = docDer(b, n.dau + n.dai);
    var BI = goc.jsbn.BigInteger;
    return { n: new BI(hex(b, n.dau, n.dau + n.dai), 16), e: new BI(hex(b, e.dau, e.dau + e.dai), 16) };
  }

  var TIEN_TO = "3031300d060960864801650304020105000420";   // DigestInfo của SHA-256
  var khoaCache = {};

  function verify(spkiB64, chuKy, duLieu) {
    try {
      var k = khoaCache[spkiB64] || (khoaCache[spkiB64] = docKhoa(spkiB64));
      var BI = goc.jsbn.BigInteger;
      var m = new BI(hex(chuKy, 0, chuKy.length), 16).modPow(k.e, k.n).toString(16);
      var doDai = (k.n.bitLength() + 7) >> 3;
      while (m.length < doDai * 2) m = "0" + m;
      var bam = sha256(duLieu), canCo = hex(bam, 0, 32);
      var dem = doDai - 3 - TIEN_TO.length / 2 - 32;
      if (dem < 8) return false;
      var mau = "0001";
      for (var i = 0; i < dem; i++) mau += "ff";
      mau += "00" + TIEN_TO + canCo;
      return m.toLowerCase() === mau;
    } catch (x) { return false; }
  }

  goc.ND30RSA = { verify: verify, sha256: sha256 };
})(typeof window !== "undefined" ? window : this);
