/* Đọc và ghi lại tệp .docx (zip) ngay trong add-in, không thư viện ngoài.
   ND30Zip.mo(arrayBuffer) -> { ds, docChu(ten), datChu(ten, chuoi), xuat() -> Promise<Uint8Array> }
   Mục không đổi được chép nguyên khối nén cũ; mục đã đổi nén lại bằng deflate-raw. */
(function (goc) {
  "use strict";
  const BANG = (() => {
    const t = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      t[n] = c >>> 0;
    }
    return t;
  })();
  function crc32(u8) {
    let c = 0xffffffff;
    for (let i = 0; i < u8.length; i++) c = BANG[(c ^ u8[i]) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  }

  async function quaLuong(u8, luong) {
    const ra = new Blob([u8]).stream().pipeThrough(luong);
    return new Uint8Array(await new Response(ra).arrayBuffer());
  }
  /* Word 2016, 2019 (Internet Explorer 11) không có DecompressionStream: dùng thư viện pako nạp sẵn. */
  async function inflateRaw(u8) {
    if (typeof DecompressionStream !== "undefined") return await quaLuong(u8, new DecompressionStream("deflate-raw"));
    if (goc.pako) return goc.pako.inflateRaw(u8);
    throw new Error("KHONG_GIAI_NEN_DUOC");
  }

  function mo(buf) {
    const u8 = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
    const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
    let eocd = -1;
    for (let i = u8.length - 22; i >= Math.max(0, u8.length - 66000); i--) {
      if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
    }
    if (eocd < 0) throw new Error("KHONG_PHAI_DOCX");
    const soMuc = dv.getUint16(eocd + 10, true);
    let p = dv.getUint32(eocd + 16, true);
    const td = new TextDecoder("utf-8");
    const muc = [];
    for (let k = 0; k < soMuc; k++) {
      if (dv.getUint32(p, true) !== 0x02014b50) throw new Error("ZIP_HONG");
      const m = {
        co: dv.getUint16(p + 8, true) & ~0x0008,   // bỏ cờ data descriptor vì ghi kích thước ngay ở đầu
        kieu: dv.getUint16(p + 10, true),
        gio: dv.getUint16(p + 12, true),
        ngay: dv.getUint16(p + 14, true),
        crc: dv.getUint32(p + 16, true),
        nen: dv.getUint32(p + 20, true),
        goc: dv.getUint32(p + 24, true),
      };
      const dTen = dv.getUint16(p + 28, true), dPhu = dv.getUint16(p + 30, true), dGhi = dv.getUint16(p + 32, true);
      const viTri = dv.getUint32(p + 42, true);
      m.tenByte = u8.slice(p + 46, p + 46 + dTen);
      m.ten = td.decode(m.tenByte);
      const n = dv.getUint16(viTri + 26, true), x = dv.getUint16(viTri + 28, true);
      m.du = u8.subarray(viTri + 30 + n + x, viTri + 30 + n + x + m.nen);
      muc.push(m);
      p += 46 + dTen + dPhu + dGhi;
    }
    const theoTen = new Map(muc.map((m) => [m.ten, m]));

    async function docByte(ten) {
      const m = theoTen.get(ten);
      if (!m) return null;
      if (m.moi) return m.moi;
      if (m.kieu === 0) return m.du;
      if (m.kieu !== 8) throw new Error("NEN_LA");
      return await inflateRaw(m.du);
    }
    async function docChu(ten) {
      const b = await docByte(ten);
      return b ? td.decode(b) : null;
    }
    function datChu(ten, chuoi) {
      const m = theoTen.get(ten);
      if (!m) throw new Error("KHONG_CO_MUC " + ten);
      m.moi = new TextEncoder().encode(chuoi);
    }

    async function xuat() {
      const phan = [], tt = [];
      let viTri = 0;
      for (const m of muc) {
        let du = m.du, kieu = m.kieu, crc = m.crc, goc = m.goc;
        if (m.moi) {
          if (typeof CompressionStream !== "undefined") { du = await quaLuong(m.moi, new CompressionStream("deflate-raw")); kieu = 8; }
          else { du = m.moi; kieu = 0; }   // IE11: lưu không nén, Word vẫn mở bình thường
          crc = crc32(m.moi); goc = m.moi.length;
        }
        const dau = new Uint8Array(30 + m.tenByte.length), d = new DataView(dau.buffer);
        d.setUint32(0, 0x04034b50, true); d.setUint16(4, 20, true); d.setUint16(6, m.co, true);
        d.setUint16(8, kieu, true); d.setUint16(10, m.gio, true); d.setUint16(12, m.ngay, true);
        d.setUint32(14, crc, true); d.setUint32(18, du.length, true); d.setUint32(22, goc, true);
        d.setUint16(26, m.tenByte.length, true); d.setUint16(28, 0, true);
        dau.set(m.tenByte, 30);
        const tm = new Uint8Array(46 + m.tenByte.length), e = new DataView(tm.buffer);
        e.setUint32(0, 0x02014b50, true); e.setUint16(4, 20, true); e.setUint16(6, 20, true); e.setUint16(8, m.co, true);
        e.setUint16(10, kieu, true); e.setUint16(12, m.gio, true); e.setUint16(14, m.ngay, true);
        e.setUint32(16, crc, true); e.setUint32(20, du.length, true); e.setUint32(24, goc, true);
        e.setUint16(28, m.tenByte.length, true); e.setUint32(42, viTri, true);
        tm.set(m.tenByte, 46);
        phan.push(dau, du); tt.push(tm);
        viTri += dau.length + du.length;
      }
      const coTt = tt.reduce((s, x) => s + x.length, 0);
      const cuoi = new Uint8Array(22), c = new DataView(cuoi.buffer);
      c.setUint32(0, 0x06054b50, true); c.setUint16(8, muc.length, true); c.setUint16(10, muc.length, true);
      c.setUint32(12, coTt, true); c.setUint32(16, viTri, true);
      const tong = new Uint8Array(viTri + coTt + 22);
      let o = 0;
      for (const x of phan.concat(tt, [cuoi])) { tong.set(x, o); o += x.length; }
      return tong;
    }

    return { ds: muc.map((m) => m.ten), docChu, datChu, xuat };
  }

  function sangBase64(u8) {
    let s = "";
    for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000));
    return btoa(s);
  }

  goc.ND30Zip = { mo, crc32, sangBase64, inflateRaw };
})(typeof window !== "undefined" ? window : globalThis);
