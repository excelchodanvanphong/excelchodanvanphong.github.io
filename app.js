/* Vẽ các mục từ du-lieu.js. Không thư viện ngoài. */
(function () {
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

  /* Kho công thức */
  function theLenh(l) {
    // công thức một dòng bắt đầu bằng "=" thì copy nguyên; còn lại copy cả khối hướng dẫn
    const lenhChep = l.lenh;
    return el("article", { class: "the" },
      el("div", { class: "nhom-nho" }, tenNhom(l.nhom)),
      el("h3", {}, l.ten),
      el("div", { class: "loi-cu" }, l.loi),
      el("div", { class: "khoi-lenh" }, el("pre", {}, l.lenh),
        el("button", { class: "nut-copy", type: "button", "aria-label": "Copy công thức " + l.ten, onclick: () => chep(lenhChep) }, "Copy")),
      el("p", { class: "ghi-chu" }, l.ghi_chu),
      el("div", { class: "chan-the" },
        l.video ? el("a", { href: window.KENH.video(l.video), target: "_blank", rel: "noopener" }, "▶ Xem video") : (l.sap_co ? el("span", { class: "sap" }, "▶ Video sắp đăng") : null),
        l.tep ? el("a", { href: "tep/" + l.tep, download: "" }, "⬇ Tải file thực hành") : null));
  }
  function veKho() {
    const luoi = $("#luoi-lenh"); if (!luoi) return;
    const loc = $("#loc-lenh"), tim = $("#tim-lenh");
    let nhom = "tat-ca";
    const ve = () => {
      const q = boDau(tim.value.trim());
      const ds = window.LENH.filter((l) => (nhom === "tat-ca" || l.nhom === nhom) &&
        (!q || boDau([l.ten, l.loi, l.lenh, l.ghi_chu].join(" ")).includes(q)));
      luoi.replaceChildren(...(ds.length ? ds.map(theLenh) : [el("p", { class: "rong" }, "Chưa có mẹo khớp từ này. Anh em bình luận dưới video để kênh làm nha.")]));
    };
    [{ ma: "tat-ca", ten: "Tất cả" }, ...window.NHOM].forEach((n) => {
      loc.append(el("button", { class: "chip", type: "button", "aria-pressed": String(n.ma === nhom), onclick: (e) => {
        nhom = n.ma; loc.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", "false")); e.currentTarget.setAttribute("aria-pressed", "true"); ve();
      } }, n.ten));
    });
    tim.addEventListener("input", ve); ve();
  }

  /* Bảng thể thức */
  function veTheThuc() {
    const tb = $("#bang-the-thuc tbody"); if (!tb) return;
    window.THE_THUC.forEach((r) => tb.append(el("tr", {}, el("td", {}, r.sai), el("td", {}, r.dung), el("td", {}, r.can_cu))));
  }

  /* Sách */
  function theSach(s) {
    const loai = (window.LOAI_SACH.find((x) => x.ma === s.loai) || {}).ten;
    return el("article", { class: "the" },
      el("div", { class: "bia " + s.loai, "aria-hidden": "true" }, s.noi_bat ? el("div", { class: "noi-bat" }, "Bán chạy") : null, el("span", {}, loai),
        el("b", {}, { "moi-hoc": "X", meo: "fx", word: "W", ai: "AI", combo: "X+W" }[s.loai] || "X")),
      el("h3", {}, s.ten),
      el("p", { class: "tac-gia" }, s.tac_gia),
      el("p", { class: "dong-tt" }, el("b", {}, "Hợp với: "), s.hop_voi),
      el("p", { class: "dong-tt" }, el("b", {}, "Vì sao gợi ý: "), s.ly_do),
      el("div", { class: "gia" }, el("strong", {}, s.gia), s.gia_goc ? el("s", {}, s.gia_goc) : null, el("small", {}, `★ ${s.sao} · ${s.da_ban} đã bán`)),
      el("div", { class: "chan-the" }, el("a", { class: "nut chinh", href: s.lien_ket, target: "_blank", rel: "noopener sponsored" }, "Xem trên TikTok Shop ↗")));
  }
  function veSach() {
    const luoi = $("#luoi-sach"); if (!luoi) return;
    const gioiHan = Number(luoi.dataset.gioiHan || 0);
    const loc = $("#loc-sach");
    let loai = "tat-ca";
    const ve = () => {
      let ds = window.SACH.filter((s) => loai === "tat-ca" || s.loai === loai);
      if (gioiHan) ds = ds.slice(0, gioiHan);
      luoi.replaceChildren(...ds.map(theSach));
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

  veKho(); veTheThuc(); veSach();
  const nam = $("#nam"); if (nam) nam.textContent = new Date().getFullYear();
})();
