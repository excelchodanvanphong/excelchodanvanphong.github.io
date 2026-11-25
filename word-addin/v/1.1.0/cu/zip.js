function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? (c > 1 && (G.n = c < 3 ? -1 : u), d(c, u)) : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
(function (goc) {
  "use strict";

  var BANG = function () {
    var t = new Uint32Array(256);
    for (var n = 0; n < 256; n++) {
      var c = n;
      for (var k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ c >>> 1 : c >>> 1;
      t[n] = c >>> 0;
    }
    return t;
  }();
  function crc32(u8) {
    var c = 0xffffffff;
    for (var i = 0; i < u8.length; i++) c = BANG[(c ^ u8[i]) & 0xff] ^ c >>> 8;
    return (c ^ 0xffffffff) >>> 0;
  }
  function quaLuong(_x, _x2) {
    return _quaLuong.apply(this, arguments);
  }
  function _quaLuong() {
    _quaLuong = _asyncToGenerator(_regenerator().m(function _callee4(u8, luong) {
      var ra, _t2, _t3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            ra = new Blob([u8]).stream().pipeThrough(luong);
            _t2 = Uint8Array;
            _context4.n = 1;
            return new Response(ra).arrayBuffer();
          case 1:
            _t3 = _context4.v;
            return _context4.a(2, new _t2(_t3));
        }
      }, _callee4);
    }));
    return _quaLuong.apply(this, arguments);
  }
  function inflateRaw(_x3) {
    return _inflateRaw.apply(this, arguments);
  }
  function _inflateRaw() {
    _inflateRaw = _asyncToGenerator(_regenerator().m(function _callee5(u8) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            if (!(typeof DecompressionStream !== "undefined")) {
              _context5.n = 2;
              break;
            }
            _context5.n = 1;
            return quaLuong(u8, new DecompressionStream("deflate-raw"));
          case 1:
            return _context5.a(2, _context5.v);
          case 2:
            if (!goc.pako) {
              _context5.n = 3;
              break;
            }
            return _context5.a(2, goc.pako.inflateRaw(u8));
          case 3:
            throw new Error("KHONG_GIAI_NEN_DUOC");
          case 4:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return _inflateRaw.apply(this, arguments);
  }
  function mo(buf) {
    var u8 = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
    var dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
    var eocd = -1;
    for (var i = u8.length - 22; i >= Math.max(0, u8.length - 66000); i--) {
      if (dv.getUint32(i, true) === 0x06054b50) {
        eocd = i;
        break;
      }
    }
    if (eocd < 0) throw new Error("KHONG_PHAI_DOCX");
    var soMuc = dv.getUint16(eocd + 10, true);
    var p = dv.getUint32(eocd + 16, true);
    var td = new TextDecoder("utf-8");
    var muc = [];
    for (var k = 0; k < soMuc; k++) {
      if (dv.getUint32(p, true) !== 0x02014b50) throw new Error("ZIP_HONG");
      var m = {
        co: dv.getUint16(p + 8, true) & ~0x0008,
        kieu: dv.getUint16(p + 10, true),
        gio: dv.getUint16(p + 12, true),
        ngay: dv.getUint16(p + 14, true),
        crc: dv.getUint32(p + 16, true),
        nen: dv.getUint32(p + 20, true),
        goc: dv.getUint32(p + 24, true)
      };
      var dTen = dv.getUint16(p + 28, true),
        dPhu = dv.getUint16(p + 30, true),
        dGhi = dv.getUint16(p + 32, true);
      var viTri = dv.getUint32(p + 42, true);
      m.tenByte = u8.slice(p + 46, p + 46 + dTen);
      m.ten = td.decode(m.tenByte);
      var n = dv.getUint16(viTri + 26, true),
        x = dv.getUint16(viTri + 28, true);
      m.du = u8.subarray(viTri + 30 + n + x, viTri + 30 + n + x + m.nen);
      muc.push(m);
      p += 46 + dTen + dPhu + dGhi;
    }
    var theoTen = new Map(muc.map(function (m) {
      return [m.ten, m];
    }));
    function docByte(_x4) {
      return _docByte.apply(this, arguments);
    }
    function _docByte() {
      _docByte = _asyncToGenerator(_regenerator().m(function _callee(ten) {
        var m;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              m = theoTen.get(ten);
              if (m) {
                _context.n = 1;
                break;
              }
              return _context.a(2, null);
            case 1:
              if (!m.moi) {
                _context.n = 2;
                break;
              }
              return _context.a(2, m.moi);
            case 2:
              if (!(m.kieu === 0)) {
                _context.n = 3;
                break;
              }
              return _context.a(2, m.du);
            case 3:
              if (!(m.kieu !== 8)) {
                _context.n = 4;
                break;
              }
              throw new Error("NEN_LA");
            case 4:
              _context.n = 5;
              return inflateRaw(m.du);
            case 5:
              return _context.a(2, _context.v);
          }
        }, _callee);
      }));
      return _docByte.apply(this, arguments);
    }
    function docChu(_x5) {
      return _docChu.apply(this, arguments);
    }
    function _docChu() {
      _docChu = _asyncToGenerator(_regenerator().m(function _callee2(ten) {
        var b;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return docByte(ten);
            case 1:
              b = _context2.v;
              return _context2.a(2, b ? td.decode(b) : null);
          }
        }, _callee2);
      }));
      return _docChu.apply(this, arguments);
    }
    function datChu(ten, chuoi) {
      var m = theoTen.get(ten);
      if (!m) throw new Error("KHONG_CO_MUC " + ten);
      m.moi = new TextEncoder().encode(chuoi);
    }
    function xuat() {
      return _xuat.apply(this, arguments);
    }
    function _xuat() {
      _xuat = _asyncToGenerator(_regenerator().m(function _callee3() {
        var phan, tt, viTri, _iterator, _step, _m, du, kieu, crc, _goc, dau, d, tm, e, coTt, cuoi, c, tong, o, _iterator2, _step2, _x6, _t;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              phan = [], tt = [];
              viTri = 0;
              _iterator = _createForOfIteratorHelper(muc);
              _context3.p = 1;
              _iterator.s();
            case 2:
              if ((_step = _iterator.n()).done) {
                _context3.n = 8;
                break;
              }
              _m = _step.value;
              du = _m.du, kieu = _m.kieu, crc = _m.crc, _goc = _m.goc;
              if (!_m.moi) {
                _context3.n = 6;
                break;
              }
              if (!(typeof CompressionStream !== "undefined")) {
                _context3.n = 4;
                break;
              }
              _context3.n = 3;
              return quaLuong(_m.moi, new CompressionStream("deflate-raw"));
            case 3:
              du = _context3.v;
              kieu = 8;
              _context3.n = 5;
              break;
            case 4:
              du = _m.moi;
              kieu = 0;
            case 5:
              crc = crc32(_m.moi);
              _goc = _m.moi.length;
            case 6:
              dau = new Uint8Array(30 + _m.tenByte.length), d = new DataView(dau.buffer);
              d.setUint32(0, 0x04034b50, true);
              d.setUint16(4, 20, true);
              d.setUint16(6, _m.co, true);
              d.setUint16(8, kieu, true);
              d.setUint16(10, _m.gio, true);
              d.setUint16(12, _m.ngay, true);
              d.setUint32(14, crc, true);
              d.setUint32(18, du.length, true);
              d.setUint32(22, _goc, true);
              d.setUint16(26, _m.tenByte.length, true);
              d.setUint16(28, 0, true);
              dau.set(_m.tenByte, 30);
              tm = new Uint8Array(46 + _m.tenByte.length), e = new DataView(tm.buffer);
              e.setUint32(0, 0x02014b50, true);
              e.setUint16(4, 20, true);
              e.setUint16(6, 20, true);
              e.setUint16(8, _m.co, true);
              e.setUint16(10, kieu, true);
              e.setUint16(12, _m.gio, true);
              e.setUint16(14, _m.ngay, true);
              e.setUint32(16, crc, true);
              e.setUint32(20, du.length, true);
              e.setUint32(24, _goc, true);
              e.setUint16(28, _m.tenByte.length, true);
              e.setUint32(42, viTri, true);
              tm.set(_m.tenByte, 46);
              phan.push(dau, du);
              tt.push(tm);
              viTri += dau.length + du.length;
            case 7:
              _context3.n = 2;
              break;
            case 8:
              _context3.n = 10;
              break;
            case 9:
              _context3.p = 9;
              _t = _context3.v;
              _iterator.e(_t);
            case 10:
              _context3.p = 10;
              _iterator.f();
              return _context3.f(10);
            case 11:
              coTt = tt.reduce(function (s, x) {
                return s + x.length;
              }, 0);
              cuoi = new Uint8Array(22), c = new DataView(cuoi.buffer);
              c.setUint32(0, 0x06054b50, true);
              c.setUint16(8, muc.length, true);
              c.setUint16(10, muc.length, true);
              c.setUint32(12, coTt, true);
              c.setUint32(16, viTri, true);
              tong = new Uint8Array(viTri + coTt + 22);
              o = 0;
              _iterator2 = _createForOfIteratorHelper(phan.concat(tt, [cuoi]));
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _x6 = _step2.value;
                  tong.set(_x6, o);
                  o += _x6.length;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              return _context3.a(2, tong);
          }
        }, _callee3, null, [[1, 9, 10, 11]]);
      }));
      return _xuat.apply(this, arguments);
    }
    return {
      ds: muc.map(function (m) {
        return m.ten;
      }),
      docChu: docChu,
      datChu: datChu,
      xuat: xuat
    };
  }
  function sangBase64(u8) {
    var s = "";
    for (var i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000));
    return btoa(s);
  }
  goc.ND30Zip = {
    mo: mo,
    crc32: crc32,
    sangBase64: sangBase64,
    inflateRaw: inflateRaw
  };
})(typeof window !== "undefined" ? window : globalThis);