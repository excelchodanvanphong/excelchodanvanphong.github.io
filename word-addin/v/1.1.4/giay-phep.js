/* Giấy phép: kích hoạt mã một lần, gắn với một máy, kiểm chữ ký số RSA của máy chủ.
   Máy chủ (Google Apps Script) ký gói { ma, loai, may, kich_hoat, han } bằng khoá riêng;
   add-in chỉ giữ khoá công khai nên không tự làm giả được giấy phép.
   ND30GiayPhep.trangThai() -> Promise<{ hop_le, loai, han, con_ngay, ly_do, ma }> */
(function (goc) {
  "use strict";
  const LS_GP = "nd30_giay_phep", LS_MAY = "nd30_ma_may", LS_MOC = "nd30_moc_gio", LS_KIEM = "nd30_lan_kiem";
  const MOT_NGAY = 86400000;
  const cauHinh = () => goc.ND30_CAU_HINH || {};
  const cr = () => goc.crypto || goc.msCrypto;
  const coSubtle = () => !!(goc.crypto && goc.crypto.subtle && goc.crypto.subtle.importKey);
  const kho = () => goc.localStorage;

  function maMay() {
    let m = kho().getItem(LS_MAY);
    if (!m) {
      const b = new Uint8Array(8);
      cr().getRandomValues(b);
      const h = Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("").toUpperCase();
      m = `M-${h.slice(0, 4)}-${h.slice(4, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}`;
      kho().setItem(LS_MAY, m);
    }
    return m;
  }

  const tuB64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  let khoaCache = null;
  async function khoa() {
    if (!khoaCache) {
      khoaCache = await crypto.subtle.importKey("spki", tuB64(cauHinh().khoa_cong_khai), { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
    }
    return khoaCache;
  }
  /* gp = { du_lieu: base64(JSON), chu_ky: base64 } -> gói đã kiểm hoặc null */
  async function moGoi(gp) {
    if (!gp || !gp.du_lieu || !gp.chu_ky) return null;
    try {
      if (!coSubtle()) {   // Word 2016, 2019: kiểm bằng rsa-cu.js
        if (!goc.ND30RSA.verify(cauHinh().khoa_cong_khai, tuB64(gp.chu_ky), new TextEncoder().encode(gp.du_lieu))) return null;
        return JSON.parse(new TextDecoder().decode(tuB64(gp.du_lieu)));
      }
      const dung = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", await khoa(), tuB64(gp.chu_ky), new TextEncoder().encode(gp.du_lieu));
      if (!dung) return null;
      return JSON.parse(new TextDecoder().decode(tuB64(gp.du_lieu)));
    } catch (e) { return null; }
  }

  function chuanMa(ma) {
    const s = String(ma || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (!/^(DT|VV)[A-Z0-9]{12}$/.test(s)) return null;
    return `${s.slice(0, 2)}-${s.slice(2, 6)}-${s.slice(6, 10)}-${s.slice(10, 14)}`;
  }

  /* Internet Explorer không theo bước chuyển hướng của Apps Script khi gọi chéo miền,
     nên bản cho Word 2016, 2019 gọi bằng thẻ script (JSONP). */
  function jsonp(url, du) {
    return new Promise((xong, loi) => {
      const ten = "nd30cb" + Date.now() + Math.floor(Math.random() * 1e6);
      const s = document.createElement("script");
      let het = null;
      const don = () => { clearTimeout(het); try { delete goc[ten]; } catch (e) { goc[ten] = undefined; } if (s.parentNode) s.parentNode.removeChild(s); };
      het = setTimeout(() => { don(); loi(new Error("HET_GIO")); }, 20000);
      goc[ten] = (kq) => { don(); xong(kq); };
      const q = Object.keys(du).map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(du[k] == null ? "" : du[k]));
      q.push("cb=" + ten);
      s.src = url + (url.indexOf("?") < 0 ? "?" : "&") + q.join("&");
      s.onerror = () => { don(); loi(new Error("MANG")); };
      (document.head || document.getElementsByTagName("head")[0]).appendChild(s);
    });
  }

  async function goiMayChu(hanhDong, du) {
    const url = cauHinh().may_chu;
    if (!url) throw new Error("CHUA_CAU_HINH_MAY_CHU");
    if (cauHinh().jsonp || typeof fetch !== "function") {
      return await jsonp(url, Object.assign({ hanh_dong: hanhDong, may: maMay(), phien_ban: cauHinh().phien_ban }, du));
    }
    const tl = await fetch(url, {   // text/plain để không phát sinh yêu cầu preflight CORS
      method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(Object.assign({ hanh_dong: hanhDong, may: maMay(), phien_ban: cauHinh().phien_ban }, du)),
    });
    if (!tl.ok) throw new Error("MAY_CHU_" + tl.status);
    return await tl.json();
  }

  function ghiMoc(t) {
    const cu = +kho().getItem(LS_MOC) || 0;
    if (t > cu) kho().setItem(LS_MOC, String(t));
  }

  const LOI = {
    "ma-sai-dinh-dang": "Mã không đúng dạng. Mã có dạng DT-XXXX-XXXX-XXXX hoặc VV-XXXX-XXXX-XXXX.",
    "ma-khong-ton-tai": "Mã không có trong hệ thống. Kiểm tra lại từng ký tự.",
    "ma-da-dung": "Mã này đã được kích hoạt trên một máy khác. Mỗi mã chỉ dùng một lần.",
    "ma-da-thu-hoi": "Mã này đã bị thu hồi.",
    "may-da-dung-thu": "Máy này đã dùng thử một lần. Nhập mã vĩnh viễn để dùng tiếp.",
    "qua-nhieu-yeu-cau": "Nhập sai quá nhiều lần. Đợi khoảng 10 phút rồi thử lại.",
    "chua-cai-khoa": "Máy chủ chưa sẵn sàng. Báo cho người bán mã.",
    "khong-hop-le": "Giấy phép không còn hợp lệ trên máy này.",
  };

  async function kichHoat(maNhap) {
    const ma = chuanMa(maNhap);
    if (!ma) return { ok: false, thong_bao: LOI["ma-sai-dinh-dang"] };
    let kq;
    try { kq = await goiMayChu("kich_hoat", { ma }); }
    catch (e) { return { ok: false, thong_bao: "Không kết nối được máy chủ kích hoạt. Kiểm tra mạng rồi thử lại." }; }
    if (!kq.ok) return { ok: false, thong_bao: LOI[kq.loi] || "Kích hoạt không thành công (" + (kq.loi || "không rõ") + ")." };
    const goi = await moGoi(kq.giay_phep);
    if (!goi || goi.may !== maMay() || goi.ma !== ma) return { ok: false, thong_bao: "Giấy phép nhận về không hợp lệ." };
    kho().setItem(LS_GP, JSON.stringify(kq.giay_phep));
    kho().setItem(LS_KIEM, String(Date.now()));
    if (kq.bay_gio) kho().setItem(LS_MOC, String(Date.parse(kq.bay_gio)));   // giờ máy chủ là chuẩn
    return { ok: true };
  }

  /* Kiểm lại với máy chủ tối đa mỗi ngày một lần; mất mạng thì bỏ qua, không khoá người dùng. */
  async function kiemDinhKy(epBuoc) {
    const gpChu = kho().getItem(LS_GP);
    if (!gpChu) return;
    const lan = +kho().getItem(LS_KIEM) || 0;
    if (!epBuoc && Date.now() - lan < MOT_NGAY) return;
    const goi = await moGoi(JSON.parse(gpChu));
    if (!goi) return;
    let kq;
    try { kq = await goiMayChu("kiem_tra", { ma: goi.ma }); } catch (e) { return; }
    kho().setItem(LS_KIEM, String(Date.now()));
    if (kq.bay_gio) kho().setItem(LS_MOC, String(Date.parse(kq.bay_gio)));   // giờ máy chủ là chuẩn
    if (!kq.ok && kq.thu_hoi) { kho().removeItem(LS_GP); return; }
    if (kq.ok && kq.giay_phep && (await moGoi(kq.giay_phep))) kho().setItem(LS_GP, JSON.stringify(kq.giay_phep));
  }

  async function trangThai() {
    const gpChu = kho().getItem(LS_GP);
    if (!gpChu) return { hop_le: false, ly_do: "chua-kich-hoat" };
    let gp;
    try { gp = JSON.parse(gpChu); } catch (e) { return { hop_le: false, ly_do: "chua-kich-hoat" }; }
    const goi = await moGoi(gp);
    if (!goi || goi.sp !== "nd30-word") return { hop_le: false, ly_do: "gia-mao" };
    if (goi.may !== maMay()) return { hop_le: false, ly_do: "khac-may" };
    const tt = { ma: goi.ma, loai: goi.loai, han: goi.han || null };
    if (goi.loai === "vinh-vien") return Object.assign(tt, { hop_le: true });
    // Dùng thử: chặn quay lùi đồng hồ máy để kéo dài hạn
    const moc = +kho().getItem(LS_MOC) || 0, bayGio = Date.now();
    if (bayGio < moc - 3600000) return Object.assign(tt, { hop_le: false, ly_do: "dong-ho" });
    ghiMoc(bayGio);
    const han = Date.parse(goi.han);
    if (!(bayGio < han)) return Object.assign(tt, { hop_le: false, ly_do: "het-han" });
    return Object.assign(tt, { hop_le: true, con_ngay: Math.ceil((han - bayGio) / MOT_NGAY) });
  }

  function xoa() { kho().removeItem(LS_GP); }

  goc.ND30GiayPhep = { maMay, chuanMa, kichHoat, kiemDinhKy, trangThai, xoa, moGoi };
})(typeof window !== "undefined" ? window : globalThis);
