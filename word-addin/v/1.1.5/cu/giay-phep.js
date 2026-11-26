function _regenerator() { var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? (c > 1 && (G.n = c < 3 ? -1 : u), d(c, u)) : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
(function (goc) {
  "use strict";

  var LS_GP = "nd30_giay_phep",
    LS_MAY = "nd30_ma_may",
    LS_MOC = "nd30_moc_gio",
    LS_KIEM = "nd30_lan_kiem";
  var MOT_NGAY = 86400000;
  var cauHinh = function cauHinh() {
    return goc.ND30_CAU_HINH || {};
  };
  var cr = function cr() {
    return goc.crypto || goc.msCrypto;
  };
  var coSubtle = function coSubtle() {
    return !!(goc.crypto && goc.crypto.subtle && goc.crypto.subtle.importKey);
  };
  var kho = function kho() {
    return goc.localStorage;
  };
  function maMay() {
    var m = kho().getItem(LS_MAY);
    if (!m) {
      var b = new Uint8Array(8);
      cr().getRandomValues(b);
      var h = Array.from(b, function (x) {
        return x.toString(16).padStart(2, "0");
      }).join("").toUpperCase();
      m = "M-".concat(h.slice(0, 4), "-").concat(h.slice(4, 8), "-").concat(h.slice(8, 12), "-").concat(h.slice(12, 16));
      kho().setItem(LS_MAY, m);
    }
    return m;
  }
  var tuB64 = function tuB64(s) {
    return Uint8Array.from(atob(s), function (c) {
      return c.charCodeAt(0);
    });
  };
  var khoaCache = null;
  function khoa() {
    return _khoa.apply(this, arguments);
  }
  function _khoa() {
    _khoa = _asyncToGenerator(_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (khoaCache) {
              _context.n = 2;
              break;
            }
            _context.n = 1;
            return crypto.subtle.importKey("spki", tuB64(cauHinh().khoa_cong_khai), {
              name: "RSASSA-PKCS1-v1_5",
              hash: "SHA-256"
            }, false, ["verify"]);
          case 1:
            khoaCache = _context.v;
          case 2:
            return _context.a(2, khoaCache);
        }
      }, _callee);
    }));
    return _khoa.apply(this, arguments);
  }
  function moGoi(_x) {
    return _moGoi.apply(this, arguments);
  }
  function _moGoi() {
    _moGoi = _asyncToGenerator(_regenerator().m(function _callee2(gp) {
      var dung, _t, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!(!gp || !gp.du_lieu || !gp.chu_ky)) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2, null);
          case 1:
            _context2.p = 1;
            if (coSubtle()) {
              _context2.n = 3;
              break;
            }
            if (goc.ND30RSA.verify(cauHinh().khoa_cong_khai, tuB64(gp.chu_ky), new TextEncoder().encode(gp.du_lieu))) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2, null);
          case 2:
            return _context2.a(2, JSON.parse(new TextDecoder().decode(tuB64(gp.du_lieu))));
          case 3:
            _t = crypto.subtle;
            _context2.n = 4;
            return khoa();
          case 4:
            _context2.n = 5;
            return _t.verify.call(_t, "RSASSA-PKCS1-v1_5", _context2.v, tuB64(gp.chu_ky), new TextEncoder().encode(gp.du_lieu));
          case 5:
            dung = _context2.v;
            if (dung) {
              _context2.n = 6;
              break;
            }
            return _context2.a(2, null);
          case 6:
            return _context2.a(2, JSON.parse(new TextDecoder().decode(tuB64(gp.du_lieu))));
          case 7:
            _context2.p = 7;
            _t2 = _context2.v;
            return _context2.a(2, null);
        }
      }, _callee2, null, [[1, 7]]);
    }));
    return _moGoi.apply(this, arguments);
  }
  function chuanMa(ma) {
    var s = String(ma || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (!/^(DT|VV)[A-Z0-9]{12}$/.test(s)) return null;
    return "".concat(s.slice(0, 2), "-").concat(s.slice(2, 6), "-").concat(s.slice(6, 10), "-").concat(s.slice(10, 14));
  }
  function jsonp(url, du) {
    return new Promise(function (xong, loi) {
      var ten = "nd30cb" + Date.now() + Math.floor(Math.random() * 1e6);
      var s = document.createElement("script");
      var het = null;
      var don = function don() {
        clearTimeout(het);
        try {
          delete goc[ten];
        } catch (e) {
          goc[ten] = undefined;
        }
        if (s.parentNode) s.parentNode.removeChild(s);
      };
      het = setTimeout(function () {
        don();
        loi(new Error("HET_GIO"));
      }, 20000);
      goc[ten] = function (kq) {
        don();
        xong(kq);
      };
      var q = Object.keys(du).map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(du[k] == null ? "" : du[k]);
      });
      q.push("cb=" + ten);
      s.src = url + (url.indexOf("?") < 0 ? "?" : "&") + q.join("&");
      s.onerror = function () {
        don();
        loi(new Error("MANG"));
      };
      (document.head || document.getElementsByTagName("head")[0]).appendChild(s);
    });
  }
  function goiMayChu(_x2, _x3) {
    return _goiMayChu.apply(this, arguments);
  }
  function _goiMayChu() {
    _goiMayChu = _asyncToGenerator(_regenerator().m(function _callee3(hanhDong, du) {
      var url, tl;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            url = cauHinh().may_chu;
            if (url) {
              _context3.n = 1;
              break;
            }
            throw new Error("CHUA_CAU_HINH_MAY_CHU");
          case 1:
            if (!(cauHinh().jsonp || typeof fetch !== "function")) {
              _context3.n = 3;
              break;
            }
            _context3.n = 2;
            return jsonp(url, Object.assign({
              hanh_dong: hanhDong,
              may: maMay(),
              phien_ban: cauHinh().phien_ban
            }, du));
          case 2:
            return _context3.a(2, _context3.v);
          case 3:
            _context3.n = 4;
            return fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "text/plain;charset=utf-8"
              },
              body: JSON.stringify(Object.assign({
                hanh_dong: hanhDong,
                may: maMay(),
                phien_ban: cauHinh().phien_ban
              }, du))
            });
          case 4:
            tl = _context3.v;
            if (tl.ok) {
              _context3.n = 5;
              break;
            }
            throw new Error("MAY_CHU_" + tl.status);
          case 5:
            _context3.n = 6;
            return tl.json();
          case 6:
            return _context3.a(2, _context3.v);
        }
      }, _callee3);
    }));
    return _goiMayChu.apply(this, arguments);
  }
  function ghiMoc(t) {
    var cu = +kho().getItem(LS_MOC) || 0;
    if (t > cu) kho().setItem(LS_MOC, String(t));
  }
  var LOI = {
    "ma-sai-dinh-dang": "Mã không đúng dạng. Mã có dạng DT-XXXX-XXXX-XXXX hoặc VV-XXXX-XXXX-XXXX.",
    "ma-khong-ton-tai": "Mã không có trong hệ thống. Kiểm tra lại từng ký tự.",
    "ma-da-dung": "Mã này đã được kích hoạt trên một máy khác. Mỗi mã chỉ dùng một lần.",
    "ma-da-thu-hoi": "Mã này đã bị thu hồi.",
    "may-da-dung-thu": "Máy này đã dùng thử một lần. Nhập mã vĩnh viễn để dùng tiếp.",
    "qua-nhieu-yeu-cau": "Nhập sai quá nhiều lần. Đợi khoảng 10 phút rồi thử lại.",
    "chua-cai-khoa": "Máy chủ chưa sẵn sàng. Báo cho người bán mã.",
    "khong-hop-le": "Giấy phép không còn hợp lệ trên máy này."
  };
  function kichHoat(_x4) {
    return _kichHoat.apply(this, arguments);
  }
  function _kichHoat() {
    _kichHoat = _asyncToGenerator(_regenerator().m(function _callee4(maNhap) {
      var ma, kq, goi, _t3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            ma = chuanMa(maNhap);
            if (ma) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2, {
              ok: false,
              thong_bao: LOI["ma-sai-dinh-dang"]
            });
          case 1:
            _context4.p = 1;
            _context4.n = 2;
            return goiMayChu("kich_hoat", {
              ma: ma
            });
          case 2:
            kq = _context4.v;
            _context4.n = 4;
            break;
          case 3:
            _context4.p = 3;
            _t3 = _context4.v;
            return _context4.a(2, {
              ok: false,
              thong_bao: "Không kết nối được máy chủ kích hoạt. Kiểm tra mạng rồi thử lại."
            });
          case 4:
            if (kq.ok) {
              _context4.n = 5;
              break;
            }
            return _context4.a(2, {
              ok: false,
              thong_bao: LOI[kq.loi] || "Kích hoạt không thành công (" + (kq.loi || "không rõ") + ")."
            });
          case 5:
            _context4.n = 6;
            return moGoi(kq.giay_phep);
          case 6:
            goi = _context4.v;
            if (!(!goi || goi.may !== maMay() || goi.ma !== ma)) {
              _context4.n = 7;
              break;
            }
            return _context4.a(2, {
              ok: false,
              thong_bao: "Giấy phép nhận về không hợp lệ."
            });
          case 7:
            kho().setItem(LS_GP, JSON.stringify(kq.giay_phep));
            kho().setItem(LS_KIEM, String(Date.now()));
            if (kq.bay_gio) kho().setItem(LS_MOC, String(Date.parse(kq.bay_gio)));
            return _context4.a(2, {
              ok: true
            });
        }
      }, _callee4, null, [[1, 3]]);
    }));
    return _kichHoat.apply(this, arguments);
  }
  function kiemDinhKy(_x5) {
    return _kiemDinhKy.apply(this, arguments);
  }
  function _kiemDinhKy() {
    _kiemDinhKy = _asyncToGenerator(_regenerator().m(function _callee5(epBuoc) {
      var gpChu, lan, goi, kq, _t4, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            gpChu = kho().getItem(LS_GP);
            if (gpChu) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2);
          case 1:
            lan = +kho().getItem(LS_KIEM) || 0;
            if (!(!epBuoc && Date.now() - lan < MOT_NGAY)) {
              _context5.n = 2;
              break;
            }
            return _context5.a(2);
          case 2:
            _context5.n = 3;
            return moGoi(JSON.parse(gpChu));
          case 3:
            goi = _context5.v;
            if (goi) {
              _context5.n = 4;
              break;
            }
            return _context5.a(2);
          case 4:
            _context5.p = 4;
            _context5.n = 5;
            return goiMayChu("kiem_tra", {
              ma: goi.ma
            });
          case 5:
            kq = _context5.v;
            _context5.n = 7;
            break;
          case 6:
            _context5.p = 6;
            _t4 = _context5.v;
            return _context5.a(2);
          case 7:
            kho().setItem(LS_KIEM, String(Date.now()));
            if (kq.bay_gio) kho().setItem(LS_MOC, String(Date.parse(kq.bay_gio)));
            if (!(!kq.ok && kq.thu_hoi)) {
              _context5.n = 8;
              break;
            }
            kho().removeItem(LS_GP);
            return _context5.a(2);
          case 8:
            _t5 = kq.ok && kq.giay_phep;
            if (!_t5) {
              _context5.n = 10;
              break;
            }
            _context5.n = 9;
            return moGoi(kq.giay_phep);
          case 9:
            _t5 = _context5.v;
          case 10:
            if (!_t5) {
              _context5.n = 11;
              break;
            }
            kho().setItem(LS_GP, JSON.stringify(kq.giay_phep));
          case 11:
            return _context5.a(2);
        }
      }, _callee5, null, [[4, 6]]);
    }));
    return _kiemDinhKy.apply(this, arguments);
  }
  function trangThai() {
    return _trangThai.apply(this, arguments);
  }
  function _trangThai() {
    _trangThai = _asyncToGenerator(_regenerator().m(function _callee6() {
      var gpChu, gp, goi, tt, moc, bayGio, han, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            gpChu = kho().getItem(LS_GP);
            if (gpChu) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2, {
              hop_le: false,
              ly_do: "chua-kich-hoat"
            });
          case 1:
            _context6.p = 1;
            gp = JSON.parse(gpChu);
            _context6.n = 3;
            break;
          case 2:
            _context6.p = 2;
            _t6 = _context6.v;
            return _context6.a(2, {
              hop_le: false,
              ly_do: "chua-kich-hoat"
            });
          case 3:
            _context6.n = 4;
            return moGoi(gp);
          case 4:
            goi = _context6.v;
            if (!(!goi || goi.sp !== "nd30-word")) {
              _context6.n = 5;
              break;
            }
            return _context6.a(2, {
              hop_le: false,
              ly_do: "gia-mao"
            });
          case 5:
            if (!(goi.may !== maMay())) {
              _context6.n = 6;
              break;
            }
            return _context6.a(2, {
              hop_le: false,
              ly_do: "khac-may"
            });
          case 6:
            tt = {
              ma: goi.ma,
              loai: goi.loai,
              han: goi.han || null
            };
            if (!(goi.loai === "vinh-vien")) {
              _context6.n = 7;
              break;
            }
            return _context6.a(2, Object.assign(tt, {
              hop_le: true
            }));
          case 7:
            moc = +kho().getItem(LS_MOC) || 0, bayGio = Date.now();
            if (!(bayGio < moc - 3600000)) {
              _context6.n = 8;
              break;
            }
            return _context6.a(2, Object.assign(tt, {
              hop_le: false,
              ly_do: "dong-ho"
            }));
          case 8:
            ghiMoc(bayGio);
            han = Date.parse(goi.han);
            if (bayGio < han) {
              _context6.n = 9;
              break;
            }
            return _context6.a(2, Object.assign(tt, {
              hop_le: false,
              ly_do: "het-han"
            }));
          case 9:
            return _context6.a(2, Object.assign(tt, {
              hop_le: true,
              con_ngay: Math.ceil((han - bayGio) / MOT_NGAY)
            }));
        }
      }, _callee6, null, [[1, 2]]);
    }));
    return _trangThai.apply(this, arguments);
  }
  function xoa() {
    kho().removeItem(LS_GP);
  }
  goc.ND30GiayPhep = {
    maMay: maMay,
    chuanMa: chuanMa,
    kichHoat: kichHoat,
    kiemDinhKy: kiemDinhKy,
    trangThai: trangThai,
    xoa: xoa,
    moGoi: moGoi
  };
})(typeof window !== "undefined" ? window : globalThis);