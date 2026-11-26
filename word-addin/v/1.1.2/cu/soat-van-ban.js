function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? (c > 1 && (G.n = c < 3 ? -1 : u), d(c, u)) : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n3 = 0, F = function F() {}; return { s: F, n: function n() { return _n3 >= r.length ? { done: !0 } : { done: !1, value: r[_n3++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
(function () {
  "use strict";

  var W = "http://schemas.openxmlformats.org/wordprocessingml/2006/main";
  var A = "http://schemas.openxmlformats.org/drawingml/2006/main";
  var R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships";
  var PL = "Phụ lục I Nghị định 30/2020/NĐ-CP";
  function giaiNen(_x) {
    return _giaiNen.apply(this, arguments);
  }
  function _giaiNen() {
    _giaiNen = _asyncToGenerator(_regenerator().m(function _callee2(buf) {
      var dv, u8, eocd, i, soMuc, p, td, tep, k, kieu, nen, dTen, dPhu, dGhi, viTri, ten, doc, _doc;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _doc = function _doc3() {
              _doc = _asyncToGenerator(_regenerator().m(function _callee(ten) {
                var t, n, m, du, _t;
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      t = tep[ten];
                      if (t) {
                        _context.n = 1;
                        break;
                      }
                      return _context.a(2, null);
                    case 1:
                      n = dv.getUint16(t.viTri + 26, true), m = dv.getUint16(t.viTri + 28, true);
                      du = u8.subarray(t.viTri + 30 + n + m, t.viTri + 30 + n + m + t.nen);
                      if (!(t.kieu === 0)) {
                        _context.n = 2;
                        break;
                      }
                      return _context.a(2, td.decode(du));
                    case 2:
                      if (!(t.kieu !== 8)) {
                        _context.n = 3;
                        break;
                      }
                      throw new Error("NEN_LA");
                    case 3:
                      _t = td;
                      _context.n = 4;
                      return window.ND30Zip.inflateRaw(du);
                    case 4:
                      return _context.a(2, _t.decode.call(_t, _context.v));
                  }
                }, _callee);
              }));
              return _doc.apply(this, arguments);
            };
            doc = function _doc2(_x4) {
              return _doc.apply(this, arguments);
            };
            dv = new DataView(buf), u8 = new Uint8Array(buf);
            eocd = -1;
            i = buf.byteLength - 22;
          case 1:
            if (!(i >= Math.max(0, buf.byteLength - 66000))) {
              _context2.n = 3;
              break;
            }
            if (!(dv.getUint32(i, true) === 0x06054b50)) {
              _context2.n = 2;
              break;
            }
            eocd = i;
            return _context2.a(3, 3);
          case 2:
            i--;
            _context2.n = 1;
            break;
          case 3:
            if (!(eocd < 0)) {
              _context2.n = 4;
              break;
            }
            throw new Error("KHONG_PHAI_DOCX");
          case 4:
            soMuc = dv.getUint16(eocd + 10, true);
            p = dv.getUint32(eocd + 16, true);
            td = new TextDecoder("utf-8"), tep = {};
            k = 0;
          case 5:
            if (!(k < soMuc)) {
              _context2.n = 8;
              break;
            }
            if (!(dv.getUint32(p, true) !== 0x02014b50)) {
              _context2.n = 6;
              break;
            }
            return _context2.a(3, 8);
          case 6:
            kieu = dv.getUint16(p + 10, true), nen = dv.getUint32(p + 20, true);
            dTen = dv.getUint16(p + 28, true), dPhu = dv.getUint16(p + 30, true), dGhi = dv.getUint16(p + 32, true);
            viTri = dv.getUint32(p + 42, true);
            ten = td.decode(u8.subarray(p + 46, p + 46 + dTen));
            tep[ten] = {
              kieu: kieu,
              nen: nen,
              viTri: viTri
            };
            p += 46 + dTen + dPhu + dGhi;
          case 7:
            k++;
            _context2.n = 5;
            break;
          case 8:
            return _context2.a(2, {
              co: function co(t) {
                return !!tep[t];
              },
              doc: doc,
              ds: Object.keys(tep)
            });
        }
      }, _callee2);
    }));
    return _giaiNen.apply(this, arguments);
  }
  var xml = function xml(s) {
    return s ? new DOMParser().parseFromString(s, "application/xml") : null;
  };
  var con = function con(el, ten) {
    if (!el) return null;
    var _iterator = _createForOfIteratorHelper(el.children),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var c = _step.value;
        if (c.localName === ten && c.namespaceURI === W) return c;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return null;
  };
  var tat = function tat(el, ten) {
    return el ? Array.from(el.getElementsByTagNameNS(W, ten)) : [];
  };
  var thuoc = function thuoc(el, ten) {
    return !el ? null : el.hasAttributeNS(W, ten) ? el.getAttributeNS(W, ten) : el.hasAttribute("w:" + ten) ? el.getAttribute("w:" + ten) : null;
  };
  var so = function so(v) {
    return v == null || v === "" ? null : Number(v);
  };
  var bat = function bat(el) {
    if (!el) return null;
    var v = thuoc(el, "val");
    return !(v === "0" || v === "false" || v === "none");
  };
  function docRPr(rPr) {
    if (!rPr) return {};
    var o = {},
      f = con(rPr, "rFonts");
    if (f) {
      var a = thuoc(f, "ascii") || thuoc(f, "hAnsi");
      var t = thuoc(f, "asciiTheme") || thuoc(f, "hAnsiTheme");
      if (a) o.font = a;else if (t) o.fontTheme = t;
    }
    var sz = con(rPr, "sz");
    if (sz) o.sz = so(thuoc(sz, "val")) / 2;
    var b = con(rPr, "b");
    if (b) o.b = bat(b);
    var i = con(rPr, "i");
    if (i) o.i = bat(i);
    var c = con(rPr, "color");
    if (c) o.color = (thuoc(c, "val") || "").toUpperCase();
    var caps = con(rPr, "caps");
    if (caps) o.caps = bat(caps);
    return o;
  }
  function docPPr(pPr) {
    if (!pPr) return {};
    var o = {};
    var jc = con(pPr, "jc");
    if (jc) o.jc = thuoc(jc, "val");
    var ind = con(pPr, "ind");
    if (ind) {
      var fl = thuoc(ind, "firstLine"),
        hg = thuoc(ind, "hanging");
      if (fl != null) o.firstLine = so(fl);
      if (hg != null) o.firstLine = -so(hg);
    }
    var sp = con(pPr, "spacing");
    if (sp) {
      var bf = thuoc(sp, "before"),
        af = thuoc(sp, "after"),
        ln = thuoc(sp, "line"),
        lr = thuoc(sp, "lineRule");
      if (bf != null) o.before = so(bf);
      if (af != null) o.after = so(af);
      if (ln != null) o.line = so(ln);
      if (lr) o.lineRule = lr;
    }
    if (con(pPr, "numPr")) o.list = true;
    var ps = con(pPr, "pStyle");
    if (ps) o.style = thuoc(ps, "val");
    return o;
  }
  function bangKieu(sx, theme) {
    var kieu = {},
      mac = {
        r: {},
        p: {}
      };
    var kieuDoanMacDinh = null;
    if (sx) {
      var dd = tat(sx, "docDefaults")[0];
      if (dd) {
        mac.r = docRPr(tat(dd, "rPr")[0]);
        mac.p = docPPr(tat(dd, "pPr")[0]);
      }
      var _iterator2 = _createForOfIteratorHelper(tat(sx, "style")),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var s = _step2.value;
          var id = thuoc(s, "styleId"),
            loai = thuoc(s, "type");
          var goc = con(s, "basedOn");
          kieu[id] = {
            loai: loai,
            goc: goc ? thuoc(goc, "val") : null,
            r: docRPr(con(s, "rPr")),
            p: docPPr(con(s, "pPr")),
            ten: con(s, "name") && thuoc(con(s, "name"), "val") || id
          };
          if (loai === "paragraph" && thuoc(s, "default") === "1") kieuDoanMacDinh = id;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    var fTheme = {
      minor: "",
      major: ""
    };
    if (theme) {
      var mi = theme.getElementsByTagNameNS(A, "minorFont")[0],
        ma = theme.getElementsByTagNameNS(A, "majorFont")[0];
      var lat = function lat(x) {
        return x && x.getElementsByTagNameNS(A, "latin")[0] ? x.getElementsByTagNameNS(A, "latin")[0].getAttribute("typeface") : "";
      };
      fTheme.minor = lat(mi);
      fTheme.major = lat(ma);
    }
    function chuoi(id) {
      var ds = [];
      var k = 0;
      while (id && kieu[id] && k++ < 20) {
        ds.unshift(kieu[id]);
        id = kieu[id].goc;
      }
      return ds;
    }
    return {
      mac: mac,
      kieuDoanMacDinh: kieuDoanMacDinh,
      tenKieu: function tenKieu(id) {
        return (kieu[id] || {}).ten || id;
      },
      gopR: function gopR(pStyle, rStyle, truc) {
        var o = Object.assign({}, mac.r);
        var _iterator3 = _createForOfIteratorHelper(chuoi(pStyle || kieuDoanMacDinh)),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var k = _step3.value;
            Object.assign(o, k.r);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        var _iterator4 = _createForOfIteratorHelper(chuoi(rStyle)),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _k = _step4.value;
            Object.assign(o, _k.r);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        Object.assign(o, truc);
        if (!o.font && o.fontTheme) o.font = /major/i.test(o.fontTheme) ? fTheme.major : fTheme.minor;
        if (!o.font) o.font = "Times New Roman";
        if (!o.sz) o.sz = 10;
        return o;
      },
      gopP: function gopP(pStyle, truc) {
        var o = Object.assign({}, mac.p);
        var _iterator5 = _createForOfIteratorHelper(chuoi(pStyle || kieuDoanMacDinh)),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var k = _step5.value;
            Object.assign(o, k.p);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        Object.assign(o, truc);
        return o;
      }
    };
  }
  function chuDoan(p) {
    var t = "";
    var _iterator6 = _createForOfIteratorHelper(p.getElementsByTagNameNS(W, "*")),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var el = _step6.value;
        if (el.localName === "t") t += el.textContent;else if (el.localName === "tab") t += "\t";else if (el.localName === "br" || el.localName === "cr") t += "\n";
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return t;
  }
  function trongBang(p) {
    var e = p.parentElement;
    while (e) {
      if (e.localName === "tc" || e.localName === "txbxContent") return e;
      e = e.parentElement;
    }
    return null;
  }
  function docDoan(doc, kb) {
    var ds = [];
    var stt = 0;
    var _iterator7 = _createForOfIteratorHelper(tat(doc, "p")),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var p = _step7.value;
        var e = p.parentElement,
          boQua = false;
        while (e) {
          if (e.localName === "Fallback") {
            boQua = true;
            break;
          }
          e = e.parentElement;
        }
        if (boQua) continue;
        var pPrT = docPPr(con(p, "pPr"));
        var pp = kb.gopP(pPrT.style, pPrT);
        var run = [];
        var _iterator8 = _createForOfIteratorHelper(tat(p, "r")),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var r = _step8.value;
            if (r.parentElement && r.parentElement.localName === "del") continue;
            var t = "";
            var _iterator9 = _createForOfIteratorHelper(r.children),
              _step9;
            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var c = _step9.value;
                if (c.localName === "t") t += c.textContent;else if (c.localName === "tab") t += "\t";
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
            if (!t) continue;
            var rPr = con(r, "rPr");
            var rs = rPr && con(rPr, "rStyle") ? thuoc(con(rPr, "rStyle"), "val") : null;
            run.push({
              t: t,
              p: kb.gopR(pPrT.style, rs, docRPr(rPr))
            });
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        var text = run.map(function (x) {
          return x.t;
        }).join("");
        var tc = trongBang(p);
        var d = {
          stt: 0,
          text: text,
          gon: text.replace(/\s+/g, " ").trim(),
          run: run,
          pp: pp,
          tc: tc,
          kieu: pPrT.style
        };
        if (d.gon) d.stt = ++stt;
        ds.push(d);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    return ds;
  }
  function daSo(d, ham) {
    var dem = new Map();
    var _iterator0 = _createForOfIteratorHelper(d.run),
      _step0;
    try {
      for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
        var r = _step0.value;
        var n = r.t.replace(/\s/g, "").length;
        if (!n) continue;
        var v = ham(r.p);
        dem.set(v, (dem.get(v) || 0) + n);
      }
    } catch (err) {
      _iterator0.e(err);
    } finally {
      _iterator0.f();
    }
    var tot = null,
      max = -1;
    var _iterator1 = _createForOfIteratorHelper(dem),
      _step1;
    try {
      for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
        var _step1$value = _slicedToArray(_step1.value, 2),
          _v = _step1$value[0],
          _n = _step1$value[1];
        if (_n > max) {
          max = _n;
          tot = _v;
        }
      }
    } catch (err) {
      _iterator1.e(err);
    } finally {
      _iterator1.f();
    }
    return tot;
  }
  function daSoKhop(d, re, ham) {
    var m = re.exec(d.text);
    if (!m) return daSo(d, ham);
    var a = m.index,
      b = m.index + m[0].length,
      dem = new Map();
    var vt = 0;
    var _iterator10 = _createForOfIteratorHelper(d.run),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var r = _step10.value;
        var s = Math.max(a, vt),
          e = Math.min(b, vt + r.t.length);
        if (e > s) {
          var n = r.t.slice(s - vt, e - vt).replace(/\s/g, "").length;
          if (n) {
            var v = ham(r.p);
            dem.set(v, (dem.get(v) || 0) + n);
          }
        }
        vt += r.t.length;
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    var tot = null,
      max = -1;
    var _iterator11 = _createForOfIteratorHelper(dem),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var _step11$value = _slicedToArray(_step11.value, 2),
          _v2 = _step11$value[0],
          _n2 = _step11$value[1];
        if (_n2 > max) {
          max = _n2;
          tot = _v2;
        }
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    return tot;
  }
  var coChu = function coChu(d) {
    return d.run.reduce(function (s, r) {
      return s + r.t.replace(/\s/g, "").length;
    }, 0);
  };
  var trich = function trich(s) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 70;
    s = s.replace(/\s+/g, " ").trim();
    return s.length > n ? s.slice(0, n - 1) + "…" : s;
  };
  var mm = function mm(tw) {
    return Math.round(tw / 56.6929 * 10) / 10;
  };
  var vd = function vd(d) {
    return {
      doan: d.stt,
      trich: trich(d.gon)
    };
  };
  function soat(_x2, _x3) {
    return _soat.apply(this, arguments);
  }
  function _soat() {
    _soat = _asyncToGenerator(_regenerator().m(function _callee4(buf, tenFile) {
      var z, doc, sx, theme, rels, app, kb, doan, coNoiDung, kq, them, than, sect, loiGiay, loiLe, ngang, phong, mau, _iterator12, _step12, _d, _iterator17, _step17, _r, n, f, x, ds, cacMau, saiCo, khongDeu, thuong, saiLui, saiDong, p, mo, sat, relMap, _iterator13, _step13, r, coPage, pageDau, pageChan, jcDau, trangDau, caiDat, chanLe, _iterator14, _step14, _step14$value, i, s, _iterator18, _step18, h, _tep, loai, s2, _x6, pjc, soTrang, dau, reQH, reTN, qh, sai, co, dam, t, tn, _sai, _co, _dam, _t2, so_, _sai2, _t3, m, kh, khIn, _co2, ngay, _sai3, _m, dd, nghieng, _co3, ngayKhac, kg, tenLoai, nn, _sai4, _co4, i0, dong, k, d, coDong, cuoi, truocCuoi, nhomCC, _k2, g, _i, _nhomCC, _nhomCC$_i, _g, sau, _sai5, giua, docLap, _cuoi, HHL, _loop, _i2, _HHL, lamSach, toanVan, LA_MA, chuaGiai, daXet, _iterator15, _step15, _m2, tu, giai, goLoi, _iterator16, _step16, _d2, _t4, trong, dem, _t5, _t6, _t7, _t8, _t9, _t0, _t1, _t10, _t11, _t12, _t13;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            _context5.n = 1;
            return giaiNen(buf);
          case 1:
            z = _context5.v;
            _context5.n = 3;
            break;
          case 2:
            _context5.p = 2;
            _t5 = _context5.v;
            throw new Error("Không mở được file. Chỉ nhận file Word .docx (file .doc cũ: mở bằng Word, chọn Lưu thành .docx).");
          case 3:
            if (z.co("word/document.xml")) {
              _context5.n = 4;
              break;
            }
            throw new Error("File này không phải văn bản Word .docx.");
          case 4:
            _t6 = xml;
            _context5.n = 5;
            return z.doc("word/document.xml");
          case 5:
            doc = _t6(_context5.v);
            _t7 = xml;
            _context5.n = 6;
            return z.doc("word/styles.xml");
          case 6:
            sx = _t7(_context5.v);
            _t8 = xml;
            _context5.n = 7;
            return z.doc("word/theme/theme1.xml");
          case 7:
            theme = _t8(_context5.v);
            _t9 = xml;
            _context5.n = 8;
            return z.doc("word/_rels/document.xml.rels");
          case 8:
            rels = _t9(_context5.v);
            _context5.n = 9;
            return z.doc("docProps/app.xml");
          case 9:
            app = _context5.v;
            kb = bangKieu(sx, theme);
            doan = docDoan(doc, kb);
            coNoiDung = doan.filter(function (d) {
              return d.gon;
            });
            kq = [];
            them = function them(o) {
              return kq.push(Object.assign({
                vi_du: []
              }, o));
            };
            if (!(coNoiDung.length === 0)) {
              _context5.n = 10;
              break;
            }
            throw new Error("Văn bản trống, không có chữ để soát.");
          case 10:
            than = coNoiDung.filter(function (d) {
              return !d.tc && d.gon.length >= 80 && d.pp.jc !== "center" && d.gon !== d.gon.toUpperCase();
            });
            sect = tat(doc, "sectPr");
            loiGiay = [], loiLe = [], ngang = false;
            sect.forEach(function (s, i) {
              var sz = con(s, "pgSz"),
                mg = con(s, "pgMar");
              if (sz) {
                var w = so(thuoc(sz, "w")),
                  h = so(thuoc(sz, "h"));
                var a4 = function a4(x, y) {
                  return Math.abs(x - 11906) <= 60 && Math.abs(y - 16838) <= 60;
                };
                if (a4(w, h)) {} else if (a4(h, w)) ngang = true;else loiGiay.push("Ph\u1EA7n ".concat(i + 1, ": ").concat(mm(w), " \xD7 ").concat(mm(h), " mm"));
              }
              if (mg) {
                var v = {
                  tren: Math.abs(so(thuoc(mg, "top"))),
                  duoi: Math.abs(so(thuoc(mg, "bottom"))),
                  trai: so(thuoc(mg, "left")),
                  phai: so(thuoc(mg, "right"))
                };
                var sai = [];
                var ngoai = function ngoai(x, a, b) {
                  return mm(x) < a - 0.3 || mm(x) > b + 0.3;
                };
                if (ngoai(v.tren, 20, 25)) sai.push("tr\xEAn ".concat(mm(v.tren), " mm"));
                if (ngoai(v.duoi, 20, 25)) sai.push("d\u01B0\u1EDBi ".concat(mm(v.duoi), " mm"));
                if (ngoai(v.trai, 30, 35)) sai.push("tr\xE1i ".concat(mm(v.trai), " mm"));
                if (ngoai(v.phai, 15, 20)) sai.push("ph\u1EA3i ".concat(mm(v.phai), " mm"));
                if (sai.length) loiLe.push((sect.length > 1 ? "Ph\u1EA7n ".concat(i + 1, ": ") : "") + sai.join(", "));
              }
            });
            them(loiGiay.length ? {
              muc: "loi",
              ma: "kho-giay",
              tieu_de: "Khổ giấy không phải A4",
              chi_tiet: loiGiay.join("; "),
              can_cu: "M\u1EE5c I.1 Ph\u1EA7n I ".concat(PL, ": kh\u1ED5 A4 (210 \xD7 297 mm)."),
              cach_sua: "Layout › Size › A4."
            } : {
              muc: "dat",
              ma: "kho-giay",
              tieu_de: ngang ? "Khổ A4 (có phần trình bày ngang)" : "Khổ giấy A4",
              chi_tiet: ngang ? "Trình bày ngang chỉ dùng khi văn bản có bảng, biểu không làm thành phụ lục riêng (mục I.2)." : "",
              can_cu: "M\u1EE5c I.1, I.2 Ph\u1EA7n I ".concat(PL, ".")
            });
            them(loiLe.length ? {
              muc: "loi",
              ma: "le",
              tieu_de: "Lề trang chưa đúng",
              chi_tiet: loiLe.join("; ") + ". Đúng: trên, dưới 20–25 mm; trái 30–35 mm; phải 15–20 mm.",
              can_cu: "M\u1EE5c I.3 Ph\u1EA7n I ".concat(PL, "."),
              cach_sua: "Layout › Margins › Custom Margins: Top 2 cm, Bottom 2 cm, Left 3 cm, Right 1,5 cm (hoặc trong khoảng cho phép)."
            } : {
              muc: "dat",
              ma: "le",
              tieu_de: "Lề trang đúng khoảng quy định",
              can_cu: "M\u1EE5c I.3 Ph\u1EA7n I ".concat(PL, ".")
            });
            phong = new Map(), mau = [];
            _iterator12 = _createForOfIteratorHelper(coNoiDung);
            _context5.p = 11;
            _iterator12.s();
          case 12:
            if ((_step12 = _iterator12.n()).done) {
              _context5.n = 21;
              break;
            }
            _d = _step12.value;
            _iterator17 = _createForOfIteratorHelper(_d.run);
            _context5.p = 13;
            _iterator17.s();
          case 14:
            if ((_step17 = _iterator17.n()).done) {
              _context5.n = 17;
              break;
            }
            _r = _step17.value;
            n = _r.t.replace(/[\s\d.,;:()\-–/]/g, "").length;
            if (n) {
              _context5.n = 15;
              break;
            }
            return _context5.a(3, 16);
          case 15:
            f = (_r.p.font || "").trim();
            if (!/^times new roman$/i.test(f)) {
              x = phong.get(f) || {
                n: 0,
                d: _d
              };
              x.n += n;
              phong.set(f, x);
            }
            if (_r.p.color && _r.p.color !== "AUTO" && _r.p.color !== "000000") mau.push({
              d: _d,
              mau: _r.p.color,
              t: _r.t
            });
          case 16:
            _context5.n = 14;
            break;
          case 17:
            _context5.n = 19;
            break;
          case 18:
            _context5.p = 18;
            _t0 = _context5.v;
            _iterator17.e(_t0);
          case 19:
            _context5.p = 19;
            _iterator17.f();
            return _context5.f(19);
          case 20:
            _context5.n = 12;
            break;
          case 21:
            _context5.n = 23;
            break;
          case 22:
            _context5.p = 22;
            _t1 = _context5.v;
            _iterator12.e(_t1);
          case 23:
            _context5.p = 23;
            _iterator12.f();
            return _context5.f(23);
          case 24:
            if (phong.size) {
              ds = _toConsumableArray(phong.entries()).sort(function (a, b) {
                return b[1].n - a[1].n;
              });
              them({
                muc: "loi",
                ma: "phong",
                tieu_de: "Có chữ không dùng phông Times New Roman",
                chi_tiet: "Phông khác: " + ds.map(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                    f = _ref2[0],
                    x = _ref2[1];
                  return "".concat(f || "(không rõ)", " (").concat(x.n, " k\xFD t\u1EF1)");
                }).join(", ") + ".",
                can_cu: "M\u1EE5c I.4 Ph\u1EA7n I ".concat(PL, ": ph\xF4ng Times New Roman, b\u1ED9 m\xE3 Unicode, m\xE0u \u0111en."),
                cach_sua: "Ctrl + A, chọn phông Times New Roman. Sửa luôn trong Style Normal (chuột phải Normal › Modify) để đoạn mới không bị lại.",
                vi_du: ds.slice(0, 4).map(function (_ref3) {
                  var _ref4 = _slicedToArray(_ref3, 2),
                    f = _ref4[0],
                    x = _ref4[1];
                  return vd(x.d);
                }),
                video: "59"
              });
            } else them({
              muc: "dat",
              ma: "phong",
              tieu_de: "Toàn bộ chữ dùng Times New Roman",
              can_cu: "M\u1EE5c I.4 Ph\u1EA7n I ".concat(PL, ".")
            });
            if (mau.length) {
              cacMau = _toConsumableArray(new Set(mau.map(function (x) {
                return "#" + x.mau;
              })));
              them({
                muc: "loi",
                ma: "mau",
                tieu_de: "Có chữ không phải màu đen",
                chi_tiet: "".concat(mau.length, " \u0111o\u1EA1n ch\u1EEF m\xE0u ").concat(cacMau.slice(0, 5).join(", "), ". Ch\u1EEF \u0111\u1ECF, xanh th\u01B0\u1EDDng l\xE0 ghi ch\xFA so\u1EA1n th\u1EA3o qu\xEAn xo\xE1."),
                can_cu: "M\u1EE5c I.4 Ph\u1EA7n I ".concat(PL, ": ph\xF4ng ch\u1EEF m\xE0u \u0111en."),
                cach_sua: "Ctrl + A › Font Color › Automatic (hoặc Black).",
                vi_du: _toConsumableArray(new Map(mau.map(function (x) {
                  return [x.d.stt, x.d];
                })).values()).slice(0, 5).map(vd),
                video: "59"
              });
            } else them({
              muc: "dat",
              ma: "mau",
              tieu_de: "Chữ màu đen",
              can_cu: "M\u1EE5c I.4 Ph\u1EA7n I ".concat(PL, ".")
            });
            if (than.length) {
              saiCo = than.filter(function (d) {
                var c = daSo(d, function (p) {
                  return p.sz;
                });
                return c < 13 || c > 14;
              });
              them(saiCo.length ? {
                muc: "loi",
                ma: "co-chu",
                tieu_de: "Cỡ chữ nội dung ngoài khoảng 13–14",
                chi_tiet: "".concat(saiCo.length, "/").concat(than.length, " \u0111o\u1EA1n n\u1ED9i dung, v\xED d\u1EE5 c\u1EE1 ").concat(daSo(saiCo[0], function (p) {
                  return p.sz;
                }), "."),
                can_cu: "M\u1EE5c II.6 \u0111i\u1EC3m e Ph\u1EA7n I ".concat(PL, ": n\u1ED9i dung v\u0103n b\u1EA3n c\u1EE1 ch\u1EEF t\u1EEB 13 \u0111\u1EBFn 14."),
                cach_sua: "Bôi phần nội dung, chọn cỡ 14 (hoặc 13). Gọn nhất: sửa cỡ trong Style Normal.",
                vi_du: saiCo.slice(0, 5).map(vd)
              } : {
                muc: "dat",
                ma: "co-chu",
                tieu_de: "Cỡ chữ nội dung 13–14",
                can_cu: "M\u1EE5c II.6 \u0111i\u1EC3m e Ph\u1EA7n I ".concat(PL, ".")
              });
              khongDeu = than.filter(function (d) {
                return d.pp.jc !== "both" && d.pp.jc !== "distribute";
              });
              if (khongDeu.length > than.length * 0.2) them({
                muc: "canh-bao",
                ma: "canh-deu",
                tieu_de: "Nội dung chưa canh đều hai lề",
                chi_tiet: "".concat(khongDeu.length, "/").concat(than.length, " \u0111o\u1EA1n n\u1ED9i dung \u0111ang canh tr\xE1i ho\u1EB7c canh kh\xE1c."),
                can_cu: "M\u1EE5c II.6 \u0111i\u1EC3m e Ph\u1EA7n I ".concat(PL, ": n\u1ED9i dung \u0111\u01B0\u1EE3c canh \u0111\u1EC1u c\u1EA3 hai l\u1EC1."),
                cach_sua: "Bôi nội dung, bấm Ctrl + J.",
                vi_du: khongDeu.slice(0, 4).map(vd)
              });else them({
                muc: "dat",
                ma: "canh-deu",
                tieu_de: "Nội dung canh đều hai lề",
                can_cu: "M\u1EE5c II.6 \u0111i\u1EC3m e Ph\u1EA7n I ".concat(PL, ".")
              });
              thuong = than.filter(function (d) {
                return !d.pp.list && !/^[-+•]/.test(d.gon);
              });
              saiLui = thuong.filter(function (d) {
                var f = d.pp.firstLine || 0;
                return !(Math.abs(f - 567) <= 30 || Math.abs(f - 720) <= 30);
              });
              if (thuong.length && saiLui.length > thuong.length * 0.2) them({
                muc: "canh-bao",
                ma: "lui-dau-dong",
                tieu_de: "Đầu dòng chưa lùi 1 cm hoặc 1,27 cm",
                chi_tiet: "".concat(saiLui.length, "/").concat(thuong.length, " \u0111o\u1EA1n, v\xED d\u1EE5 \u0111ang l\xF9i ").concat(((saiLui[0].pp.firstLine || 0) / 567).toFixed(2).replace(".", ","), " cm."),
                can_cu: "M\u1EE5c II.6 \u0111i\u1EC3m e Ph\u1EA7n I ".concat(PL, ": khi xu\u1ED1ng d\xF2ng, ch\u1EEF \u0111\u1EA7u d\xF2ng l\xF9i v\xE0o 1 cm ho\u1EB7c 1,27 cm."),
                cach_sua: "Bôi nội dung › chuột phải › Paragraph › Special: First line, By: 1 cm (hoặc 1,27 cm). Đừng lùi bằng phím cách hay Tab.",
                vi_du: saiLui.slice(0, 4).map(vd)
              });else if (thuong.length) them({
                muc: "dat",
                ma: "lui-dau-dong",
                tieu_de: "Đầu dòng lùi đúng 1 cm hoặc 1,27 cm",
                can_cu: "M\u1EE5c II.6 \u0111i\u1EC3m e Ph\u1EA7n I ".concat(PL, ".")
              });
              saiDong = than.filter(function (d) {
                var p = d.pp,
                  co = daSo(d, function (x) {
                    return x.sz;
                  }) || 14;
                if (!p.line) return false;
                if (!p.lineRule || p.lineRule === "auto") return p.line < 236 || p.line > 364;
                var pt = p.line / 20;
                return pt < co * 1.0 || pt > co * 1.75;
              });
              if (saiDong.length) {
                p = saiDong[0].pp;
                mo = !p.lineRule || p.lineRule === "auto" ? "".concat((p.line / 240).toFixed(2).replace(".", ","), " d\xF2ng") : "".concat(p.lineRule === "exact" ? "Exactly" : "At least", " ").concat(p.line / 20, "pt");
                them({
                  muc: "loi",
                  ma: "gian-dong",
                  tieu_de: "Giãn dòng ngoài khoảng dòng đơn đến 1,5 dòng",
                  chi_tiet: "".concat(saiDong.length, "/").concat(than.length, " \u0111o\u1EA1n, v\xED d\u1EE5 \u0111ang \u0111\u1EB7t ").concat(mo, "."),
                  can_cu: "M\u1EE5c II.6 \u0111i\u1EC3m e Ph\u1EA7n I ".concat(PL, ": kho\u1EA3ng c\xE1ch gi\u1EEFa c\xE1c d\xF2ng t\u1ED1i thi\u1EC3u l\xE0 d\xF2ng \u0111\u01A1n, t\u1ED1i \u0111a l\xE0 1,5 lines."),
                  cach_sua: "Bôi nội dung › Paragraph › Line spacing: Single, 1.5 lines, hoặc Exactly 17–20pt với cỡ 14.",
                  vi_du: saiDong.slice(0, 4).map(vd)
                });
              } else them({
                muc: "dat",
                ma: "gian-dong",
                tieu_de: "Giãn dòng trong khoảng cho phép",
                can_cu: "M\u1EE5c II.6 \u0111i\u1EC3m e Ph\u1EA7n I ".concat(PL, ".")
              });
              sat = than.filter(function (d) {
                return Math.max(d.pp.before || 0, d.pp.after || 0) < 118;
              });
              if (sat.length > than.length * 0.3) them({
                muc: "canh-bao",
                ma: "cach-doan",
                tieu_de: "Khoảng cách giữa các đoạn dưới 6pt",
                chi_tiet: "".concat(sat.length, "/").concat(than.length, " \u0111o\u1EA1n c\xF3 c\xE1ch tr\xEAn, c\xE1ch d\u01B0\u1EDBi \u0111\u1EC1u nh\u1ECF h\u01A1n 6pt."),
                can_cu: "M\u1EE5c II.6 \u0111i\u1EC3m e Ph\u1EA7n I ".concat(PL, ": kho\u1EA3ng c\xE1ch gi\u1EEFa c\xE1c \u0111o\u1EA1n v\u0103n t\u1ED1i thi\u1EC3u l\xE0 6pt."),
                cach_sua: "Bôi nội dung › Paragraph › Spacing Before: 6pt, After: 6pt.",
                vi_du: sat.slice(0, 3).map(vd)
              });else them({
                muc: "dat",
                ma: "cach-doan",
                tieu_de: "Cách đoạn từ 6pt",
                can_cu: "M\u1EE5c II.6 \u0111i\u1EC3m e Ph\u1EA7n I ".concat(PL, ".")
              });
            }
            relMap = {};
            if (rels) {
              _iterator13 = _createForOfIteratorHelper(rels.getElementsByTagName("Relationship"));
              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  r = _step13.value;
                  relMap[r.getAttribute("Id")] = "word/" + r.getAttribute("Target").replace(/^\/?word\//, "");
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }
            }
            coPage = function () {
              var _ref5 = _asyncToGenerator(_regenerator().m(function _callee3(tep) {
                var s;
                return _regenerator().w(function (_context3) {
                  while (1) switch (_context3.n) {
                    case 0:
                      _context3.n = 1;
                      return z.doc(tep);
                    case 1:
                      s = _context3.v;
                      if (s) {
                        _context3.n = 2;
                        break;
                      }
                      return _context3.a(2, null);
                    case 2:
                      return _context3.a(2, /PAGE(?!S)\b/.test(s.replace(/NUMPAGES|SECTIONPAGES/g, "")) && /instrText|fldSimple/.test(s) ? s : null);
                  }
                }, _callee3);
              }));
              return function coPage(_x5) {
                return _ref5.apply(this, arguments);
              };
            }();
            pageDau = false, pageChan = false, jcDau = null, trangDau = true;
            _context5.n = 25;
            return z.doc("word/settings.xml");
          case 25:
            caiDat = _context5.v;
            chanLe = !!caiDat && /<w:evenAndOddHeaders(?![^>]*w:val="(?:0|false)")/.test(caiDat);
            _iterator14 = _createForOfIteratorHelper(sect.entries());
            _context5.p = 26;
            _iterator14.s();
          case 27:
            if ((_step14 = _iterator14.n()).done) {
              _context5.n = 40;
              break;
            }
            _step14$value = _slicedToArray(_step14.value, 2), i = _step14$value[0], s = _step14$value[1];
            if (i === 0 && !con(s, "titlePg")) trangDau = false;
            _iterator18 = _createForOfIteratorHelper(Array.from(s.children).filter(function (c) {
              return c.localName === "headerReference" || c.localName === "footerReference";
            }));
            _context5.p = 28;
            _iterator18.s();
          case 29:
            if ((_step18 = _iterator18.n()).done) {
              _context5.n = 36;
              break;
            }
            h = _step18.value;
            _tep = relMap[h.getAttributeNS(R, "id") || h.getAttribute("r:id")];
            if (_tep) {
              _context5.n = 30;
              break;
            }
            return _context5.a(3, 35);
          case 30:
            loai = thuoc(h, "type");
            if (!(loai === "even" && !chanLe)) {
              _context5.n = 31;
              break;
            }
            return _context5.a(3, 35);
          case 31:
            if (!(loai === "first" && !con(s, "titlePg"))) {
              _context5.n = 32;
              break;
            }
            return _context5.a(3, 35);
          case 32:
            _context5.n = 33;
            return coPage(_tep);
          case 33:
            s2 = _context5.v;
            if (s2) {
              _context5.n = 34;
              break;
            }
            return _context5.a(3, 35);
          case 34:
            if (h.localName === "footerReference") pageChan = true;else if (loai !== "first") {
              pageDau = true;
              _x6 = xml(s2);
              pjc = tat(_x6, "jc")[0];
              jcDau = pjc ? thuoc(pjc, "val") : jcDau;
            }
          case 35:
            _context5.n = 29;
            break;
          case 36:
            _context5.n = 38;
            break;
          case 37:
            _context5.p = 37;
            _t10 = _context5.v;
            _iterator18.e(_t10);
          case 38:
            _context5.p = 38;
            _iterator18.f();
            return _context5.f(38);
          case 39:
            _context5.n = 27;
            break;
          case 40:
            _context5.n = 42;
            break;
          case 41:
            _context5.p = 41;
            _t11 = _context5.v;
            _iterator14.e(_t11);
          case 42:
            _context5.p = 42;
            _iterator14.f();
            return _context5.f(42);
          case 43:
            soTrang = app ? Number((app.match(/<Pages>(\d+)<\/Pages>/) || [])[1] || 0) : 0;
            if (pageChan) them({
              muc: "loi",
              ma: "so-trang",
              tieu_de: "Số trang đặt ở chân trang",
              chi_tiet: "Số trang phải đặt ở phần lề trên, canh giữa.",
              can_cu: "M\u1EE5c I.7 Ph\u1EA7n I ".concat(PL, ": s\u1ED1 trang canh gi\u1EEFa theo chi\u1EC1u ngang trong ph\u1EA7n l\u1EC1 tr\xEAn, kh\xF4ng hi\u1EC3n th\u1ECB s\u1ED1 trang th\u1EE9 nh\u1EA5t."),
              cach_sua: "Bấm đúp chân trang, xoá số. Insert › Page Number › Top of Page › Plain Number 2 (giữa), tick Different First Page.",
              video: "47"
            });else if (!pageDau && (soTrang > 1 || coNoiDung.reduce(function (s, d) {
              return s + d.gon.length;
            }, 0) > 3500)) them({
              muc: "canh-bao",
              ma: "so-trang",
              tieu_de: "Văn bản nhiều trang nhưng chưa đánh số trang",
              can_cu: "M\u1EE5c I.7 Ph\u1EA7n I ".concat(PL, "."),
              cach_sua: "Insert › Page Number › Top of Page › Plain Number 2, tick Different First Page.",
              video: "47"
            });else if (pageDau && !trangDau) them({
              muc: "loi",
              ma: "so-trang",
              tieu_de: "Trang đầu đang hiện số trang",
              can_cu: "M\u1EE5c I.7 Ph\u1EA7n I ".concat(PL, ": kh\xF4ng hi\u1EC3n th\u1ECB s\u1ED1 trang th\u1EE9 nh\u1EA5t."),
              cach_sua: "Bấm đúp vào đầu trang, tick Different First Page.",
              video: "47"
            });else if (pageDau && jcDau && jcDau !== "center") them({
              muc: "canh-bao",
              ma: "so-trang",
              tieu_de: "Số trang chưa canh giữa",
              can_cu: "M\u1EE5c I.7 Ph\u1EA7n I ".concat(PL, "."),
              cach_sua: "Bấm đúp vào số trang, Ctrl + E."
            });else if (pageDau) them({
              muc: "dat",
              ma: "so-trang",
              tieu_de: "Số trang ở lề trên, ẩn trang đầu",
              can_cu: "M\u1EE5c I.7 Ph\u1EA7n I ".concat(PL, ".")
            });
            dau = coNoiDung.slice(0, 30);
            reQH = /C[ỘO]NG\s+H[OÒ]À?A?\s+X[ÃA]\s+H[ỘO]I\s+CH[ỦU]\s+NGH[ĨI]A\s+VI[ỆE]T\s+NAM/i;
            reTN = /Độc\s*lập.{0,4}Tự\s*do.{0,4}Hạnh\s*phúc/i;
            qh = dau.find(function (d) {
              return reQH.test(d.gon.normalize("NFC"));
            });
            if (qh) {
              sai = [], co = daSoKhop(qh, reQH, function (p) {
                return p.sz;
              }), dam = daSoKhop(qh, reQH, function (p) {
                return !!p.b;
              });
              t = qh.gon.match(/c[ộo]ng.*nam/i)[0];
              if (t !== t.toUpperCase() && !daSo(qh, function (p) {
                return !!p.caps;
              })) sai.push("chưa viết in hoa");
              if (/HOÀ/.test(t)) sai.push("Nghị định viết “HÒA” (dấu trên chữ O), bản này viết “HOÀ”");
              if (co < 12 || co > 13) sai.push("c\u1EE1 ".concat(co, ", \u0111\xFAng l\xE0 12\u201313"));
              if (!dam) sai.push("chưa in đậm");
              them(sai.length ? {
                muc: "loi",
                ma: "quoc-hieu",
                tieu_de: "Quốc hiệu chưa đúng",
                chi_tiet: sai.join("; ") + ".",
                can_cu: "M\u1EE5c II.1 \u0111i\u1EC3m a Ph\u1EA7n I ".concat(PL, ": ch\u1EEF in hoa, c\u1EE1 12\u201313, \u0111\u1EE9ng, \u0111\u1EADm."),
                cach_sua: "Gõ lại đúng “CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM”, cỡ 12 hoặc 13, Ctrl + B.",
                vi_du: [vd(qh)]
              } : {
                muc: "dat",
                ma: "quoc-hieu",
                tieu_de: "Quốc hiệu đúng chữ, cỡ, kiểu",
                can_cu: "M\u1EE5c II.1 \u0111i\u1EC3m a Ph\u1EA7n I ".concat(PL, ".")
              });
            }
            tn = dau.find(function (d) {
              return reTN.test(d.gon.normalize("NFC"));
            });
            if (tn) {
              _sai = [], _co = daSoKhop(tn, reTN, function (p) {
                return p.sz;
              }), _dam = daSoKhop(tn, reTN, function (p) {
                return !!p.b;
              });
              _t2 = tn.gon.normalize("NFC").match(/Độc\s*lập.{0,4}Tự\s*do.{0,4}Hạnh\s*phúc/i)[0];
              if (_t2 !== "Độc lập - Tự do - Hạnh phúc") {
                if (/[–—]/.test(_t2)) _sai.push("đang dùng gạch dài (– hoặc —), đúng là gạch nối (-)");else if (/\S-|-\S/.test(_t2)) _sai.push("thiếu khoảng trắng hai bên gạch nối");else _sai.push("\u0111ang vi\u1EBFt \u201C".concat(_t2, "\u201D, \u0111\xFAng l\xE0 \u201C\u0110\u1ED9c l\u1EADp - T\u1EF1 do - H\u1EA1nh ph\xFAc\u201D"));
              }
              if (_co < 13 || _co > 14) _sai.push("c\u1EE1 ".concat(_co, ", \u0111\xFAng l\xE0 13\u201314"));
              if (!_dam) _sai.push("chưa in đậm");
              them(_sai.length ? {
                muc: "loi",
                ma: "tieu-ngu",
                tieu_de: "Tiêu ngữ chưa đúng",
                chi_tiet: _sai.join("; ") + ".",
                can_cu: "M\u1EE5c II.1 \u0111i\u1EC3m b Ph\u1EA7n I ".concat(PL, ": ch\u1EEF in th\u01B0\u1EDDng, c\u1EE1 13\u201314, \u0111\u1EE9ng, \u0111\u1EADm, gi\u1EEFa c\xE1c c\u1EE5m t\u1EEB c\xF3 g\u1EA1ch n\u1ED1i (-), c\xF3 c\xE1ch ch\u1EEF."),
                cach_sua: "Gõ lại đúng “Độc lập - Tự do - Hạnh phúc” bằng phím gạch ngang thường. Nếu Word vừa tự đổi thành gạch dài thì bấm Ctrl + Z một lần.",
                vi_du: [vd(tn)]
              } : {
                muc: "dat",
                ma: "tieu-ngu",
                tieu_de: "Tiêu ngữ đúng chữ, gạch nối, cỡ, kiểu",
                can_cu: "M\u1EE5c II.1 \u0111i\u1EC3m b Ph\u1EA7n I ".concat(PL, ".")
              });
            }
            so_ = dau.find(function (d) {
              return /^Số\s*[:.]?\s*[\d\s]*\//.test(d.gon) || /^Số\s*:/.test(d.gon);
            });
            if (so_) {
              _sai2 = [], _t3 = so_.gon;
              if (!/^Số\s*:/.test(_t3)) _sai2.push("sau chữ “Số” thiếu dấu hai chấm");
              m = _t3.match(/^Số\s*:?\s*(\d+)\s*\//);
              if (m && Number(m[1]) < 10 && m[1].length < 2) _sai2.push("s\u1ED1 \u201C".concat(m[1], "\u201D nh\u1ECF h\u01A1n 10 ph\u1EA3i ghi \u201C0").concat(m[1], "\u201D"));
              kh = (_t3.split("/").slice(1).join("/") || "").trim();
              if (kh && /\s-|-\s/.test(kh)) _sai2.push("k\xFD hi\u1EC7u \u201C".concat(kh, "\u201D c\xF3 kho\u1EA3ng tr\u1EAFng quanh g\u1EA1ch n\u1ED1i, \u0111\xFAng l\xE0 kh\xF4ng c\xE1ch ch\u1EEF"));
              khIn = kh.replace(/\bTTr\b/g, "TTR");
              if (kh && khIn !== khIn.toUpperCase()) _sai2.push("k\xFD hi\u1EC7u \u201C".concat(kh, "\u201D ph\u1EA3i vi\u1EBFt in hoa"));
              _co2 = daSo(so_, function (p) {
                return p.sz;
              });
              if (_co2 && _co2 !== 13) _sai2.push("c\u1EE1 ".concat(_co2, ", \u0111\xFAng l\xE0 13"));
              them(_sai2.length ? {
                muc: "loi",
                ma: "so-ky-hieu",
                tieu_de: "Số, ký hiệu văn bản chưa đúng",
                chi_tiet: _sai2.join("; ") + ".",
                can_cu: "M\u1EE5c II.3 \u0111i\u1EC3m c Ph\u1EA7n I ".concat(PL, ": sau \u201CS\u1ED1\u201D c\xF3 d\u1EA5u hai ch\u1EA5m, s\u1ED1 nh\u1ECF h\u01A1n 10 ghi th\xEAm s\u1ED1 0, k\xFD hi\u1EC7u in hoa c\u1EE1 13, gi\u1EEFa c\xE1c nh\xF3m ch\u1EEF vi\u1EBFt t\u1EAFt c\xF3 g\u1EA1ch n\u1ED1i, kh\xF4ng c\xE1ch ch\u1EEF."),
                cach_sua: "Sửa trực tiếp dòng Số, ví dụ “Số: 05/BC-UBND”.",
                vi_du: [vd(so_)]
              } : {
                muc: "dat",
                ma: "so-ky-hieu",
                tieu_de: "Số, ký hiệu văn bản đúng cách viết",
                can_cu: "M\u1EE5c II.3 \u0111i\u1EC3m c Ph\u1EA7n I ".concat(PL, ".")
              });
            }
            ngay = dau.find(function (d) {
              return /ngày\s+\d{1,2}\s+tháng\s+\d{1,2}\s+năm\s+\d{4}/.test(d.gon) && !/^(Căn\s+cứ|Theo|Về|V\/v|Số)/i.test(d.gon) && d.gon.indexOf("ngày") <= 45 && d.gon.length < 90;
            });
            if (ngay) {
              _sai3 = [], _m = ngay.gon.match(/ngày\s+(\d{1,2})\s+tháng\s+(\d{1,2})\s+năm/);
              if (_m[1].length === 1) _sai3.push("\u201Cng\xE0y ".concat(_m[1], "\u201D ph\u1EA3i ghi \u201Cng\xE0y 0").concat(_m[1], "\u201D"));
              if (_m[2].length === 1 && (_m[2] === "1" || _m[2] === "2")) _sai3.push("\u201Cth\xE1ng ".concat(_m[2], "\u201D ph\u1EA3i ghi \u201Cth\xE1ng 0").concat(_m[2], "\u201D"));
              dd = ngay.gon.match(/^(.*?)\s*ngày\s+\d/);
              if (dd && dd[1].trim() && !/,$/.test(dd[1].trim())) _sai3.push("sau \u0111\u1ECBa danh \u201C".concat(dd[1].trim(), "\u201D thi\u1EBFu d\u1EA5u ph\u1EA9y"));
              nghieng = daSo(ngay, function (p) {
                return !!p.i;
              }), _co3 = daSo(ngay, function (p) {
                return p.sz;
              });
              if (!nghieng) _sai3.push("chưa in nghiêng");
              if (_co3 < 13 || _co3 > 14) _sai3.push("c\u1EE1 ".concat(_co3, ", \u0111\xFAng l\xE0 13\u201314"));
              them(_sai3.length ? {
                muc: "loi",
                ma: "ngay-thang",
                tieu_de: "Dòng địa danh, ngày tháng chưa đúng",
                chi_tiet: _sai3.join("; ") + ".",
                can_cu: "M\u1EE5c II.4 \u0111i\u1EC3m b, c Ph\u1EA7n I ".concat(PL, ": ng\xE0y nh\u1ECF h\u01A1n 10 v\xE0 th\xE1ng 1, 2 ghi th\xEAm s\u1ED1 0; ch\u1EEF in th\u01B0\u1EDDng, c\u1EE1 13\u201314, nghi\xEAng; sau \u0111\u1ECBa danh c\xF3 d\u1EA5u ph\u1EA9y."),
                cach_sua: "Sửa trực tiếp, ví dụ “Hà Nội, ngày 05 tháng 02 năm 2026”, rồi Ctrl + I. Sửa cả văn bản một lần: Ctrl + H, tick Use wildcards, tìm “ngày ([1-9]) tháng” thay “ngày 0\\1 tháng”.",
                vi_du: [vd(ngay)],
                video: _sai3.some(function (x) {
                  return /số 0|“ngày|“tháng/.test(x);
                }) ? "49" : "67"
              } : {
                muc: "dat",
                ma: "ngay-thang",
                tieu_de: "Dòng địa danh, ngày tháng đúng",
                can_cu: "M\u1EE5c II.4 Ph\u1EA7n I ".concat(PL, ".")
              });
            }
            ngayKhac = coNoiDung.filter(function (d) {
              return d !== ngay && /ngày\s+[1-9]\s+tháng|tháng\s+[12]\s+năm/.test(d.gon);
            });
            if (ngayKhac.length) them({
              muc: "goi-y",
              ma: "ngay-khac",
              tieu_de: "Ngày tháng trong nội dung viết thiếu số 0",
              chi_tiet: "".concat(ngayKhac.length, " \u0111o\u1EA1n c\xF3 \u201Cng\xE0y 1\u20139\u201D ho\u1EB7c \u201Cth\xE1ng 1, 2\u201D ch\u01B0a c\xF3 s\u1ED1 0. Quy \u0111\u1ECBnh s\u1ED1 0 \xE1p cho d\xF2ng th\u1EDDi gian ban h\xE0nh; vi\u1EBFt th\u1ED1ng nh\u1EA5t trong c\u1EA3 v\u0103n b\u1EA3n th\xEC g\u1ECDn h\u01A1n."),
              can_cu: "M\u1EE5c II.4 \u0111i\u1EC3m b Ph\u1EA7n I ".concat(PL, "."),
              cach_sua: "Ctrl + H › More › Use wildcards: tìm “ngày ([1-9]) tháng” thay “ngày 0\\1 tháng”; tìm “tháng ([12]) năm” thay “tháng 0\\1 năm”.",
              vi_du: ngayKhac.slice(0, 4).map(vd),
              video: "49"
            });
            kg = coNoiDung.find(function (d) {
              return /^Kính\s+gửi/i.test(d.gon);
            });
            tenLoai = dau.find(function (d) {
              return /^(BÁO CÁO|TỜ TRÌNH)$/.test(d.gon);
            });
            if (!kg && tenLoai) them({
              muc: "canh-bao",
              ma: "kinh-gui",
              tieu_de: "".concat(tenLoai.gon === "BÁO CÁO" ? "Báo cáo" : "Tờ trình", " ch\u01B0a c\xF3 d\xF2ng K\xEDnh g\u1EEDi"),
              chi_tiet: "Nếu văn bản gửi cơ quan, tổ chức cấp trên thì phải có dòng “Kính gửi:” và tên nơi nhận, đặt dưới tên loại và trích yếu. Văn bản nội bộ không gửi cấp trên thì bỏ qua mục này.",
              can_cu: "M\u1EE5c II.9 \u0111i\u1EC3m b Ph\u1EA7n I ".concat(PL, ": t\u1EDD tr\xECnh, b\xE1o c\xE1o c\u1EE7a c\u1EA5p d\u01B0\u1EDBi g\u1EEDi c\u1EA5p tr\xEAn v\xE0 c\xF4ng v\u0103n, n\u01A1i nh\u1EADn g\u1ED3m ph\u1EA7n \u201CK\xEDnh g\u1EEDi\u201D. Th\xF4ng t\u01B0 01/2011/TT-BNV (h\u1EBFt hi\u1EC7u l\u1EF1c 15/6/2020) ch\u1EC9 quy \u0111\u1ECBnh d\xF2ng n\xE0y cho c\xF4ng v\u0103n."),
              cach_sua: "Thêm dòng “Kính gửi: <tên cơ quan cấp trên>” canh giữa, cỡ 13–14, dưới trích yếu.",
              vi_du: [vd(tenLoai)],
              video: "58"
            });
            if (kg && !/^Kính\s+gửi\s*:/i.test(kg.gon)) them({
              muc: "loi",
              ma: "kinh-gui",
              tieu_de: "Sau “Kính gửi” thiếu dấu hai chấm",
              can_cu: "M\u1EE5c II.9 \u0111i\u1EC3m d Ph\u1EA7n I ".concat(PL, ": sau t\u1EEB \u201CK\xEDnh g\u1EEDi\u201D c\xF3 d\u1EA5u hai ch\u1EA5m (:)."),
              cach_sua: "Thêm dấu hai chấm: “Kính gửi: …”.",
              vi_du: [vd(kg)],
              video: "58"
            });
            nn = coNoiDung.find(function (d) {
              return /^Nơi\s+nhận/i.test(d.gon);
            });
            if (!nn) {
              _context5.n = 48;
              break;
            }
            _sai4 = [];
            if (!/^Nơi\s+nhận\s*:/i.test(nn.gon)) _sai4.push("thiếu dấu hai chấm sau “Nơi nhận”");
            _co4 = daSo(nn, function (p) {
              return p.sz;
            });
            if (_co4 !== 12) _sai4.push("ch\u1EEF \u201CN\u01A1i nh\u1EADn\u201D c\u1EE1 ".concat(_co4, ", \u0111\xFAng l\xE0 12"));
            if (!daSo(nn, function (p) {
              return !!p.b;
            }) || !daSo(nn, function (p) {
              return !!p.i;
            })) _sai4.push("chữ “Nơi nhận” phải đậm, nghiêng");
            i0 = coNoiDung.indexOf(nn), dong = [];
            k = i0 + 1;
          case 44:
            if (!(k < coNoiDung.length && dong.length < 25)) {
              _context5.n = 47;
              break;
            }
            d = coNoiDung[k];
            if (!(d.tc !== nn.tc || !/^[-–]/.test(d.gon))) {
              _context5.n = 45;
              break;
            }
            return _context5.a(3, 47);
          case 45:
            dong.push(d);
          case 46:
            k++;
            _context5.n = 44;
            break;
          case 47:
            if (dong.length) {
              coDong = dong.map(function (d) {
                return daSo(d, function (p) {
                  return p.sz;
                });
              }).filter(function (c) {
                return c !== 11;
              });
              if (coDong.length) _sai4.push("d\xF2ng li\u1EC7t k\xEA c\u1EE1 ".concat(coDong[0], ", \u0111\xFAng l\xE0 11"));
              cuoi = dong[dong.length - 1];
              truocCuoi = dong.slice(0, -1).filter(function (d) {
                return !/;$/.test(d.gon);
              });
              if (truocCuoi.length) _sai4.push("".concat(truocCuoi.length, " d\xF2ng ch\u01B0a k\u1EBFt th\xFAc b\u1EB1ng d\u1EA5u ch\u1EA5m ph\u1EA9y"));
              if (/^[-–]\s*Lưu/i.test(cuoi.gon) && !/\.$/.test(cuoi.gon)) _sai4.push("dòng “Lưu: …” cuối cùng phải kết thúc bằng dấu chấm");
            }
            them(_sai4.length ? {
              muc: "canh-bao",
              ma: "noi-nhan",
              tieu_de: "Phần Nơi nhận chưa đúng cách trình bày",
              chi_tiet: _sai4.join("; ") + ".",
              can_cu: "M\u1EE5c II.9 \u0111i\u1EC3m d Ph\u1EA7n I ".concat(PL, ": \u201CN\u01A1i nh\u1EADn\u201D c\u1EE1 12, nghi\xEAng, \u0111\u1EADm, c\xF3 d\u1EA5u hai ch\u1EA5m; c\xE1c d\xF2ng c\u1EE1 11, \u0111\u1EA7u d\xF2ng g\u1EA1ch n\u1ED1i, cu\u1ED1i d\xF2ng ch\u1EA5m ph\u1EA9y, d\xF2ng \u201CL\u01B0u\u201D cu\u1ED1i c\xF9ng."),
              cach_sua: "Bôi chữ “Nơi nhận:” cỡ 12, Ctrl + B, Ctrl + I; bôi các dòng bên dưới cỡ 11.",
              vi_du: [vd(nn)]
            } : {
              muc: "dat",
              ma: "noi-nhan",
              tieu_de: "Phần Nơi nhận đúng cách trình bày",
              can_cu: "M\u1EE5c II.9 \u0111i\u1EC3m d Ph\u1EA7n I ".concat(PL, ".")
            });
          case 48:
            nhomCC = [];
            _k2 = 0;
          case 49:
            if (!(_k2 < coNoiDung.length)) {
              _context5.n = 52;
              break;
            }
            if (!(!/^Căn\s+cứ\s/.test(coNoiDung[_k2].gon) || coNoiDung[_k2].tc)) {
              _context5.n = 50;
              break;
            }
            return _context5.a(3, 51);
          case 50:
            g = [coNoiDung[_k2]];
            while (_k2 + 1 < coNoiDung.length && /^Căn\s+cứ\s/.test(coNoiDung[_k2 + 1].gon)) g.push(coNoiDung[++_k2]);
            if (g.length >= 2) nhomCC.push({
              g: g,
              sau: coNoiDung[_k2 + 1]
            });
          case 51:
            _k2++;
            _context5.n = 49;
            break;
          case 52:
            for (_i = 0, _nhomCC = nhomCC; _i < _nhomCC.length; _i++) {
              _nhomCC$_i = _nhomCC[_i], _g = _nhomCC$_i.g, sau = _nhomCC$_i.sau;
              _sai5 = [];
              if (_g.some(function (d) {
                return !daSo(d, function (p) {
                  return !!p.i;
                });
              })) _sai5.push("dòng căn cứ chưa in nghiêng");
              giua = _g.slice(0, -1).filter(function (d) {
                return !/;$/.test(d.gon);
              });
              if (giua.length) _sai5.push("".concat(giua.length, " d\xF2ng gi\u1EEFa ch\u01B0a k\u1EBFt th\xFAc b\u1EB1ng d\u1EA5u ch\u1EA5m ph\u1EA9y"));
              docLap = sau && (/^Theo\s+đề\s+nghị/i.test(sau.gon) || sau.gon === sau.gon.toUpperCase() && /[A-ZĐ]/.test(sau.gon));
              _cuoi = _g[_g.length - 1].gon;
              if (docLap && /^Theo\s+đề\s+nghị/i.test(sau.gon)) {
                if (!/[;.]$/.test(_cuoi)) _sai5.push("d\xF2ng c\u0103n c\u1EE9 cu\u1ED1i k\u1EBFt th\xFAc b\u1EB1ng \u201C".concat(_cuoi.slice(-1), "\u201D, n\xEAn l\xE0 d\u1EA5u ch\u1EA5m ph\u1EA9y"));
                if (!/\.$/.test(sau.gon)) _sai5.push("d\xF2ng \u201CTheo \u0111\u1EC1 ngh\u1ECB\u2026\u201D k\u1EBFt th\xFAc b\u1EB1ng \u201C".concat(sau.gon.slice(-1), "\u201D, n\xEAn l\xE0 d\u1EA5u ch\u1EA5m"));
              } else if (docLap && !/\.$/.test(_cuoi)) _sai5.push("d\xF2ng c\u0103n c\u1EE9 cu\u1ED1i k\u1EBFt th\xFAc b\u1EB1ng \u201C".concat(_cuoi.slice(-1), "\u201D, n\xEAn l\xE0 d\u1EA5u ch\u1EA5m"));
              if (_sai5.length) them({
                muc: "canh-bao",
                ma: "can-cu",
                tieu_de: "Khối căn cứ ban hành chưa đúng cách trình bày",
                chi_tiet: _sai5.join("; ") + ".",
                can_cu: "M\u1EE5c II.6 \u0111i\u1EC3m a Ph\u1EA7n I ".concat(PL, ": c\u0103n c\u1EE9 ban h\xE0nh ch\u1EEF in th\u01B0\u1EDDng, nghi\xEAng, c\u1EE1 13\u201314; m\u1ED7i c\u0103n c\u1EE9 m\u1ED9t d\xF2ng, cu\u1ED1i d\xF2ng ch\u1EA5m ph\u1EA9y, d\xF2ng cu\u1ED1i d\u1EA5u ch\u1EA5m."),
                cach_sua: "Bôi các dòng căn cứ, Ctrl + I; dòng cuối đổi dấu phẩy, chấm phẩy thành dấu chấm.",
                vi_du: [vd(_g[0])],
                video: "57"
              });
            }
            HHL = [[/01\/2011\/TT-BNV/, "Thông tư số 01/2011/TT-BNV (thể thức văn bản)", "Nghị định số 30/2020/NĐ-CP"], [/110\/2004\/NĐ-CP/, "Nghị định số 110/2004/NĐ-CP (công tác văn thư)", "Nghị định số 30/2020/NĐ-CP"], [/09\/2010\/NĐ-CP/, "Nghị định số 09/2010/NĐ-CP (sửa đổi Nghị định 110/2004)", "Nghị định số 30/2020/NĐ-CP"], [/58\/2014\/QH13/, "Luật Bảo hiểm xã hội số 58/2014/QH13", "Luật Bảo hiểm xã hội số 41/2024/QH15 (hiệu lực từ 01/7/2025)"]];
            _loop = _regenerator().m(function _loop() {
              var _HHL$_i, re, ten, moi, thay;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    _HHL$_i = _slicedToArray(_HHL[_i2], 3), re = _HHL$_i[0], ten = _HHL$_i[1], moi = _HHL$_i[2];
                    thay = coNoiDung.filter(function (d) {
                      return re.test(d.gon);
                    });
                    if (thay.length) them({
                      muc: "canh-bao",
                      ma: "het-hieu-luc",
                      tieu_de: "Tr\xEDch d\u1EABn ".concat(ten),
                      chi_tiet: "V\u0103n b\u1EA3n n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c thay b\u1EB1ng ".concat(moi, ". N\u1EBFu \u0111ang d\xF9ng l\xE0m c\u0103n c\u1EE9 hi\u1EC7n h\xE0nh th\xEC ph\u1EA3i \u0111\u1ED5i; n\u1EBFu ch\u1EC9 nh\u1EAFc l\u1EA1i l\u1ECBch s\u1EED th\xEC gi\u1EEF."),
                      can_cu: "Đối chiếu hiệu lực văn bản trước khi trích dẫn.",
                      cach_sua: "Thay b\u1EB1ng ".concat(moi, ", ghi \u0111\u1EE7 s\u1ED1, ng\xE0y ban h\xE0nh, c\u01A1 quan ban h\xE0nh."),
                      vi_du: thay.slice(0, 3).map(vd)
                    });
                  case 1:
                    return _context4.a(2);
                }
              }, _loop);
            });
            _i2 = 0, _HHL = HHL;
          case 53:
            if (!(_i2 < _HHL.length)) {
              _context5.n = 55;
              break;
            }
            return _context5.d(_regeneratorValues(_loop()), 54);
          case 54:
            _i2++;
            _context5.n = 53;
            break;
          case 55:
            lamSach = function lamSach(s) {
              return s.replace(/https?:\S+/g, " ").replace(/(?:[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C89\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2F\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C0\uA7C2\uA7C4-\uA7C7\uA7C9\uA7CB\uA7CC\uA7CE\uA7D0\uA7D2\uA7D4\uA7D6\uA7D8\uA7DA\uA7DC\uA7DD\uA7E2\uA7F5\uAB6C\uAB6D\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2\uDD50-\uDD65]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F\uDEA0-\uDEB8]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD837[\uDF40\uDF48\uDF4A\uDF4D\uDF51\uDF68\uDF6A\uDF6C\uDF6E\uDF72\uDF74\uDF76\uDF78\uDF7A\uDF7C\uDF7E]|\uD83A[\uDD00-\uDD21])+(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+(?:[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C89\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2F\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C0\uA7C2\uA7C4-\uA7C7\uA7C9\uA7CB\uA7CC\uA7CE\uA7D0\uA7D2\uA7D4\uA7D6\uA7D8\uA7DA\uA7DC\uA7DD\uA7E2\uA7F5\uAB6C\uAB6D\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2\uDD50-\uDD65]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F\uDEA0-\uDEB8]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD837[\uDF40\uDF48\uDF4A\uDF4D\uDF51\uDF68\uDF6A\uDF6C\uDF6E\uDF72\uDF74\uDF76\uDF78\uDF7A\uDF7C\uDF7E]|\uD83A[\uDD00-\uDD21])+)+(?!(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0558\u0559\u0560-\u0588\u058B\u058C\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u208F-\u209F\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DD\uA7E2\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB6C\uAB6D\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBF]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDED9-\uDEEE\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF0A\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDB0-\uDDDB\uDDF1\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C\uD8B4-\uD8BE][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2\uDFF3]|\uD823[\uDC00-\uDCDA\uDCFF-\uDD20\uDD80-\uDDF2\uDE00-\uDFFF]|\uD824[\uDC00-\uDD91\uDDA0-\uDDD2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD28\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD68\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA6\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF81\uDF90-\uDF96\uDFCD-\uDFFF]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1E\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79]|\uD8BF[\uDC00-\uDC3F]))/g, function (m, vt, toan) {
                return vt > 0 && /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0558\u0559\u0560-\u0588\u058B\u058C\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u208F-\u209F\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DD\uA7E2\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB6C\uAB6D\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBF]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDED9-\uDEEE\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF0A\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDB0-\uDDDB\uDDF1\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C\uD8B4-\uD8BE][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2\uDFF3]|\uD823[\uDC00-\uDCDA\uDCFF-\uDD20\uDD80-\uDDF2\uDE00-\uDFFF]|\uD824[\uDC00-\uDD91\uDDA0-\uDDD2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD28\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD68\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA6\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF81\uDF90-\uDF96\uDFCD-\uDFFF]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1E\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79]|\uD8BF[\uDC00-\uDC3F])/.test(toan.charAt(vt - 1)) ? m : " ";
              });
            };
            toanVan = coNoiDung.filter(function (d) {
              return !d.tc && d.gon !== d.gon.toUpperCase();
            }).map(function (d) {
              return lamSach(d.gon);
            }).join("\n");
            LA_MA = /^(I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII|XIII|XIV|XV|XX)$/;
            chuaGiai = [];
            daXet = new Set();
            _iterator15 = _createForOfIteratorHelper(toanVan.matchAll(/([A-Z\u0110]{2,}[0-9A-Z\u0110]*)(?!(?:[&\x2D\/-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0558\u0559\u0560-\u0588\u058B\u058C\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u208F-\u209F\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DD\uA7E2\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB6C\uAB6D\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBF]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDED9-\uDEEE\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF0A\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDB0-\uDDDB\uDDF1\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C\uD8B4-\uD8BE][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2\uDFF3]|\uD823[\uDC00-\uDCDA\uDCFF-\uDD20\uDD80-\uDDF2\uDE00-\uDFFF]|\uD824[\uDC00-\uDD91\uDDA0-\uDDD2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD28\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD68\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA6\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF81\uDF90-\uDF96\uDFCD-\uDFFF]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1E\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79]|\uD8BF[\uDC00-\uDC3F]))/g));
            _context5.p = 56;
            _iterator15.s();
          case 57:
            if ((_step15 = _iterator15.n()).done) {
              _context5.n = 61;
              break;
            }
            _m2 = _step15.value;
            if (!(_m2.index > 0 && /(?:[&\x2D\/-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0558\u0559\u0560-\u0588\u058B\u058C\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u208F-\u209F\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DD\uA7E2\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB6C\uAB6D\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBF]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDED9-\uDEEE\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF0A\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDB0-\uDDDB\uDDF1\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C\uD8B4-\uD8BE][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2\uDFF3]|\uD823[\uDC00-\uDCDA\uDCFF-\uDD20\uDD80-\uDDF2\uDE00-\uDFFF]|\uD824[\uDC00-\uDD91\uDDA0-\uDDD2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD28\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD68\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA6\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF81\uDF90-\uDF96\uDFCD-\uDFFF]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1E\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79]|\uD8BF[\uDC00-\uDC3F])/.test(toanVan.charAt(_m2.index - 1)))) {
              _context5.n = 58;
              break;
            }
            return _context5.a(3, 60);
          case 58:
            tu = _m2[1];
            if (!(daXet.has(tu) || LA_MA.test(tu))) {
              _context5.n = 59;
              break;
            }
            return _context5.a(3, 60);
          case 59:
            daXet.add(tu);
            giai = toanVan.indexOf("(" + tu + ")");
            if (giai < 0 || giai > _m2.index + tu.length + 2) chuaGiai.push(tu);
          case 60:
            _context5.n = 57;
            break;
          case 61:
            _context5.n = 63;
            break;
          case 62:
            _context5.p = 62;
            _t12 = _context5.v;
            _iterator15.e(_t12);
          case 63:
            _context5.p = 63;
            _iterator15.f();
            return _context5.f(63);
          case 64:
            if (chuaGiai.length) them({
              muc: "goi-y",
              ma: "viet-tat",
              tieu_de: "Chữ viết tắt chưa được giải thích ở lần dùng đầu",
              chi_tiet: chuaGiai.slice(0, 12).join(", ") + (chuaGiai.length > 12 ? " v\xE0 ".concat(chuaGiai.length - 12, " ch\u1EEF kh\xE1c") : "") + ".",
              can_cu: "Khuyến nghị soạn thảo, không phải quy định của Nghị định 30: người đọc ngoài ngành dễ hiểu hơn khi lần đầu ghi đủ tên rồi đặt chữ tắt trong ngoặc, ví dụ “bảo hiểm xã hội (BHXH)”.",
              cach_sua: "Ở lần xuất hiện đầu tiên ghi đủ tên, chữ tắt trong ngoặc đơn; từ đó về sau mới dùng chữ tắt."
            });
            goLoi = [];
            _iterator16 = _createForOfIteratorHelper(coNoiDung);
            _context5.p = 65;
            _iterator16.s();
          case 66:
            if ((_step16 = _iterator16.n()).done) {
              _context5.n = 69;
              break;
            }
            _d2 = _step16.value;
            _t4 = _d2.text;
            if (!(/^Số\s*:/.test(_d2.gon) || /\.{3,}/.test(_t4))) {
              _context5.n = 67;
              break;
            }
            return _context5.a(3, 68);
          case 67:
            if (/\S {2,}\S/.test(_t4)) goLoi.push([_d2, "thừa khoảng trắng"]);else if (/\s[,.;:!?](?!\d)/.test(_t4) && !/\s\.\.\./.test(_t4)) goLoi.push([_d2, "khoảng trắng trước dấu câu"]);else if (/[,;](?=(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0558\u0559\u0560-\u0588\u058B\u058C\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u208F-\u209F\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DD\uA7E2\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB6C\uAB6D\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBF]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDED9-\uDEEE\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF0A\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDB0-\uDDDB\uDDF1\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C\uD8B4-\uD8BE][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2\uDFF3]|\uD823[\uDC00-\uDCDA\uDCFF-\uDD20\uDD80-\uDDF2\uDE00-\uDFFF]|\uD824[\uDC00-\uDD91\uDDA0-\uDDD2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD28\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD68\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA6\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF81\uDF90-\uDF96\uDFCD-\uDFFF]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1E\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79]|\uD8BF[\uDC00-\uDC3F]))/.test(_t4)) goLoi.push([_d2, "thiếu khoảng trắng sau dấu phẩy, chấm phẩy"]);
          case 68:
            _context5.n = 66;
            break;
          case 69:
            _context5.n = 71;
            break;
          case 70:
            _context5.p = 70;
            _t13 = _context5.v;
            _iterator16.e(_t13);
          case 71:
            _context5.p = 71;
            _iterator16.f();
            return _context5.f(71);
          case 72:
            if (goLoi.length) them({
              muc: "goi-y",
              ma: "go-loi",
              tieu_de: "Lỗi gõ khoảng trắng, dấu câu",
              chi_tiet: "".concat(goLoi.length, " \u0111o\u1EA1n."),
              can_cu: "Lỗi chính tả, gõ phím.",
              cach_sua: "Thừa khoảng trắng: Ctrl + H, tìm hai dấu cách, thay một dấu cách, Replace All vài lần.",
              vi_du: goLoi.slice(0, 5).map(function (_ref6) {
                var _ref7 = _slicedToArray(_ref6, 2),
                  d = _ref7[0],
                  l = _ref7[1];
                return Object.assign(vd(d), {
                  ghi: l
                });
              })
            });
            trong = coNoiDung.filter(function (d) {
              return /\[[^\]]{0,40}\]|\.{4,}|…{2,}|\bxx\b|\bXXX?\b/.test(d.gon) && !/^Số\s*:/.test(d.gon) && !/ngày\s*\.{0,}\s*tháng/.test(d.gon);
            });
            if (trong.length) them({
              muc: "goi-y",
              ma: "cho-trong",
              tieu_de: "Còn chỗ trống, chỗ mẫu chưa điền",
              chi_tiet: "".concat(trong.length, " \u0111o\u1EA1n c\xF3 d\u1EA5u ngo\u1EB7c vu\xF4ng, d\xE3y d\u1EA5u ch\u1EA5m ho\u1EB7c \u201Cxx\u201D."),
              can_cu: "Soát trước khi trình ký.",
              cach_sua: "Điền nội dung hoặc xoá phần mẫu.",
              vi_du: trong.slice(0, 5).map(vd)
            });
            dem = function dem(m) {
              return kq.filter(function (x) {
                return x.muc === m;
              }).length;
            };
            return _context5.a(2, {
              tong_quan: {
                ten: tenFile,
                so_doan: coNoiDung.length,
                so_trang: soTrang || null,
                loi: dem("loi"),
                canh_bao: dem("canh-bao"),
                goi_y: dem("goi-y"),
                dat: dem("dat"),
                la_van_ban_hanh_chinh: !!(qh || tn || so_ || nn)
              },
              ket_qua: kq
            });
        }
      }, _callee4, null, [[65, 70, 71, 72], [56, 62, 63, 64], [28, 37, 38, 39], [26, 41, 42, 43], [13, 18, 19, 20], [11, 22, 23, 24], [0, 2]]);
    }));
    return _soat.apply(this, arguments);
  }
  window.SoatVanBan = {
    soat: soat
  };
})();