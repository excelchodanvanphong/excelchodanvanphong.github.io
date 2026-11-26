function _regenerator() { var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? (c > 1 && (G.n = c < 3 ? -1 : u), d(c, u)) : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (goc) {
  "use strict";

  var W = "http://schemas.openxmlformats.org/wordprocessingml/2006/main";
  var TNR = "Times New Roman";
  var KY_HIEU = /symbol|wingdings|webdings|marlett/i;
  var PPR = ["pStyle", "keepNext", "keepLines", "pageBreakBefore", "framePr", "widowControl", "numPr", "suppressLineNumbers", "pBdr", "shd", "tabs", "suppressAutoHyphens", "kinsoku", "wordWrap", "overflowPunct", "topLinePunct", "autoSpaceDE", "autoSpaceDN", "bidi", "adjustRightInd", "snapToGrid", "spacing", "ind", "contextualSpacing", "mirrorIndents", "suppressOverlap", "jc", "textDirection", "textAlignment", "textboxTightWrap", "outlineLvl", "divId", "cnfStyle", "rPr", "sectPr", "pPrChange"];
  var RPR = ["rStyle", "rFonts", "b", "bCs", "i", "iCs", "caps", "smallCaps", "strike", "dstrike", "outline", "shadow", "emboss", "imprint", "noProof", "snapToGrid", "vanish", "webHidden", "color", "spacing", "w", "kern", "position", "sz", "szCs", "highlight", "u", "effect", "bdr", "shd", "fitText", "vertAlign", "rtl", "cs", "em", "lang", "eastAsianLayout", "specVanish", "oMath", "rPrChange"];
  var SECT = ["headerReference", "footerReference", "footnotePr", "endnotePr", "type", "pgSz", "pgMar", "paperSrc", "pgBorders", "lnNumType", "pgNumType", "cols", "formProt", "vAlign", "noEndnote", "titlePg", "textDirection", "bidi", "rtlGutter", "docGrid", "printerSettings", "sectPrChange"];
  var CM1 = 567,
    CM127 = 720,
    PT6 = 120;
  var LE = {
    top: 1134,
    bottom: 1134,
    left: 1701,
    right: 1134
  };
  var conCac = function conCac(el) {
    return el ? Array.from(el.childNodes).filter(function (n) {
      return n.nodeType === 1;
    }) : [];
  };
  var con = function con(el, ten) {
    return conCac(el).find(function (c) {
      return c.localName === ten && c.namespaceURI === W;
    }) || null;
  };
  var tat = function tat(el, ten) {
    return el ? Array.from(el.getElementsByTagNameNS(W, ten)) : [];
  };
  var lay = function lay(el, ten) {
    if (!el) return null;
    var v = el.getAttributeNS(W, ten);
    return v === "" ? el.hasAttributeNS(W, ten) ? "" : null : v;
  };
  var so = function so(el, ten) {
    var v = lay(el, ten);
    return v == null || v === "" || isNaN(+v) ? undefined : +v;
  };
  var dat = function dat(el, ten, v) {
    return el.setAttributeNS(W, "w:" + ten, String(v));
  };
  var bo = function bo(el) {
    for (var _len = arguments.length, ds = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      ds[_key - 1] = arguments[_key];
    }
    return ds.forEach(function (t) {
      if (el.hasAttributeNS(W, t)) el.removeAttributeNS(W, t);
    });
  };
  var gan = function gan(v, dich) {
    return v != null && Math.abs(v - dich) <= 20;
  };
  function coTo(el) {
    for (var _len2 = arguments.length, ten = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      ten[_key2 - 1] = arguments[_key2];
    }
    for (var p = el.parentNode; p && p.nodeType === 1; p = p.parentNode) if (ten.includes(p.localName)) return true;
    return false;
  }
  function datCon(cha, ten, thuTu) {
    var co = con(cha, ten);
    if (co) return co;
    var moi = cha.ownerDocument.createElementNS(W, "w:" + ten);
    var vt = thuTu.indexOf(ten);
    var sau = conCac(cha).find(function (c) {
      return c.namespaceURI === W && thuTu.indexOf(c.localName) > vt;
    });
    cha.insertBefore(moi, sau || null);
    return moi;
  }
  function datDau(cha, ten) {
    var co = con(cha, ten);
    if (co) return co;
    var moi = cha.ownerDocument.createElementNS(W, "w:" + ten);
    cha.insertBefore(moi, conCac(cha)[0] || null);
    return moi;
  }
  var chu = function chu(p) {
    return tat(p, "t").filter(function (t) {
      return !coTo(t, "txbxContent");
    }).map(function (t) {
      return t.textContent;
    }).join("");
  };
  function docKieu(st) {
    var k = {
      theoId: {},
      macDinhP: null,
      pMd: null,
      rMd: null
    };
    if (!st) return k;
    var _iterator = _createForOfIteratorHelper(tat(st, "style")),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var s = _step.value;
        var id = lay(s, "styleId");
        k.theoId[id] = {
          cha: lay(con(s, "basedOn"), "val"),
          pPr: con(s, "pPr"),
          rPr: con(s, "rPr")
        };
        if (lay(s, "type") === "paragraph" && (lay(s, "default") === "1" || lay(s, "default") === "true")) k.macDinhP = id;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var dd = tat(st, "docDefaults")[0];
    k.pMd = con(con(dd, "pPrDefault"), "pPr");
    k.rMd = con(con(dd, "rPrDefault"), "rPr");
    return k;
  }
  function theoChuoi(k, id, phan, fn) {
    for (var i = 0, x = id; x && i < 20; i++) {
      var s = k.theoId[x];
      if (!s) break;
      var v = fn(s[phan]);
      if (v !== undefined) return v;
      x = s.cha;
    }
    return undefined;
  }
  var kieuP = function kieuP(k, p) {
    return lay(con(con(p, "pPr"), "pStyle"), "val") || k.macDinhP;
  };
  function hlP(k, p, fn) {
    var pPr = con(p, "pPr");
    var v = pPr ? fn(pPr) : undefined;
    if (v === undefined) v = theoChuoi(k, kieuP(k, p), "pPr", function (x) {
      return x ? fn(x) : undefined;
    });
    if (v === undefined && k.pMd) v = fn(k.pMd);
    return v;
  }
  function hlR(k, r, p, fn) {
    var rPr = con(r, "rPr");
    var v = rPr ? fn(rPr) : undefined;
    if (v === undefined) v = theoChuoi(k, lay(con(rPr, "rStyle"), "val"), "rPr", function (x) {
      return x ? fn(x) : undefined;
    });
    if (v === undefined) v = theoChuoi(k, kieuP(k, p), "rPr", function (x) {
      return x ? fn(x) : undefined;
    });
    if (v === undefined && k.rMd) v = fn(k.rMd);
    return v;
  }
  var coChu = function coChu(k, r, p) {
    return hlR(k, r, p, function (x) {
      return so(con(x, "sz"), "val");
    }) || 20;
  };
  function doiPhong(rf) {
    var ten = ["ascii", "hAnsi", "cs", "eastAsia"].map(function (t) {
      return lay(rf, t);
    }).filter(Boolean);
    var chuDe = ["asciiTheme", "hAnsiTheme", "cstheme", "eastAsiaTheme"].some(function (t) {
      return rf.hasAttributeNS(W, t);
    });
    if (!ten.length && !chuDe) return false;
    if (ten.some(function (t) {
      return KY_HIEU.test(t);
    })) return false;
    if (!chuDe && ten.length === 4 && ten.every(function (t) {
      return t === TNR;
    })) return false;
    for (var _i = 0, _arr = ["ascii", "hAnsi", "cs", "eastAsia"]; _i < _arr.length; _i++) {
      var t = _arr[_i];
      dat(rf, t, TNR);
    }
    bo(rf, "asciiTheme", "hAnsiTheme", "cstheme", "eastAsiaTheme");
    return true;
  }
  function doiMau(c) {
    var v = (lay(c, "val") || "").toLowerCase();
    if ((v === "auto" || v === "000000") && !c.hasAttributeNS(W, "themeColor")) return false;
    dat(c, "val", "000000");
    bo(c, "themeColor", "themeShade", "themeTint");
    return true;
  }
  function suaDoan(k, p, tc, tk) {
    if (!chu(p).trim()) return;
    var jc = hlP(k, p, function (x) {
      var _lay;
      return (_lay = lay(con(x, "jc"), "val")) !== null && _lay !== void 0 ? _lay : undefined;
    });
    if (["center", "right", "end"].includes(jc)) return;
    var pPr = datDau(p, "pPr");
    if (tc.canh) {
      if (jc !== "both") {
        dat(datCon(pPr, "jc", PPR), "val", "both");
        tk.canh++;
      }
      var dsSo = hlP(k, p, function (x) {
        return con(x, "numPr") ? true : undefined;
      });
      var fl = hlP(k, p, function (x) {
        var i = con(x, "ind");
        if (!i) return undefined;
        var h = so(i, "hanging");
        if (h !== undefined) return -h;
        return so(i, "firstLine");
      }) || 0;
      if (!dsSo && fl >= 0 && !gan(fl, CM1) && !gan(fl, CM127)) {
        var i = datCon(pPr, "ind", PPR);
        dat(i, "firstLine", CM1);
        bo(i, "firstLineChars", "hanging", "hangingChars");
        tk.lui++;
      }
    }
    if (tc.dong) {
      var sp = function sp(t) {
        return hlP(k, p, function (x) {
          return so(con(x, "spacing"), t);
        });
      };
      var tu = function tu(t) {
        return hlP(k, p, function (x) {
          var s = con(x, "spacing");
          return s && s.hasAttributeNS(W, t) ? lay(s, t) : undefined;
        });
      };
      var truoc = sp("before") || 0,
        sau = sp("after") || 0;
      var tuDong = tu("beforeAutospacing") === "1" || tu("afterAutospacing") === "1";
      if (truoc < PT6 && sau < PT6 && !tuDong) {
        var s = datCon(pPr, "spacing", PPR);
        dat(s, "before", PT6);
        dat(s, "after", PT6);
        bo(s, "beforeLines", "afterLines");
        tk.cach_doan++;
      }
      var dong = sp("line"),
        kieu = tu("lineRule") || "auto";
      if (dong !== undefined) {
        var r0 = tat(p, "r")[0];
        var co = r0 ? coChu(k, r0, p) / 2 : 14;
        var sai = kieu === "auto" ? dong / 240 < 0.99 || dong / 240 > 1.51 : dong / 20 < co || dong / 20 > co * 1.75;
        if (sai) {
          var _s = datCon(pPr, "spacing", PPR);
          dat(_s, "line", 240);
          dat(_s, "lineRule", "auto");
          tk.gian_dong++;
        }
      }
    }
    if (tc.co) {
      var doi = false;
      var _iterator2 = _createForOfIteratorHelper(tat(p, "r")),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var r = _step2.value;
          if (coTo(r, "txbxContent") || !tat(r, "t").length) continue;
          var sz = coChu(k, r, p);
          if (sz === 26 || sz === 28) continue;
          var rPr = datDau(r, "rPr");
          dat(datCon(rPr, "sz", RPR), "val", 28);
          dat(datCon(rPr, "szCs", RPR), "val", 28);
          doi = true;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (doi) tk.co++;
    }
  }
  function suaTrang(sect, tk) {
    var doi = false;
    var sz = datCon(sect, "pgSz", SECT);
    var ngang = lay(sz, "orient") === "landscape";
    var _ref = ngang ? [16838, 11906] : [11906, 16838],
      _ref2 = _slicedToArray(_ref, 2),
      rong = _ref2[0],
      cao = _ref2[1];
    if (!gan(so(sz, "w"), rong) || !gan(so(sz, "h"), cao)) {
      dat(sz, "w", rong);
      dat(sz, "h", cao);
      doi = true;
    }
    var moiTao = !con(sect, "pgMar");
    var m = datCon(sect, "pgMar", SECT);
    for (var _i2 = 0, _Object$entries = Object.entries(LE); _i2 < _Object$entries.length; _i2++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        t = _Object$entries$_i[0],
        v = _Object$entries$_i[1];
      if (!gan(so(m, t), v)) {
        dat(m, t, v);
        doi = true;
      }
    }
    if (moiTao) {
      dat(m, "header", 567);
      dat(m, "footer", 567);
      dat(m, "gutter", 0);
    }
    if (doi) tk.trang++;
  }
  var KHAI_BAO = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n';
  function viet(doc) {
    var s = new XMLSerializer().serializeToString(doc);
    s = s.replace(/ xmlns:xml="http:\/\/www\.w3\.org\/XML\/1998\/namespace"/g, "");
    if (!/^<\?xml/.test(s)) s = KHAI_BAO + s;
    return s;
  }
  function sua(_x, _x2) {
    return _sua.apply(this, arguments);
  }
  function _sua() {
    _sua = _asyncToGenerator(_regenerator().m(function _callee(buf, tuyChon) {
      var tc, z, P, tk, stXml, st, k, doi, _iterator3, _step3, _rf, rf, _i3, _arr2, t, cacPhan, _iterator4, _step4, ten, doc, _iterator5, _step5, _rf2, _iterator6, _step6, c, than, _iterator7, _step7, p, _iterator8, _step8, s, _t, _t2, _t3, _t4;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            tc = Object.assign({
              phong: true,
              mau: true,
              co: true,
              canh: true,
              dong: true,
              trang: true
            }, tuyChon || {});
            z = goc.ND30Zip.mo(buf);
            P = new DOMParser();
            tk = {
              phong: 0,
              mau: 0,
              co: 0,
              canh: 0,
              lui: 0,
              gian_dong: 0,
              cach_doan: 0,
              trang: 0
            };
            _context.n = 1;
            return z.docChu("word/styles.xml");
          case 1:
            stXml = _context.v;
            st = stXml ? P.parseFromString(stXml, "application/xml") : null;
            k = docKieu(st);
            if (st && tc.phong) {
              doi = 0;
              _iterator3 = _createForOfIteratorHelper(tat(st, "rFonts"));
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  _rf = _step3.value;
                  if (doiPhong(_rf)) doi++;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              if (k.rMd && !con(k.rMd, "rFonts")) {
                rf = datCon(k.rMd, "rFonts", RPR);
                for (_i3 = 0, _arr2 = ["ascii", "hAnsi", "cs", "eastAsia"]; _i3 < _arr2.length; _i3++) {
                  t = _arr2[_i3];
                  dat(rf, t, TNR);
                }
                doi++;
              }
              if (doi) {
                z.datChu("word/styles.xml", viet(st));
                tk.phong += doi;
              }
            }
            cacPhan = z.ds.filter(function (t) {
              return /^word\/(document|header\d*|footer\d*|footnotes|endnotes)\.xml$/.test(t);
            });
            _iterator4 = _createForOfIteratorHelper(cacPhan);
            _context.p = 2;
            _iterator4.s();
          case 3:
            if ((_step4 = _iterator4.n()).done) {
              _context.n = 6;
              break;
            }
            ten = _step4.value;
            _t = P;
            _context.n = 4;
            return z.docChu(ten);
          case 4:
            doc = _t.parseFromString.call(_t, _context.v, "application/xml");
            if (tc.phong) {
              _iterator5 = _createForOfIteratorHelper(tat(doc, "rFonts"));
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  _rf2 = _step5.value;
                  if (doiPhong(_rf2)) tk.phong++;
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
            if (tc.mau) {
              _iterator6 = _createForOfIteratorHelper(tat(doc, "color"));
              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  c = _step6.value;
                  if (c.parentNode.localName === "rPr" && doiMau(c)) tk.mau++;
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
            if (ten === "word/document.xml") {
              than = con(doc.documentElement, "body");
              _iterator7 = _createForOfIteratorHelper(tat(than, "p"));
              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  p = _step7.value;
                  if (!coTo(p, "tbl", "txbxContent")) suaDoan(k, p, tc, tk);
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
              if (tc.trang) {
                _iterator8 = _createForOfIteratorHelper(tat(doc, "sectPr"));
                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    s = _step8.value;
                    if (!coTo(s, "sectPrChange")) suaTrang(s, tk);
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }
              }
            }
            z.datChu(ten, viet(doc));
          case 5:
            _context.n = 3;
            break;
          case 6:
            _context.n = 8;
            break;
          case 7:
            _context.p = 7;
            _t2 = _context.v;
            _iterator4.e(_t2);
          case 8:
            _context.p = 8;
            _iterator4.f();
            return _context.f(8);
          case 9:
            _context.n = 10;
            return z.xuat();
          case 10:
            _t3 = _context.v;
            _t4 = tk;
            return _context.a(2, {
              buf: _t3,
              tk: _t4
            });
        }
      }, _callee, null, [[2, 7, 8, 9]]);
    }));
    return _sua.apply(this, arguments);
  }
  goc.ND30SuaNhanh = {
    sua: sua
  };
})(typeof window !== "undefined" ? window : globalThis);