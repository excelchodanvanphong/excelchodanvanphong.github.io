/* Vẽ các mục từ du-lieu.js, bai-hoc.js. Không thư viện ngoài.
   Từ 11/11/2026: bài học và công thức hiện dạng danh sách tên, bấm thì xổ nội dung tại chỗ, 10 mục/trang, mới nhất trên cùng.
   Trong trình duyệt TikTok (bấm link nào cũng bị chặn) trang không sinh link nào: không link video, tải file, sách. */
(function () {
  const TIKTOK = /musical_ly|BytedanceWebview|TikTok|trill/i.test(navigator.userAgent);
  const MOI_TRANG = 10;
  const $ = (s, g = document) => g.querySelector(s);
  const el = (tag, attrs = {}, ...con) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === "class") e.className = v; else if (k.startsWith("on")) e.addEventListener(k.slice(2), v); else e.setAttribute(k, v);
    }
    con.flat().forEach((c) => c != null && e.append(c.nodeType ? c : document.createTextNode(c)));
    return e;
  };
  const toast = (msg) => {
    let t = $(".toast"); if (!t) { t = el("div", { class: "toast", role: "status" }); document.body.append(t); }
    t.textContent = msg; t.classList.add("hien"); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("hien"), 1600);
  };
  async function chep(text) {
    try { await navigator.clipboard.writeText(text); }
    catch (e) { const a = el("textarea", { style: "position:fixed;opacity:0" }); a.value = text; document.body.append(a); a.select(); document.execCommand("copy"); a.remove(); }
    toast("Đã copy, dán vô Excel/Word là chạy");
  }
  const tenNhom = (ma) => (window.NHOM.find((n) => n.ma === ma) || {}).ten || "";
  const boDau = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();
  const ngayVN = (s) => s ? s.split("-").reverse().join("/") : "";
  const khoiChep = (text, nhan) => el("div", { class: "khoi-lenh" }, el("pre", {}, text),
    el("button", { class: "nut-copy", type: "button", "aria-label": "Copy " + nhan, onclick: () => chep(text) }, "Copy"));

  const baiHoc = window.BAI_HOC || [];
  const videoCua = (ma) => (baiHoc.find((b) => b.ma === ma) || {}).video;

  /* Chân mục: link video, tải file chỉ khi không ở trong TikTok */
  function chanMuc(vid, tep, sapCo) {
    if (TIKTOK) {
      return (vid || tep) ? el("p", { class: "ghi-chu nhac-tiktok" }, "Xem video, tải file mẫu: bấm ⋯ góc trên → Mở trong trình duyệt.") : null;
    }
    return el("div", { class: "chan-the" },
      vid ? el("a", { href: window.KENH.video(vid), target: "_blank", rel: "noopener" }, "▶ Xem video") : (sapCo ? el("span", { class: "sap" }, "▶ Video sắp đăng") : null),
      tep ? el("a", { href: "tep/" + tep, download: "" }, "⬇ Tải file mẫu") : null);
  }

  /* Danh sách xổ ra + phân trang dùng chung */
  function danhSach(hop, ds, veMuc, rong) {
    let trang = 1;
    const ve = () => {
      const so = Math.max(1, Math.ceil(ds.length / MOI_TRANG));
      if (trang > so) trang = so;
      const phan = ds.slice((trang - 1) * MOI_TRANG, trang * MOI_TRANG);
      const nut = [];
      if (so > 1) for (let i = 1; i <= so; i++) {
        nut.push(el("button", { class: "trang-so", type: "button", "aria-current": i === trang ? "page" : null, "aria-label": "Trang " + i,
          onclick: () => { trang = i; ve(); hop.scrollIntoView({ block: "start" }); } }, String(i)));
      }
      hop.replaceChildren(
        ds.length ? el("div", { class: "ds-xo" }, phan.map(veMuc)) : el("p", { class: "rong" }, rong),
        nut.length ? el("nav", { class: "phan-trang", "aria-label": "Phân trang" }, nut) : null);
    };
    ve();
    return { datLai: (moi) => { ds = moi; trang = 1; ve(); } };
  }
  const muc = (ngay, ten, ...noiDung) => el("details", { class: "muc-xo" },
    el("summary", {}, ngay ? el("span", { class: "ngay" }, ngay) : null, el("span", { class: "ten" }, ten)),
    el("div", { class: "than-xo" }, noiDung));

  /* Bài học mỗi ngày */
  function veBaiHoc() {
    const hop = $("#ds-bai"); if (!hop) return;
    const ds = [...baiHoc].sort((a, b) => (b.ngay || "").localeCompare(a.ngay || "") || Number(b.ma) - Number(a.ma));
    danhSach(hop, ds, (b) => muc(ngayVN(b.ngay), b.ten,
      el("p", { class: "dan-xo" }, b.tom_tat),
      b.loi && b.loi.length ? [el("h4", {}, "Nội dung video"), el("ol", { class: "loi-video" }, b.loi.map((x) => el("li", {}, x)))] : null,
      b.ghim ? [el("h4", {}, "Căn cứ, công thức"), khoiChep(b.ghim, b.ten)] : null,
      chanMuc(b.video, b.tep)), "Chưa có bài học.");
  }

  /* Kho công thức */
  function veKho() {
    const hop = $("#ds-lenh"); if (!hop) return;
    const loc = $("#loc-lenh"), tim = $("#tim-lenh");
    let nhom = "tat-ca";
    const tatCa = [...window.LENH].sort((a, b) => Number(b.ma) - Number(a.ma));
    const loc1 = () => {
      const q = boDau(tim.value.trim());
      return tatCa.filter((l) => (nhom === "tat-ca" || l.nhom === nhom) && (!q || boDau([l.ten, l.loi, l.lenh, l.ghi_chu].join(" ")).includes(q)));
    };
    const ds = danhSach(hop, loc1(), (l) => muc(tenNhom(l.nhom), l.ten,
      el("div", { class: "loi-cu" }, l.loi),
      khoiChep(l.lenh, l.ten),
      el("p", { class: "ghi-chu" }, l.ghi_chu),
      chanMuc(l.video || videoCua(l.ma), l.tep, l.sap_co)), "Chưa có mẹo khớp từ này. Anh em bình luận dưới video để kênh làm nha.");
    [{ ma: "tat-ca", ten: "Tất cả" }, ...window.NHOM].forEach((n) => {
      loc.append(el("button", { class: "chip", type: "button", "aria-pressed": String(n.ma === nhom), onclick: (e) => {
        nhom = n.ma; loc.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", "false")); e.currentTarget.setAttribute("aria-pressed", "true"); ds.datLai(loc1());
      } }, n.ten));
    });
    tim.addEventListener("input", () => ds.datLai(loc1()));
  }

  /* Bảng thể thức */
  function veTheThuc() {
    const tb = $("#bang-the-thuc tbody"); if (!tb) return;
    window.THE_THUC.forEach((r) => tb.append(el("tr", {}, el("td", {}, r.sai), el("td", {}, r.dung), el("td", {}, r.can_cu))));
  }

  /* Sách: trong TikTok không hiện link, chỉ nhắc xem ở link hồ sơ */
  function theSach(s) {
    const loai = (window.LOAI_SACH.find((x) => x.ma === s.loai) || {}).ten;
    return el("article", { class: "the" },
      el("div", { class: "bia " + s.loai, "aria-hidden": "true" }, s.noi_bat ? el("div", { class: "noi-bat" }, "Bán chạy") : null, el("span", {}, loai),
        el("b", {}, { "moi-hoc": "X", meo: "fx", word: "W", ai: "AI", combo: "X+W" }[s.loai] || "X")),
      el("h3", {}, s.ten),
      el("p", { class: "tac-gia" }, s.tac_gia),
      el("p", { class: "dong-tt" }, el("b", {}, "Hợp với: "), s.hop_voi),
      el("p", { class: "dong-tt" }, el("b", {}, "Vì sao gợi ý: "), s.ly_do),
      el("div", { class: "gia" }, el("small", {}, `★ ${s.sao} · ${s.da_ban} đã bán · xem giá trên trang sản phẩm`)),
      el("div", { class: "chan-the" }, el("a", { class: "nut chinh", href: s.tiep_thi, target: "_blank", rel: "noopener sponsored" }, "Xem sản phẩm ↗")));
  }
  const MAU_TIEP_THI = {
    "shopee-affiliate": /^https:\/\/s\.shopee\.vn\/[A-Za-z0-9]+$/,
    "tiktok-shop-affiliate": /^https:\/\/(vt|vm)\.tiktok\.com\/[A-Za-z0-9_-]+\/?$/,
    "lazada-affiliate": /^https:\/\/s\.lazada\.vn\/s\.[A-Za-z0-9]+$/,
    "accesstrade": /^https:\/\/(go\.isclix\.com|shorten\.asia)\//,
  };
  const coTiepThi = (s) => !!(s.tiep_thi && MAU_TIEP_THI[s.nguon_tiep_thi] && MAU_TIEP_THI[s.nguon_tiep_thi].test(s.tiep_thi));
  function veSach() {
    const luoi = $("#luoi-sach"); if (!luoi) return;
    if (TIKTOK) {
      luoi.replaceChildren(el("p", { class: "rong" }, "Sách học thêm có trong link hồ sơ TikTok của kênh, mục ngay dưới \"Kho công thức, file Excel, Word mẫu\"."));
      return;
    }
    const gioiHan = Number(luoi.dataset.gioiHan || 0);
    const loc = $("#loc-sach");
    let loai = "tat-ca";
    const ve = () => {
      let ds = window.SACH.filter((s) => coTiepThi(s) && (loai === "tat-ca" || s.loai === loai));
      if (gioiHan) ds = ds.slice(0, gioiHan);
      luoi.replaceChildren(...(ds.length ? ds.map(theSach) : [el("p", { class: "rong" }, "Kênh đang chọn sách để gợi ý, anh em quay lại sau nha.")]));
    };
    if (loc) [{ ma: "tat-ca", ten: "Tất cả" }, ...window.LOAI_SACH].forEach((n) => {
      loc.append(el("button", { class: "chip", type: "button", "aria-pressed": String(n.ma === loai), onclick: (e) => {
        loai = n.ma; loc.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", "false")); e.currentTarget.setAttribute("aria-pressed", "true"); ve();
      } }, n.ten));
    });
    ve();
  }

  /* Nút lên đầu */
  const len = el("button", { class: "len-dau", type: "button", "aria-label": "Lên đầu trang", onclick: () => scrollTo({ top: 0 }) }, "↑");
  document.body.append(len);
  addEventListener("scroll", () => len.classList.toggle("hien", scrollY > 600), { passive: true });

  veBaiHoc(); veKho(); veTheThuc(); veSach();
  const nam = $("#nam"); if (nam) nam.textContent = new Date().getFullYear();
})();
