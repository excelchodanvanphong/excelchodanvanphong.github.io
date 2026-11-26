function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? (c > 1 && (G.n = c < 3 ? -1 : u), d(c, u)) : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
(function () {
  "use strict";

  var CH = window.ND30_CAU_HINH;
  var $ = function $(id) {
    return document.getElementById(id);
  };
  var LS_PB = "nd30_phien_ban";
  var ESC = function ESC(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
      }[c];
    });
  };
  function layTep() {
    return new Promise(function (xong, loi) {
      Office.context.document.getFileAsync(Office.FileType.Compressed, {
        sliceSize: 4194304
      }, function (kq) {
        if (kq.status !== Office.AsyncResultStatus.Succeeded) return loi(new Error(kq.error.message));
        var tep = kq.value,
          n = tep.sliceCount,
          manh = [];
        var da = 0;
        var _doc = function doc(i) {
          return tep.getSliceAsync(i, function (s) {
            if (s.status !== Office.AsyncResultStatus.Succeeded) {
              tep.closeAsync();
              return loi(new Error(s.error.message));
            }
            manh[i] = new Uint8Array(s.value.data);
            if (++da === n) {
              tep.closeAsync();
              var tong = new Uint8Array(manh.reduce(function (a, m) {
                return a + m.length;
              }, 0));
              var o = 0;
              for (var _i = 0, _manh = manh; _i < _manh.length; _i++) {
                var m = _manh[_i];
                tong.set(m, o);
                o += m.length;
              }
              xong(tong.buffer);
            } else _doc(i + 1);
          });
        };
        _doc(0);
      });
    });
  }
  var coApi = function coApi(ban) {
    return Office.context.requirements.isSetSupported("WordApi", ban);
  };
  function moVanBanMoi(_x) {
    return _moVanBanMoi.apply(this, arguments);
  }
  function _moVanBanMoi() {
    _moVanBanMoi = _asyncToGenerator(_regenerator().m(function _callee5(b64) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            if (coApi("1.3")) {
              _context5.n = 1;
              break;
            }
            throw new Error("WORD_CU");
          case 1:
            _context5.n = 2;
            return Word.run(function () {
              var _ref4 = _asyncToGenerator(_regenerator().m(function _callee4(ctx) {
                return _regenerator().w(function (_context4) {
                  while (1) switch (_context4.n) {
                    case 0:
                      ctx.application.createDocument(b64).open();
                      _context4.n = 1;
                      return ctx.sync();
                    case 1:
                      return _context4.a(2);
                  }
                }, _callee4);
              }));
              return function (_x1) {
                return _ref4.apply(this, arguments);
              };
            }());
          case 2:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return _moVanBanMoi.apply(this, arguments);
  }
  function nutThayNoiDung(dich, html, b64, nhan) {
    $(dich).innerHTML = "<div class=\"thong-bao canh-bao\">".concat(html, "<p>Word b\u1EA3n n\xE0y kh\xF4ng cho add-in m\u1EDF c\u1EEDa s\u1ED5 m\u1EDBi. C\xF3 th\u1EC3 thay n\u1ED9i dung v\u0103n b\u1EA3n \u0111ang m\u1EDF b\u1EB1ng ").concat(nhan, "; b\u1EA5m Ctrl + Z n\u1EBFu mu\u1ED1n l\u1EA5y l\u1EA1i. Kh\u1ED5 gi\u1EA5y v\xE0 l\u1EC1 trang kh\xF4ng \u0111\u1ED5i theo, \u0111\u1EB7t tay \u1EDF Layout \u203A Margins \u203A Custom Margins: tr\xEAn 2, d\u01B0\u1EDBi 2, tr\xE1i 3, ph\u1EA3i 2 cm.</p><button class=\"chinh rong\" id=\"").concat(dich, "-thay\">Thay n\u1ED9i dung v\u0103n b\u1EA3n \u0111ang m\u1EDF</button></div>");
    $(dich + "-thay").onclick = _asyncToGenerator(_regenerator().m(function _callee2() {
      var _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return Word.run(function () {
              var _ref2 = _asyncToGenerator(_regenerator().m(function _callee(ctx) {
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      ctx.document.body.insertFileFromBase64(b64, "Replace");
                      _context.n = 1;
                      return ctx.sync();
                    case 1:
                      return _context.a(2);
                  }
                }, _callee);
              }));
              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());
          case 1:
            bao(dich, "dat", "Đã thay nội dung. Nhớ đặt lại khổ giấy, lề trang như hướng dẫn trên nếu chưa đúng.");
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t = _context2.v;
            bao(dich, "loi", "Không thay được: " + ESC(_t.message));
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
  }
  function bao(dich, loai, html) {
    $(dich).innerHTML = "<div class=\"thong-bao ".concat(loai, "\">").concat(html, "</div>");
  }
  function chay(_x3, _x4) {
    return _chay.apply(this, arguments);
  }
  function _chay() {
    _chay = _asyncToGenerator(_regenerator().m(function _callee6(nut, viec) {
      var b, cu;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            b = $(nut), cu = b.textContent;
            b.disabled = true;
            b.textContent = "Đang làm…";
            _context6.p = 1;
            _context6.n = 2;
            return viec();
          case 2:
            _context6.p = 2;
            b.disabled = false;
            b.textContent = cu;
            return _context6.f(2);
          case 3:
            return _context6.a(2);
        }
      }, _callee6, null, [[1,, 2, 3]]);
    }));
    return _chay.apply(this, arguments);
  }
  var soSanh = function soSanh(a, b) {
    var x = String(a).split(".").map(Number),
      y = String(b).split(".").map(Number);
    for (var i = 0; i < 3; i++) if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) - (y[i] || 0);
    return 0;
  };
  var banTin = null;
  function kiemNangCap(_x5) {
    return _kiemNangCap.apply(this, arguments);
  }
  function _kiemNangCap() {
    _kiemNangCap = _asyncToGenerator(_regenerator().m(function _callee7(boQuaDeSau) {
      var r, _t2;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
            _context7.n = 1;
            return fetch(CH.goc_web + "phien-ban.json?t=" + Date.now(), {
              cache: "no-store"
            });
          case 1:
            r = _context7.v;
            _context7.n = 2;
            return r.json();
          case 2:
            banTin = _context7.v;
            _context7.n = 4;
            break;
          case 3:
            _context7.p = 3;
            _t2 = _context7.v;
            return _context7.a(2, false);
          case 4:
            veBanCu();
            if (!(soSanh(banTin.moi_nhat, CH.phien_ban) <= 0)) {
              _context7.n = 5;
              break;
            }
            return _context7.a(2, false);
          case 5:
            if (!(!boQuaDeSau && sessionStorage.getItem("nd30_de_sau") === banTin.moi_nhat)) {
              _context7.n = 6;
              break;
            }
            return _context7.a(2, true);
          case 6:
            $("nc-phien-ban").textContent = banTin.moi_nhat;
            $("nc-noi-dung").innerHTML = (banTin.noi_dung || []).map(function (x) {
              return "<li>".concat(ESC(x), "</li>");
            }).join("");
            $("bang-nang-cap").hidden = false;
            return _context7.a(2, true);
        }
      }, _callee7, null, [[0, 3]]);
    }));
    return _kiemNangCap.apply(this, arguments);
  }
  function chuyenBan(pb) {
    localStorage.setItem(LS_PB, pb);
    location.href = CH.goc_web + "taskpane.html";
  }
  function veBanCu() {
    var ds = (banTin && banTin.cac_ban || []).filter(function (b) {
      return b.phien_ban !== CH.phien_ban;
    });
    $("ds-ban-cu").innerHTML = ds.length ? "Chuyển sang bản khác: " + ds.map(function (b) {
      return "<button class=\"lien-ket\" data-ban=\"".concat(ESC(b.phien_ban), "\">").concat(ESC(b.phien_ban), "</button>");
    }).join(" ") : "";
  }
  var LY_DO = {
    "chua-kich-hoat": "Nhập mã kích hoạt để bắt đầu dùng.",
    "het-han": "Đã hết 7 ngày dùng thử. Nhập mã vĩnh viễn để dùng tiếp.",
    "khac-may": "Giấy phép đang lưu không thuộc máy này. Nhập lại mã.",
    "gia-mao": "Giấy phép đang lưu không hợp lệ. Nhập lại mã.",
    "dong-ho": "Đồng hồ máy tính đang lùi so với lần dùng trước. Kết nối mạng rồi mở lại add-in để kiểm tra."
  };
  var trangThai = null;
  function kiemGiayPhep() {
    return _kiemGiayPhep.apply(this, arguments);
  }
  function _kiemGiayPhep() {
    _kiemGiayPhep = _asyncToGenerator(_regenerator().m(function _callee8() {
      var quaHan;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            quaHan = function quaHan(ms) {
              return new Promise(function (x) {
                return setTimeout(x, ms);
              });
            };
            _context8.n = 1;
            return Promise.race([ND30GiayPhep.kiemDinhKy(false), quaHan(6000)]);
          case 1:
            _context8.n = 2;
            return ND30GiayPhep.trangThai();
          case 2:
            trangThai = _context8.v;
            if (!(!trangThai.hop_le && trangThai.ly_do === "dong-ho")) {
              _context8.n = 5;
              break;
            }
            _context8.n = 3;
            return Promise.race([ND30GiayPhep.kiemDinhKy(true), quaHan(8000)]);
          case 3:
            _context8.n = 4;
            return ND30GiayPhep.trangThai();
          case 4:
            trangThai = _context8.v;
          case 5:
            $("dang-tai").hidden = true;
            if (trangThai.hop_le) moManChinh();else moKichHoat(LY_DO[trangThai.ly_do] || LY_DO["chua-kich-hoat"], false);
          case 6:
            return _context8.a(2);
        }
      }, _callee8);
    }));
    return _kiemGiayPhep.apply(this, arguments);
  }
  function moKichHoat(lyDo, choQuayLai) {
    $("man-chinh").hidden = true;
    $("man-kich-hoat").hidden = false;
    $("kh-ly-do").textContent = lyDo;
    $("kh-ma-may").textContent = ND30GiayPhep.maMay();
    $("nut-quay-lai").hidden = !choQuayLai;
    $("kh-thong-bao").hidden = true;
    $("o-ma").focus();
  }
  function moManChinh() {
    $("man-kich-hoat").hidden = true;
    $("man-chinh").hidden = false;
    var t = trangThai,
      an = t.ma ? t.ma.slice(0, 8) + "-••••" : "";
    if (t.loai === "dung-thu") {
      $("dai-dung-thu").hidden = false;
      $("dai-dung-thu").innerHTML = "D\xF9ng th\u1EED: c\xF2n <b>".concat(t.con_ngay, "</b> ng\xE0y. <button class=\"lien-ket\" id=\"nut-mua\">Nh\u1EADp m\xE3 v\u0129nh vi\u1EC5n</button>");
      $("nut-mua").onclick = function () {
        return moKichHoat("Nhập mã vĩnh viễn (VV-...). Giấy phép dùng thử sẽ được thay.", true);
      };
      $("tom-giay-phep").textContent = "Gi\u1EA5y ph\xE9p: d\xF9ng th\u1EED, c\xF2n ".concat(t.con_ngay, " ng\xE0y");
    } else {
      $("dai-dung-thu").hidden = true;
      $("tom-giay-phep").textContent = "Giấy phép: vĩnh viễn";
    }
    $("ct-giay-phep").innerHTML = "M\xE3: ".concat(ESC(an), "<br>M\xE3 m\xE1y: ").concat(ESC(ND30GiayPhep.maMay()), "<br>Phi\xEAn b\u1EA3n add-in: ").concat(ESC(CH.phien_ban)) + (t.han ? "<br>H\u1EA1n d\xF9ng th\u1EED: ".concat(new Date(t.han).toLocaleString("vi-VN")) : "");
  }
  function bamKichHoat() {
    return _bamKichHoat.apply(this, arguments);
  }
  function _bamKichHoat() {
    _bamKichHoat = _asyncToGenerator(_regenerator().m(function _callee0() {
      var tb;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            tb = $("kh-thong-bao");
            tb.hidden = true;
            _context0.n = 1;
            return chay("nut-kich-hoat", _asyncToGenerator(_regenerator().m(function _callee9() {
              var kq;
              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.n) {
                  case 0:
                    _context9.n = 1;
                    return ND30GiayPhep.kichHoat($("o-ma").value);
                  case 1:
                    kq = _context9.v;
                    if (kq.ok) {
                      _context9.n = 2;
                      break;
                    }
                    tb.textContent = kq.thong_bao;
                    tb.className = "thong-bao loi";
                    tb.hidden = false;
                    return _context9.a(2);
                  case 2:
                    _context9.n = 3;
                    return ND30GiayPhep.trangThai();
                  case 3:
                    trangThai = _context9.v;
                    if (trangThai.hop_le) {
                      _context9.n = 4;
                      break;
                    }
                    tb.textContent = LY_DO[trangThai.ly_do] || "Giấy phép chưa dùng được.";
                    tb.className = "thong-bao loi";
                    tb.hidden = false;
                    return _context9.a(2);
                  case 4:
                    $("o-ma").value = "";
                    moManChinh();
                    bao("kq-soat", "dat", trangThai.loai === "vinh-vien" ? "Đã kích hoạt bản vĩnh viễn." : "\u0110\xE3 k\xEDch ho\u1EA1t d\xF9ng th\u1EED ".concat(trangThai.con_ngay, " ng\xE0y."));
                  case 5:
                    return _context9.a(2);
                }
              }, _callee9);
            })));
          case 1:
            return _context0.a(2);
        }
      }, _callee0);
    }));
    return _bamKichHoat.apply(this, arguments);
  }
  function canGiayPhep() {
    return _canGiayPhep.apply(this, arguments);
  }
  function _canGiayPhep() {
    _canGiayPhep = _asyncToGenerator(_regenerator().m(function _callee1() {
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            _context1.n = 1;
            return ND30GiayPhep.trangThai();
          case 1:
            trangThai = _context1.v;
            if (!trangThai.hop_le) {
              _context1.n = 2;
              break;
            }
            return _context1.a(2, true);
          case 2:
            moKichHoat(LY_DO[trangThai.ly_do] || LY_DO["chua-kich-hoat"], false);
            return _context1.a(2, false);
        }
      }, _callee1);
    }));
    return _canGiayPhep.apply(this, arguments);
  }
  var NHOM = [["loi", "Lỗi"], ["canh-bao", "Cảnh báo"], ["goi-y", "Gợi ý"], ["dat", "Đã đạt"]];
  function soat() {
    return _soat.apply(this, arguments);
  }
  function _soat() {
    _soat = _asyncToGenerator(_regenerator().m(function _callee11() {
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.n) {
          case 0:
            _context12.n = 1;
            return canGiayPhep();
          case 1:
            if (_context12.v) {
              _context12.n = 2;
              break;
            }
            return _context12.a(2);
          case 2:
            _context12.n = 3;
            return chay("nut-soat", _asyncToGenerator(_regenerator().m(function _callee10() {
              var kq, t, html, _iterator, _step, _loop, ss, _t3, _t4, _t5;
              return _regenerator().w(function (_context11) {
                while (1) switch (_context11.p = _context11.n) {
                  case 0:
                    _context11.p = 0;
                    _t3 = SoatVanBan;
                    _context11.n = 1;
                    return layTep();
                  case 1:
                    _context11.n = 2;
                    return _t3.soat.call(_t3, _context11.v, "van-ban");
                  case 2:
                    kq = _context11.v;
                    _context11.n = 4;
                    break;
                  case 3:
                    _context11.p = 3;
                    _t4 = _context11.v;
                    bao("kq-soat", "loi", "Không đọc được văn bản: " + ESC(_t4.message));
                    return _context11.a(2);
                  case 4:
                    t = kq.tong_quan;
                    html = "<div class=\"tom-tat\"><span class=\"so loi\">".concat(t.loi, "</span> l\u1ED7i <span class=\"so canh-bao\">").concat(t.canh_bao, "</span> c\u1EA3nh b\xE1o <span class=\"so goi-y\">").concat(t.goi_y, "</span> g\u1EE3i \xFD <span class=\"so dat\">").concat(t.dat, "</span> \u0111\u1EA1t</div>");
                    if (!t.la_van_ban_hanh_chinh) html += "<p class=\"ghi\">V\u0103n b\u1EA3n ch\u01B0a c\xF3 Qu\u1ED1c hi\u1EC7u, Ti\xEAu ng\u1EEF, s\u1ED1 k\xFD hi\u1EC7u hay n\u01A1i nh\u1EADn n\xEAn ch\u1EC9 so\xE1t \u0111\u01B0\u1EE3c ph\u1EA7n tr\xECnh b\xE0y chung.</p>";
                    _iterator = _createForOfIteratorHelper(NHOM);
                    _context11.p = 5;
                    _loop = _regenerator().m(function _loop() {
                      var _step$value, m, ten, ds, _iterator2, _step2, x, _iterator3, _step3, v;
                      return _regenerator().w(function (_context10) {
                        while (1) switch (_context10.n) {
                          case 0:
                            _step$value = _slicedToArray(_step.value, 2), m = _step$value[0], ten = _step$value[1];
                            ds = kq.ket_qua.filter(function (x) {
                              return x.muc === m;
                            });
                            if (ds.length) {
                              _context10.n = 1;
                              break;
                            }
                            return _context10.a(2, 1);
                          case 1:
                            html += "<details class=\"nhom ".concat(m, "\" ").concat(m === "dat" ? "" : "open", "><summary>").concat(ten, " (").concat(ds.length, ")</summary>");
                            _iterator2 = _createForOfIteratorHelper(ds);
                            try {
                              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                x = _step2.value;
                                html += "<div class=\"muc ".concat(m, "\"><div class=\"tieu\">").concat(ESC(x.tieu_de), "</div>");
                                if (x.chi_tiet) html += "<div>".concat(ESC(x.chi_tiet), "</div>");
                                if (x.cach_sua) html += "<div class=\"sua\"><b>C\xE1ch s\u1EEDa:</b> ".concat(ESC(x.cach_sua), "</div>");
                                if (x.can_cu) html += "<div class=\"can-cu\">".concat(ESC(x.can_cu), "</div>");
                                _iterator3 = _createForOfIteratorHelper(x.vi_du || []);
                                try {
                                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                                    v = _step3.value;
                                    html += "<button class=\"vi-du\" data-tim=\"".concat(ESC(v.trich), "\">\u0110o\u1EA1n ").concat(v.doan, ": ").concat(ESC(v.trich)).concat(v.ghi ? " (" + ESC(v.ghi) + ")" : "", "</button>");
                                  }
                                } catch (err) {
                                  _iterator3.e(err);
                                } finally {
                                  _iterator3.f();
                                }
                                html += "</div>";
                              }
                            } catch (err) {
                              _iterator2.e(err);
                            } finally {
                              _iterator2.f();
                            }
                            html += "</details>";
                          case 2:
                            return _context10.a(2);
                        }
                      }, _loop);
                    });
                    _iterator.s();
                  case 6:
                    if ((_step = _iterator.n()).done) {
                      _context11.n = 9;
                      break;
                    }
                    return _context11.d(_regeneratorValues(_loop()), 7);
                  case 7:
                    if (!_context11.v) {
                      _context11.n = 8;
                      break;
                    }
                    return _context11.a(3, 8);
                  case 8:
                    _context11.n = 6;
                    break;
                  case 9:
                    _context11.n = 11;
                    break;
                  case 10:
                    _context11.p = 10;
                    _t5 = _context11.v;
                    _iterator.e(_t5);
                  case 11:
                    _context11.p = 11;
                    _iterator.f();
                    return _context11.f(11);
                  case 12:
                    if (t.loi + t.canh_bao) html += "<button id=\"sang-sua\" class=\"rong\">S\u1EEDa nhanh ph\u1EA7n tr\xECnh b\xE0y \u203A</button>";
                    $("kq-soat").innerHTML = html;
                    ss = $("sang-sua");
                    if (ss) ss.onclick = function () {
                      return doiThe("sua");
                    };
                  case 13:
                    return _context11.a(2);
                }
              }, _callee10, null, [[5, 10, 11, 12], [0, 3]]);
            })));
          case 3:
            return _context12.a(2);
        }
      }, _callee11);
    }));
    return _soat.apply(this, arguments);
  }
  function timDen(_x6) {
    return _timDen.apply(this, arguments);
  }
  function _timDen() {
    _timDen = _asyncToGenerator(_regenerator().m(function _callee13(trich) {
      var t, thu;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.n) {
          case 0:
            t = String(trich).replace(/…$/, "").replace(/[\^]/g, "").trim();
            thu = [t.slice(0, 80), t.slice(0, 30), t.slice(0, 12)].filter(function (x, i, a) {
              return x && a.indexOf(x) === i;
            });
            _context14.n = 1;
            return Word.run(function () {
              var _ref7 = _asyncToGenerator(_regenerator().m(function _callee12(ctx) {
                var _iterator4, _step4, s, r, _t6;
                return _regenerator().w(function (_context13) {
                  while (1) switch (_context13.p = _context13.n) {
                    case 0:
                      _iterator4 = _createForOfIteratorHelper(thu);
                      _context13.p = 1;
                      _iterator4.s();
                    case 2:
                      if ((_step4 = _iterator4.n()).done) {
                        _context13.n = 6;
                        break;
                      }
                      s = _step4.value;
                      r = ctx.document.body.search(s, {
                        matchCase: true
                      });
                      r.load("items");
                      _context13.n = 3;
                      return ctx.sync();
                    case 3:
                      if (!r.items.length) {
                        _context13.n = 5;
                        break;
                      }
                      r.items[0].select();
                      _context13.n = 4;
                      return ctx.sync();
                    case 4:
                      return _context13.a(2);
                    case 5:
                      _context13.n = 2;
                      break;
                    case 6:
                      _context13.n = 8;
                      break;
                    case 7:
                      _context13.p = 7;
                      _t6 = _context13.v;
                      _iterator4.e(_t6);
                    case 8:
                      _context13.p = 8;
                      _iterator4.f();
                      return _context13.f(8);
                    case 9:
                      return _context13.a(2);
                  }
                }, _callee12, null, [[1, 7, 8, 9]]);
              }));
              return function (_x10) {
                return _ref7.apply(this, arguments);
              };
            }());
          case 1:
            return _context14.a(2);
        }
      }, _callee13);
    }));
    return _timDen.apply(this, arguments);
  }
  function suaNhanh() {
    return _suaNhanh.apply(this, arguments);
  }
  function _suaNhanh() {
    _suaNhanh = _asyncToGenerator(_regenerator().m(function _callee15() {
      var tc;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.n) {
          case 0:
            _context16.n = 1;
            return canGiayPhep();
          case 1:
            if (_context16.v) {
              _context16.n = 2;
              break;
            }
            return _context16.a(2);
          case 2:
            tc = {};
            document.querySelectorAll("[data-tc]").forEach(function (o) {
              tc[o.dataset.tc] = o.checked;
            });
            _context16.n = 3;
            return chay("nut-sua", _asyncToGenerator(_regenerator().m(function _callee14() {
              var goc, ra, _yield$Promise$all, _yield$Promise$all2, truoc, sau, tk, dong, html, b64, _t7, _t8;
              return _regenerator().w(function (_context15) {
                while (1) switch (_context15.p = _context15.n) {
                  case 0:
                    _context15.p = 0;
                    _context15.n = 1;
                    return layTep();
                  case 1:
                    goc = _context15.v;
                    _context15.n = 2;
                    return ND30SuaNhanh.sua(goc, tc);
                  case 2:
                    ra = _context15.v;
                    _context15.n = 4;
                    break;
                  case 3:
                    _context15.p = 3;
                    _t7 = _context15.v;
                    bao("kq-sua", "loi", "Không sửa được: " + ESC(_t7.message));
                    return _context15.a(2);
                  case 4:
                    _context15.n = 5;
                    return Promise.all([SoatVanBan.soat(goc, "goc"), SoatVanBan.soat(ra.buf.buffer, "sua")]);
                  case 5:
                    _yield$Promise$all = _context15.v;
                    _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                    truoc = _yield$Promise$all2[0];
                    sau = _yield$Promise$all2[1];
                    tk = ra.tk;
                    dong = [["trang", "phần trang đổi khổ giấy, lề"], ["phong", "chỗ đổi phông"], ["mau", "chỗ đổi màu chữ"], ["co", "đoạn đổi cỡ chữ"], ["canh", "đoạn canh đều"], ["lui", "đoạn lùi đầu dòng"], ["gian_dong", "đoạn đổi giãn dòng"], ["cach_doan", "đoạn đổi cách đoạn"]].filter(function (_ref9) {
                      var _ref0 = _slicedToArray(_ref9, 1),
                        k = _ref0[0];
                      return tk[k];
                    }).map(function (_ref1) {
                      var _ref10 = _slicedToArray(_ref1, 2),
                        k = _ref10[0],
                        t = _ref10[1];
                      return "<li>".concat(tk[k], " ").concat(t, "</li>");
                    }).join("");
                    html = "<p>L\u1ED7i v\xE0 c\u1EA3nh b\xE1o: <b>".concat(truoc.tong_quan.loi + truoc.tong_quan.canh_bao, "</b> \u2192 <b>").concat(sau.tong_quan.loi + sau.tong_quan.canh_bao, "</b></p>") + (dong ? "<ul>".concat(dong, "</ul>") : "<p>Phần trình bày đã đúng, không có gì phải sửa.</p>");
                    if (dong) {
                      _context15.n = 6;
                      break;
                    }
                    bao("kq-sua", "dat", html);
                    return _context15.a(2);
                  case 6:
                    b64 = ND30Zip.sangBase64(ra.buf);
                    _context15.p = 7;
                    _context15.n = 8;
                    return moVanBanMoi(b64);
                  case 8:
                    bao("kq-sua", "dat", html + "<p>Word đã mở <b>bản đã sửa</b> trong cửa sổ mới. Xem lại rồi lưu bản mới (File › Save As). Lỗi còn lại là lỗi nội dung, xem ở thẻ Soát.</p>");
                    _context15.n = 10;
                    break;
                  case 9:
                    _context15.p = 9;
                    _t8 = _context15.v;
                    nutThayNoiDung("kq-sua", html, b64, "bản đã sửa");
                  case 10:
                    return _context15.a(2);
                }
              }, _callee14, null, [[7, 9], [0, 3]]);
            })));
          case 3:
            return _context16.a(2);
        }
      }, _callee15);
    }));
    return _suaNhanh.apply(this, arguments);
  }
  var LS_HS = "nd30_ho_so";
  var TEN_LOAI_DU = {
    BC: "BÁO CÁO",
    TTr: "TỜ TRÌNH",
    KH: "KẾ HOẠCH",
    TB: "THÔNG BÁO",
    "QĐ": "QUYẾT ĐỊNH",
    CTr: "CHƯƠNG TRÌNH",
    HD: "HƯỚNG DẪN",
    "ĐA": "ĐỀ ÁN",
    PA: "PHƯƠNG ÁN",
    QC: "QUY CHẾ",
    GM: "GIẤY MỜI",
    BB: "BIÊN BẢN",
    NQ: "NGHỊ QUYẾT"
  };
  var dong = function dong(s) {
    return String(s || "").split(/\r?\n/).map(function (x) {
      return x.trim();
    }).filter(Boolean);
  };
  function docHoSo() {
    try {
      return JSON.parse(localStorage.getItem(LS_HS) || "{}");
    } catch (e) {
      return {};
    }
  }
  function napHoSo() {
    var hs = docHoSo();
    if (!hs.coQuan) {
      try {
        var f = JSON.parse(localStorage.getItem(LS_FORM) || "{}");
        hs = Object.assign({
          chuQuan: f.chuQuan,
          coQuan: f.coQuan,
          diaDanh: f.diaDanh,
          thamQuyen: f.thamQuyen,
          chucVu: f.chucVu,
          hoTen: f.hoTen
        }, hs);
      } catch (e) {}
    }
    document.querySelectorAll("[data-hs]").forEach(function (x) {
      if (hs[x.dataset.hs] != null && hs[x.dataset.hs] !== "") x.value = hs[x.dataset.hs];
    });
    if (!docHoSo().coQuan) $("ho-so").setAttribute("open", "");
  }
  function luuHoSo() {
    var hs = {};
    document.querySelectorAll("[data-hs]").forEach(function (x) {
      hs[x.dataset.hs] = x.value.trim();
    });
    localStorage.setItem(LS_HS, JSON.stringify(hs));
    return hs;
  }
  function doiLoaiDung() {
    var cv = document.querySelector('[data-d="loai"]').value === "CV";
    $("d-vv").hidden = !cv;
    $("d-trich").hidden = cv;
  }
  function docVB() {
    return _docVB.apply(this, arguments);
  }
  function _docVB() {
    _docVB = _asyncToGenerator(_regenerator().m(function _callee17() {
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.n) {
          case 0:
            _context18.n = 1;
            return canGiayPhep();
          case 1:
            if (_context18.v) {
              _context18.n = 2;
              break;
            }
            return _context18.a(2);
          case 2:
            _context18.n = 3;
            return chay("nut-doc-vb", _asyncToGenerator(_regenerator().m(function _callee16() {
              var pt, hs, dat, nhan, _t9, _t0;
              return _regenerator().w(function (_context17) {
                while (1) switch (_context17.p = _context17.n) {
                  case 0:
                    _context17.p = 0;
                    _t9 = ND30DungVB;
                    _context17.n = 1;
                    return layTep();
                  case 1:
                    _context17.n = 2;
                    return _t9.phanTich.call(_t9, _context17.v);
                  case 2:
                    pt = _context17.v;
                    _context17.n = 4;
                    break;
                  case 3:
                    _context17.p = 3;
                    _t0 = _context17.v;
                    bao("kq-dung", "loi", "Không đọc được văn bản: " + ESC(_t0.message));
                    return _context17.a(2);
                  case 4:
                    hs = docHoSo();
                    dat = function dat(k, v) {
                      var x = document.querySelector("[data-d=\"".concat(k, "\"]"));
                      x.value = v || "";
                    };
                    dat("loai", pt.loai);
                    dat("trichYeu", pt.trichYeu);
                    dat("veViec", pt.veViec);
                    dat("kinhGui", pt.kinhGui.join("\n"));
                    dat("noiNhan", (pt.noiNhan.length ? pt.noiNhan : dong(hs.noiNhan)).join("\n"));
                    dat("thamQuyen", pt.thamQuyen || (pt.chucVu ? "" : hs.thamQuyen));
                    dat("chucVu", pt.chucVu || hs.chucVu);
                    dat("hoTen", pt.hoTen || hs.hoTen);
                    doiLoaiDung();
                    nhan = [];
                    nhan.push(pt.tenLoai ? "t\xEAn lo\u1EA1i <b>".concat(ESC(pt.tenLoai), "</b>") : "không thấy tên loại, coi là <b>công văn</b>");
                    if (pt.trichYeu || pt.veViec) nhan.push("trích yếu");
                    if (pt.kinhGui.length) nhan.push("".concat(pt.kinhGui.length, " n\u01A1i K\xEDnh g\u1EEDi"));
                    nhan.push("".concat(pt.soDoan, " \u0111o\u1EA1n n\u1ED9i dung"));
                    if (pt.coKhoiDau) nhan.push("khối Quốc hiệu, số, ngày cũ (sẽ dựng lại)");
                    if (pt.coKhoiKy) nhan.push("khối nơi nhận, chữ ký cũ (sẽ dựng lại)");
                    $("dung-tom").innerHTML = "Nhận ra: " + nhan.join("; ") + ". Xem lại các ô dưới đây rồi bấm Dựng." + (docHoSo().coQuan ? "" : "<br><b>Chưa có hồ sơ cơ quan:</b> điền và bấm Lưu hồ sơ ở trên trước khi dựng.");
                    $("form-dung").hidden = false;
                    $("kq-dung").innerHTML = "";
                  case 5:
                    return _context17.a(2);
                }
              }, _callee16, null, [[0, 3]]);
            })));
          case 3:
            return _context18.a(2);
        }
      }, _callee17);
    }));
    return _docVB.apply(this, arguments);
  }
  function datLeTrang() {
    return _datLeTrang.apply(this, arguments);
  }
  function _datLeTrang() {
    _datLeTrang = _asyncToGenerator(_regenerator().m(function _callee19() {
      var _t1;
      return _regenerator().w(function (_context20) {
        while (1) switch (_context20.p = _context20.n) {
          case 0:
            if (Office.context.requirements.isSetSupported("WordApiDesktop", "1.3")) {
              _context20.n = 1;
              break;
            }
            return _context20.a(2, false);
          case 1:
            _context20.p = 1;
            _context20.n = 2;
            return Word.run(function () {
              var _ref12 = _asyncToGenerator(_regenerator().m(function _callee18(ctx) {
                var ds;
                return _regenerator().w(function (_context19) {
                  while (1) switch (_context19.n) {
                    case 0:
                      ds = ctx.document.sections;
                      ds.load("items");
                      _context19.n = 1;
                      return ctx.sync();
                    case 1:
                      ds.items.forEach(function (s) {
                        return s.pageSetup.load("orientation");
                      });
                      _context19.n = 2;
                      return ctx.sync();
                    case 2:
                      ds.items.forEach(function (s) {
                        var p = s.pageSetup,
                          ngang = p.orientation === "Landscape";
                        p.pageWidth = ngang ? 841.9 : 595.3;
                        p.pageHeight = ngang ? 595.3 : 841.9;
                        p.topMargin = 56.7;
                        p.bottomMargin = 56.7;
                        p.leftMargin = 85.05;
                        p.rightMargin = 56.7;
                      });
                      _context19.n = 3;
                      return ctx.sync();
                    case 3:
                      return _context19.a(2);
                  }
                }, _callee18);
              }));
              return function (_x11) {
                return _ref12.apply(this, arguments);
              };
            }());
          case 2:
            return _context20.a(2, true);
          case 3:
            _context20.p = 3;
            _t1 = _context20.v;
            return _context20.a(2, false);
        }
      }, _callee19, null, [[1, 3]]);
    }));
    return _datLeTrang.apply(this, arguments);
  }
  function dungVB() {
    return _dungVB.apply(this, arguments);
  }
  function _dungVB() {
    _dungVB = _asyncToGenerator(_regenerator().m(function _callee22() {
      var hs, v, loai, tt;
      return _regenerator().w(function (_context23) {
        while (1) switch (_context23.n) {
          case 0:
            _context23.n = 1;
            return canGiayPhep();
          case 1:
            if (_context23.v) {
              _context23.n = 2;
              break;
            }
            return _context23.a(2);
          case 2:
            hs = luuHoSo();
            if (hs.coQuan) {
              _context23.n = 3;
              break;
            }
            bao("kq-dung", "loi", "Chưa có tên cơ quan ban hành trong hồ sơ cơ quan.");
            $("ho-so").setAttribute("open", "");
            return _context23.a(2);
          case 3:
            v = function v(k) {
              return document.querySelector("[data-d=\"".concat(k, "\"]")).value.trim();
            };
            loai = v("loai");
            tt = Object.assign({}, hs, {
              loai: loai,
              tenLoai: TEN_LOAI_DU[loai] || "",
              trichYeu: v("trichYeu"),
              veViec: v("veViec"),
              kinhGui: dong(v("kinhGui")),
              noiNhan: dong(v("noiNhan")),
              thamQuyen: v("thamQuyen"),
              chucVu: v("chucVu"),
              hoTen: v("hoTen")
            });
            _context23.n = 4;
            return chay("nut-dung", _asyncToGenerator(_regenerator().m(function _callee21() {
              var goc, chuan, ra, le, sau, conLai, _t10, _t11;
              return _regenerator().w(function (_context22) {
                while (1) switch (_context22.p = _context22.n) {
                  case 0:
                    _context22.p = 0;
                    _context22.n = 1;
                    return layTep();
                  case 1:
                    goc = _context22.v;
                    _context22.n = 2;
                    return ND30SuaNhanh.sua(goc);
                  case 2:
                    chuan = _context22.v;
                    _context22.n = 3;
                    return ND30DungVB.dung(chuan.buf, tt);
                  case 3:
                    ra = _context22.v;
                    _context22.n = 4;
                    return Word.run(function () {
                      var _ref14 = _asyncToGenerator(_regenerator().m(function _callee20(ctx) {
                        return _regenerator().w(function (_context21) {
                          while (1) switch (_context21.n) {
                            case 0:
                              ctx.document.body.insertFileFromBase64(ND30Zip.sangBase64(ra), "Replace");
                              _context21.n = 1;
                              return ctx.sync();
                            case 1:
                              return _context21.a(2);
                          }
                        }, _callee20);
                      }));
                      return function (_x12) {
                        return _ref14.apply(this, arguments);
                      };
                    }());
                  case 4:
                    _context22.n = 5;
                    return boLuiKhung();
                  case 5:
                    _context22.n = 6;
                    return datLeTrang();
                  case 6:
                    le = _context22.v;
                    _t10 = SoatVanBan;
                    _context22.n = 7;
                    return layTep();
                  case 7:
                    _context22.n = 8;
                    return _t10.soat.call(_t10, _context22.v, "dung");
                  case 8:
                    sau = _context22.v;
                    conLai = sau.tong_quan.loi + sau.tong_quan.canh_bao;
                    bao("kq-dung", le || conLai === 0 ? "dat" : "canh-bao", "Đã dựng văn bản và chuẩn hóa định dạng. Bấm Ctrl + Z nếu muốn trả lại." + (ra.soCanCu ? " <br>Kh\u1ED1i c\u0103n c\u1EE9 (".concat(ra.soCanCu, " d\xF2ng): in nghi\xEAng, c\xE1c d\xF2ng tr\xEAn k\u1EBFt th\xFAc b\u1EB1ng d\u1EA5u ch\u1EA5m ph\u1EA9y.") : "") + (ra.soPhuLuc ? " <br>\u0110\xE3 chu\u1EA9n h\xF3a ".concat(ra.soPhuLuc, " ph\u1EE5 l\u1EE5c: m\u1ED7i ph\u1EE5 l\u1EE5c sang trang m\u1EDBi, s\u1ED1 trang \u0111\xE1nh l\u1EA1i t\u1EEB 1; d\xF2ng \"K\xE8m theo\" \u0111\u1EC3 tr\u1ED1ng s\u1ED1, ng\xE0y ch\u1EDD v\u0103n th\u01B0.") : "") + (le ? " Đã đặt khổ A4, lề 2 - 2 - 3 - 2 cm." : " <br>Word bản này không cho add-in đổi lề trang: nếu thẻ Soát báo lề hoặc khổ giấy sai, vào Layout › Margins › Custom Margins, đặt trên 2, dưới 2, trái 3, phải 2 cm; Layout › Size › A4.") + "<br>So\xE1t l\u1EA1i: ".concat(sau.tong_quan.loi, " l\u1ED7i, ").concat(sau.tong_quan.canh_bao, " c\u1EA3nh b\xE1o") + (conLai ? " (xem thẻ Soát)." : "."));
                    _context22.n = 10;
                    break;
                  case 9:
                    _context22.p = 9;
                    _t11 = _context22.v;
                    bao("kq-dung", "loi", "Không dựng được: " + ESC(_t11.message));
                  case 10:
                    return _context22.a(2);
                }
              }, _callee21, null, [[0, 9]]);
            })));
          case 4:
            return _context23.a(2);
        }
      }, _callee22);
    }));
    return _dungVB.apply(this, arguments);
  }
  function veKhuon() {
    $("ds-khuon").innerHTML = (window.ND30_KHUON || []).map(function (k, i) {
      return "<div class=\"khuon\"><div><b>".concat(ESC(k.ten), "</b><div class=\"ghi\">").concat(ESC(k.mo_ta || ""), "</div></div><button class=\"chinh\" data-khuon=\"").concat(i, "\">T\u1EA1o m\u1EDBi</button></div>");
    }).join("");
  }
  function taoTuKhuon(_x7, _x8) {
    return _taoTuKhuon.apply(this, arguments);
  }
  function _taoTuKhuon() {
    _taoTuKhuon = _asyncToGenerator(_regenerator().m(function _callee23(i, nut) {
      var k, _t12;
      return _regenerator().w(function (_context24) {
        while (1) switch (_context24.p = _context24.n) {
          case 0:
            _context24.n = 1;
            return canGiayPhep();
          case 1:
            if (_context24.v) {
              _context24.n = 2;
              break;
            }
            return _context24.a(2);
          case 2:
            k = window.ND30_KHUON[i];
            nut.disabled = true;
            _context24.p = 3;
            _context24.n = 4;
            return moVanBanMoi(k.b64);
          case 4:
            bao("kq-khuon", "dat", "\u0110\xE3 m\u1EDF ".concat(ESC(k.ten), " trong c\u1EEDa s\u1ED5 m\u1EDBi. Thay c\xE1c ch\u1ED7 ch\u1EA5m (......) b\u1EB1ng n\u1ED9i dung th\u1EADt."));
            _context24.n = 6;
            break;
          case 5:
            _context24.p = 5;
            _t12 = _context24.v;
            nutThayNoiDung("kq-khuon", "", k.b64, ESC(k.ten));
          case 6:
            _context24.p = 6;
            nut.disabled = false;
            return _context24.f(6);
          case 7:
            return _context24.a(2);
        }
      }, _callee23, null, [[3, 5, 6, 7]]);
    }));
    return _taoTuKhuon.apply(this, arguments);
  }
  var LS_FORM = "nd30_form_khoi";
  function docForm() {
    var o = {};
    document.querySelectorAll("[data-k]").forEach(function (x) {
      o[x.dataset.k] = x.type === "checkbox" ? x.checked : x.value;
    });
    var luu = Object.assign({}, o);
    delete luu.ngay;
    delete luu.soKyHieu;
    delete luu.veViec;
    delete luu.trichYeu;
    localStorage.setItem(LS_FORM, JSON.stringify(luu));
    return o;
  }
  function napForm() {
    var o = {};
    try {
      o = JSON.parse(localStorage.getItem(LS_FORM) || "{}");
    } catch (e) {}
    document.querySelectorAll("[data-k]").forEach(function (x) {
      if (!(x.dataset.k in o)) return;
      if (x.type === "checkbox") x.checked = !!o[x.dataset.k];else x.value = o[x.dataset.k];
    });
    var d = new Date();
    document.querySelector('[data-k="ngay"]').value = "".concat(d.getFullYear(), "-").concat(String(d.getMonth() + 1).padStart(2, "0"), "-").concat(String(d.getDate()).padStart(2, "0"));
    doiLoai();
  }
  var TEN_LOAI = {
    BC: "Báo cáo",
    TTr: "Tờ trình",
    KH: "Kế hoạch",
    TB: "Thông báo",
    "QĐ": "Quyết định",
    NQ: "Nghị quyết"
  };
  function doiLoai() {
    var l = document.querySelector('[data-k="loai"]').value;
    $("dong-vv").hidden = l !== "CV";
    $("dong-trich-yeu").hidden = l === "CV";
    document.querySelector('[data-k="soKyHieu"]').placeholder = l === "CV" ? "     /UBND-VP" : "     /".concat(l, "-UBND");
  }
  function chenOoxml(_x9, _x0) {
    return _chenOoxml.apply(this, arguments);
  }
  function _chenOoxml() {
    _chenOoxml = _asyncToGenerator(_regenerator().m(function _callee25(xml, viTri) {
      return _regenerator().w(function (_context26) {
        while (1) switch (_context26.n) {
          case 0:
            _context26.n = 1;
            return Word.run(function () {
              var _ref15 = _asyncToGenerator(_regenerator().m(function _callee24(ctx) {
                return _regenerator().w(function (_context25) {
                  while (1) switch (_context25.n) {
                    case 0:
                      if (viTri === "dau") ctx.document.body.insertOoxml(xml, "Start");else if (viTri === "cuoi") ctx.document.body.insertOoxml(xml, "End");else ctx.document.getSelection().insertOoxml(xml, "Replace");
                      _context25.n = 1;
                      return ctx.sync();
                    case 1:
                      return _context25.a(2);
                  }
                }, _callee24);
              }));
              return function (_x13) {
                return _ref15.apply(this, arguments);
              };
            }());
          case 1:
            _context26.n = 2;
            return boLuiKhung();
          case 2:
            return _context26.a(2);
        }
      }, _callee25);
    }));
    return _chenOoxml.apply(this, arguments);
  }
  function boLuiKhung() {
    return _boLuiKhung.apply(this, arguments);
  }
  function _boLuiKhung() {
    _boLuiKhung = _asyncToGenerator(_regenerator().m(function _callee27() {
      var _t13;
      return _regenerator().w(function (_context28) {
        while (1) switch (_context28.p = _context28.n) {
          case 0:
            _context28.p = 0;
            _context28.n = 1;
            return Word.run(function () {
              var _ref16 = _asyncToGenerator(_regenerator().m(function _callee26(ctx) {
                var ps;
                return _regenerator().w(function (_context27) {
                  while (1) switch (_context27.n) {
                    case 0:
                      ps = ctx.document.body.paragraphs;
                      ps.load("items/style,items/firstLineIndent");
                      _context27.n = 1;
                      return ctx.sync();
                    case 1:
                      ps.items.forEach(function (p) {
                        if (/N[ĐD]30\s*Khung/i.test(p.style || "") && p.firstLineIndent !== 0) p.firstLineIndent = 0;
                      });
                      _context27.n = 2;
                      return ctx.sync();
                    case 2:
                      return _context27.a(2);
                  }
                }, _callee26);
              }));
              return function (_x14) {
                return _ref16.apply(this, arguments);
              };
            }());
          case 1:
            _context28.n = 3;
            break;
          case 2:
            _context28.p = 2;
            _t13 = _context28.v;
          case 3:
            return _context28.a(2);
        }
      }, _callee27, null, [[0, 2]]);
    }));
    return _boLuiKhung.apply(this, arguments);
  }
  function chenKhoiDau() {
    return _chenKhoiDau.apply(this, arguments);
  }
  function _chenKhoiDau() {
    _chenKhoiDau = _asyncToGenerator(_regenerator().m(function _callee29() {
      var o, ngay, laCv, xml;
      return _regenerator().w(function (_context30) {
        while (1) switch (_context30.n) {
          case 0:
            _context30.n = 1;
            return canGiayPhep();
          case 1:
            if (_context30.v) {
              _context30.n = 2;
              break;
            }
            return _context30.a(2);
          case 2:
            o = docForm();
            ngay = o.deTrongNgay || !o.ngay ? null : new Date(o.ngay + "T00:00:00");
            laCv = o.loai === "CV";
            xml = ND30Khoi.dauVanBan({
              chuQuan: o.chuQuan,
              coQuan: o.coQuan,
              soKyHieu: o.soKyHieu.trim() ? o.soKyHieu : null,
              veViec: laCv ? o.veViec : null,
              diaDanh: o.diaDanh,
              ngay: ngay,
              tenLoai: laCv ? null : TEN_LOAI[o.loai],
              trichYeu: laCv ? null : o.trichYeu
            });
            _context30.n = 3;
            return chay("nut-khoi-dau", _asyncToGenerator(_regenerator().m(function _callee28() {
              var _t14;
              return _regenerator().w(function (_context29) {
                while (1) switch (_context29.p = _context29.n) {
                  case 0:
                    _context29.p = 0;
                    _context29.n = 1;
                    return chenOoxml(xml, document.querySelector('[name="vt-dau"]:checked').value);
                  case 1:
                    bao("kq-khoi", "dat", "Đã chèn khối đầu văn bản.");
                    _context29.n = 3;
                    break;
                  case 2:
                    _context29.p = 2;
                    _t14 = _context29.v;
                    bao("kq-khoi", "loi", "Không chèn được: " + ESC(_t14.message));
                  case 3:
                    return _context29.a(2);
                }
              }, _callee28, null, [[0, 2]]);
            })));
          case 3:
            return _context30.a(2);
        }
      }, _callee29);
    }));
    return _chenKhoiDau.apply(this, arguments);
  }
  function chenKhoiKy() {
    return _chenKhoiKy.apply(this, arguments);
  }
  function _chenKhoiKy() {
    _chenKhoiKy = _asyncToGenerator(_regenerator().m(function _callee31() {
      var o, xml;
      return _regenerator().w(function (_context32) {
        while (1) switch (_context32.n) {
          case 0:
            _context32.n = 1;
            return canGiayPhep();
          case 1:
            if (_context32.v) {
              _context32.n = 2;
              break;
            }
            return _context32.a(2);
          case 2:
            o = docForm();
            xml = ND30Khoi.khoiKy({
              noiNhan: o.noiNhan.split(/\r?\n/),
              thamQuyen: o.thamQuyen,
              chucVu: o.chucVu,
              hoTen: o.hoTen
            });
            _context32.n = 3;
            return chay("nut-khoi-ky", _asyncToGenerator(_regenerator().m(function _callee30() {
              var _t15;
              return _regenerator().w(function (_context31) {
                while (1) switch (_context31.p = _context31.n) {
                  case 0:
                    _context31.p = 0;
                    _context31.n = 1;
                    return chenOoxml(xml, document.querySelector('[name="vt-ky"]:checked').value);
                  case 1:
                    bao("kq-khoi", "dat", "Đã chèn khối nơi nhận, chữ ký.");
                    _context31.n = 3;
                    break;
                  case 2:
                    _context31.p = 2;
                    _t15 = _context31.v;
                    bao("kq-khoi", "loi", "Không chèn được: " + ESC(_t15.message));
                  case 3:
                    return _context31.a(2);
                }
              }, _callee30, null, [[0, 2]]);
            })));
          case 3:
            return _context32.a(2);
        }
      }, _callee31);
    }));
    return _chenKhoiKy.apply(this, arguments);
  }
  function doiThe(ten) {
    document.querySelectorAll("nav.the button").forEach(function (b) {
      b.classList[b.dataset.the === ten ? "add" : "remove"]("dang-chon");
    });
    document.querySelectorAll(".noi-the").forEach(function (d) {
      d.hidden = d.id !== "the-" + ten;
    });
  }
  function ganSuKien() {
    document.querySelectorAll("nav.the button").forEach(function (b) {
      b.onclick = function () {
        return doiThe(b.dataset.the);
      };
    });
    $("nut-kich-hoat").onclick = bamKichHoat;
    $("o-ma").addEventListener("keydown", function (e) {
      if (e.key === "Enter") bamKichHoat();
    });
    $("nut-chep-may").onclick = function () {
      navigator.clipboard && navigator.clipboard.writeText(ND30GiayPhep.maMay());
    };
    $("nut-quay-lai").onclick = function () {
      return moManChinh();
    };
    $("nut-doi-ma").onclick = function () {
      return moKichHoat("Nhập mã mới. Giấy phép hiện tại sẽ được thay khi kích hoạt thành công.", true);
    };
    $("nut-soat").onclick = soat;
    $("nut-doc-vb").onclick = docVB;
    $("nut-dung").onclick = dungVB;
    $("nut-luu-ho-so").onclick = function () {
      luuHoSo();
      bao("kq-dung", "dat", "Đã lưu hồ sơ cơ quan.");
    };
    document.querySelector('[data-d="loai"]').onchange = doiLoaiDung;
    $("nut-sua").onclick = suaNhanh;
    $("nut-khoi-dau").onclick = chenKhoiDau;
    $("nut-khoi-ky").onclick = chenKhoiKy;
    document.querySelector('[data-k="loai"]').onchange = doiLoai;
    $("nut-nang-cap").onclick = function () {
      return chuyenBan(banTin.moi_nhat);
    };
    $("nut-de-sau").onclick = function () {
      sessionStorage.setItem("nd30_de_sau", banTin.moi_nhat);
      $("bang-nang-cap").hidden = true;
    };
    $("nut-kiem-cap-nhat").onclick = _asyncToGenerator(_regenerator().m(function _callee3() {
      var co;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.n = 1;
            return kiemNangCap(true);
          case 1:
            co = _context3.v;
            if (!co) bao("kq-soat", "dat", banTin ? "\u0110ang d\xF9ng b\u1EA3n m\u1EDBi nh\u1EA5t (".concat(ESC(CH.phien_ban), ").") : "Không kiểm tra được, máy đang mất mạng.");
          case 2:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    document.body.addEventListener("click", function (e) {
      var v = e.target.closest("[data-tim]");
      if (v) {
        timDen(v.dataset.tim).catch(function () {});
        return;
      }
      var k = e.target.closest("[data-khuon]");
      if (k) {
        taoTuKhuon(+k.dataset.khuon, k);
        return;
      }
      var b = e.target.closest("[data-ban]");
      if (b) chuyenBan(b.dataset.ban);
    });
  }
  Office.onReady(function (info) {
    localStorage.setItem(LS_PB, CH.phien_ban);
    $("dong-phien-ban").textContent = "Phiên bản " + CH.phien_ban;
    ganSuKien();
    veKhuon();
    napForm();
    napHoSo();
    if (info.host !== Office.HostType.Word) {
      $("dang-tai").textContent = "Add-in này chỉ chạy trong Microsoft Word.";
      return;
    }
    kiemNangCap(false);
    kiemGiayPhep().catch(function (e) {
      $("dang-tai").textContent = "Lỗi khởi động: " + e.message;
    });
  });
})();