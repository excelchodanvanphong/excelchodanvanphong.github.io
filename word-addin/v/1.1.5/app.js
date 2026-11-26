/* Giao diện add-in: giấy phép, nâng cấp theo thông báo, 4 tính năng. */
(function () {
  "use strict";
  const CH = window.ND30_CAU_HINH;
  const $ = (id) => document.getElementById(id);
  const LS_PB = "nd30_phien_ban";
  const ESC = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------------------------------------------------------------- tiện ích Office */
  function layTep() {
    return new Promise((xong, loi) => {
      Office.context.document.getFileAsync(Office.FileType.Compressed, { sliceSize: 4194304 }, (kq) => {
        if (kq.status !== Office.AsyncResultStatus.Succeeded) return loi(new Error(kq.error.message));
        const tep = kq.value, n = tep.sliceCount, manh = [];
        let da = 0;
        const doc = (i) => tep.getSliceAsync(i, (s) => {
          if (s.status !== Office.AsyncResultStatus.Succeeded) { tep.closeAsync(); return loi(new Error(s.error.message)); }
          manh[i] = new Uint8Array(s.value.data);
          if (++da === n) {
            tep.closeAsync();
            const tong = new Uint8Array(manh.reduce((a, m) => a + m.length, 0));
            let o = 0;
            for (const m of manh) { tong.set(m, o); o += m.length; }
            xong(tong.buffer);
          } else doc(i + 1);
        });
        doc(0);
      });
    });
  }
  const coApi = (ban) => Office.context.requirements.isSetSupported("WordApi", ban);

  async function moVanBanMoi(b64) {
    if (!coApi("1.3")) throw new Error("WORD_CU");
    await Word.run(async (ctx) => {
      ctx.application.createDocument(b64).open();
      await ctx.sync();
    });
  }
  /* Word 2016, 2019 không mở được cửa sổ mới: hiện nút để người dùng tự quyết định thay nội dung văn bản đang mở. */
  function nutThayNoiDung(dich, html, b64, nhan) {
    $(dich).innerHTML = `<div class="thong-bao canh-bao">${html}<p>Word bản này không cho add-in mở cửa sổ mới. Có thể thay nội dung văn bản đang mở bằng ${nhan}; bấm Ctrl + Z nếu muốn lấy lại. Khổ giấy và lề trang không đổi theo, đặt tay ở Layout › Margins › Custom Margins: trên 2, dưới 2, trái 3, phải 2 cm.</p><button class="chinh rong" id="${dich}-thay">Thay nội dung văn bản đang mở</button></div>`;
    $(dich + "-thay").onclick = async () => {
      try {
        await Word.run(async (ctx) => { ctx.document.body.insertFileFromBase64(b64, "Replace"); await ctx.sync(); });
        bao(dich, "dat", "Đã thay nội dung. Nhớ đặt lại khổ giấy, lề trang như hướng dẫn trên nếu chưa đúng.");
      } catch (e) { bao(dich, "loi", "Không thay được: " + ESC(e.message)); }
    };
  }

  function bao(dich, loai, html) {
    $(dich).innerHTML = `<div class="thong-bao ${loai}">${html}</div>`;
  }
  async function chay(nut, viec) {
    const b = $(nut), cu = b.textContent;
    b.disabled = true; b.textContent = "Đang làm…";
    try { await viec(); } finally { b.disabled = false; b.textContent = cu; }
  }

  /* ---------------------------------------------------------------- nâng cấp theo thông báo */
  const soSanh = (a, b) => {
    const x = String(a).split(".").map(Number), y = String(b).split(".").map(Number);
    for (let i = 0; i < 3; i++) if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) - (y[i] || 0);
    return 0;
  };
  let banTin = null;
  async function kiemNangCap(boQuaDeSau) {
    try {
      const r = await fetch(CH.goc_web + "phien-ban.json?t=" + Date.now(), { cache: "no-store" });
      banTin = await r.json();
    } catch (e) { return false; }
    veBanCu();
    if (soSanh(banTin.moi_nhat, CH.phien_ban) <= 0) return false;
    if (!boQuaDeSau && sessionStorage.getItem("nd30_de_sau") === banTin.moi_nhat) return true;
    $("nc-phien-ban").textContent = banTin.moi_nhat;
    $("nc-noi-dung").innerHTML = (banTin.noi_dung || []).map((x) => `<li>${ESC(x)}</li>`).join("");
    $("bang-nang-cap").hidden = false;
    return true;
  }
  function chuyenBan(pb) {
    localStorage.setItem(LS_PB, pb);
    location.href = CH.goc_web + "taskpane.html";   // trang mở đầu tự chọn bản thường hay bản cho Word 2016, 2019
  }
  function veBanCu() {
    const ds = ((banTin && banTin.cac_ban) || []).filter((b) => b.phien_ban !== CH.phien_ban);
    $("ds-ban-cu").innerHTML = ds.length ? "Chuyển sang bản khác: " + ds.map((b) =>
      `<button class="lien-ket" data-ban="${ESC(b.phien_ban)}">${ESC(b.phien_ban)}</button>`).join(" ") : "";
  }

  /* ---------------------------------------------------------------- giấy phép */
  const LY_DO = {
    "chua-kich-hoat": "Nhập mã kích hoạt để bắt đầu dùng.",
    "het-han": "Đã hết 7 ngày dùng thử. Nhập mã vĩnh viễn để dùng tiếp.",
    "khac-may": "Giấy phép đang lưu không thuộc máy này. Nhập lại mã.",
    "gia-mao": "Giấy phép đang lưu không hợp lệ. Nhập lại mã.",
    "dong-ho": "Đồng hồ máy tính đang lùi so với lần dùng trước. Kết nối mạng rồi mở lại add-in để kiểm tra.",
  };
  let trangThai = null;

  async function kiemGiayPhep() {
    const quaHan = (ms) => new Promise((x) => setTimeout(x, ms));
    await Promise.race([ND30GiayPhep.kiemDinhKy(false), quaHan(6000)]);
    trangThai = await ND30GiayPhep.trangThai();
    if (!trangThai.hop_le && trangThai.ly_do === "dong-ho") {
      await Promise.race([ND30GiayPhep.kiemDinhKy(true), quaHan(8000)]);
      trangThai = await ND30GiayPhep.trangThai();
    }
    $("dang-tai").hidden = true;
    if (trangThai.hop_le) moManChinh(); else moKichHoat(LY_DO[trangThai.ly_do] || LY_DO["chua-kich-hoat"], false);
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
    const t = trangThai, an = t.ma ? t.ma.slice(0, 8) + "-••••" : "";
    if (t.loai === "dung-thu") {
      $("dai-dung-thu").hidden = false;
      $("dai-dung-thu").innerHTML = `Dùng thử: còn <b>${t.con_ngay}</b> ngày. <button class="lien-ket" id="nut-mua">Nhập mã vĩnh viễn</button>`;
      $("nut-mua").onclick = () => moKichHoat("Nhập mã vĩnh viễn (VV-...). Giấy phép dùng thử sẽ được thay.", true);
      $("tom-giay-phep").textContent = `Giấy phép: dùng thử, còn ${t.con_ngay} ngày`;
    } else {
      $("dai-dung-thu").hidden = true;
      $("tom-giay-phep").textContent = "Giấy phép: vĩnh viễn";
    }
    $("ct-giay-phep").innerHTML = `Mã: ${ESC(an)}<br>Mã máy: ${ESC(ND30GiayPhep.maMay())}<br>Phiên bản add-in: ${ESC(CH.phien_ban)}` +
      (t.han ? `<br>Hạn dùng thử: ${new Date(t.han).toLocaleString("vi-VN")}` : "");
  }

  async function bamKichHoat() {
    const tb = $("kh-thong-bao");
    tb.hidden = true;
    await chay("nut-kich-hoat", async () => {
      const kq = await ND30GiayPhep.kichHoat($("o-ma").value);
      if (!kq.ok) { tb.textContent = kq.thong_bao; tb.className = "thong-bao loi"; tb.hidden = false; return; }
      trangThai = await ND30GiayPhep.trangThai();
      if (!trangThai.hop_le) { tb.textContent = LY_DO[trangThai.ly_do] || "Giấy phép chưa dùng được."; tb.className = "thong-bao loi"; tb.hidden = false; return; }
      $("o-ma").value = "";
      moManChinh();
      bao("kq-soat", "dat", trangThai.loai === "vinh-vien" ? "Đã kích hoạt bản vĩnh viễn." : `Đã kích hoạt dùng thử ${trangThai.con_ngay} ngày.`);
    });
  }

  /* Mọi tính năng đều qua cổng này: hết hạn giữa chừng thì chặn ngay. */
  async function canGiayPhep() {
    trangThai = await ND30GiayPhep.trangThai();
    if (trangThai.hop_le) return true;
    moKichHoat(LY_DO[trangThai.ly_do] || LY_DO["chua-kich-hoat"], false);
    return false;
  }

  /* ---------------------------------------------------------------- 1. soát */
  const NHOM = [["loi", "Lỗi"], ["canh-bao", "Cảnh báo"], ["goi-y", "Gợi ý"], ["dat", "Đã đạt"]];
  async function soat() {
    if (!(await canGiayPhep())) return;
    await chay("nut-soat", async () => {
      let kq;
      try { kq = await SoatVanBan.soat(await layTep(), "van-ban"); }
      catch (e) { bao("kq-soat", "loi", "Không đọc được văn bản: " + ESC(e.message)); return; }
      const t = kq.tong_quan;
      let html = `<div class="tom-tat"><span class="so loi">${t.loi}</span> lỗi <span class="so canh-bao">${t.canh_bao}</span> cảnh báo <span class="so goi-y">${t.goi_y}</span> gợi ý <span class="so dat">${t.dat}</span> đạt</div>`;
      if (!t.la_van_ban_hanh_chinh) html += `<p class="ghi">Văn bản chưa có Quốc hiệu, Tiêu ngữ, số ký hiệu hay nơi nhận nên chỉ soát được phần trình bày chung.</p>`;
      for (const [m, ten] of NHOM) {
        const ds = kq.ket_qua.filter((x) => x.muc === m);
        if (!ds.length) continue;
        html += `<details class="nhom ${m}" ${m === "dat" ? "" : "open"}><summary>${ten} (${ds.length})</summary>`;
        for (const x of ds) {
          html += `<div class="muc ${m}"><div class="tieu">${ESC(x.tieu_de)}</div>`;
          if (x.chi_tiet) html += `<div>${ESC(x.chi_tiet)}</div>`;
          if (x.cach_sua) html += `<div class="sua"><b>Cách sửa:</b> ${ESC(x.cach_sua)}</div>`;
          if (x.can_cu) html += `<div class="can-cu">${ESC(x.can_cu)}</div>`;
          for (const v of x.vi_du || []) {
            html += `<button class="vi-du" data-tim="${ESC(v.trich)}">Đoạn ${v.doan}: ${ESC(v.trich)}${v.ghi ? " (" + ESC(v.ghi) + ")" : ""}</button>`;
          }
          html += `</div>`;
        }
        html += `</details>`;
      }
      if (t.loi + t.canh_bao) html += `<button id="sang-sua" class="rong">Sửa nhanh phần trình bày ›</button>`;
      $("kq-soat").innerHTML = html;
      const ss = $("sang-sua");
      if (ss) ss.onclick = () => doiThe("sua");
    });
  }

  async function timDen(trich) {
    let t = String(trich).replace(/…$/, "").replace(/[\^]/g, "").trim();
    const thu = [t.slice(0, 80), t.slice(0, 30), t.slice(0, 12)].filter((x, i, a) => x && a.indexOf(x) === i);
    await Word.run(async (ctx) => {
      for (const s of thu) {
        const r = ctx.document.body.search(s, { matchCase: true });
        r.load("items");
        await ctx.sync();
        if (r.items.length) { r.items[0].select(); await ctx.sync(); return; }
      }
    });
  }

  /* ---------------------------------------------------------------- 2. sửa nhanh */
  async function suaNhanh() {
    if (!(await canGiayPhep())) return;
    const tc = {};
    document.querySelectorAll("[data-tc]").forEach((o) => { tc[o.dataset.tc] = o.checked; });
    await chay("nut-sua", async () => {
      let goc, ra;
      try {
        goc = await layTep();
        ra = await ND30SuaNhanh.sua(goc, tc);
      } catch (e) { bao("kq-sua", "loi", "Không sửa được: " + ESC(e.message)); return; }
      const [truoc, sau] = await Promise.all([SoatVanBan.soat(goc, "goc"), SoatVanBan.soat(ra.buf.buffer, "sua")]);
      const tk = ra.tk;
      const dong = [["trang", "phần trang đổi khổ giấy, lề"], ["phong", "chỗ đổi phông"], ["mau", "chỗ đổi màu chữ"], ["co", "đoạn đổi cỡ chữ"],
        ["canh", "đoạn canh đều"], ["lui", "đoạn lùi đầu dòng"], ["gian_dong", "đoạn đổi giãn dòng"], ["cach_doan", "đoạn đổi cách đoạn"]]
        .filter(([k]) => tk[k]).map(([k, t]) => `<li>${tk[k]} ${t}</li>`).join("");
      const html = `<p>Lỗi và cảnh báo: <b>${truoc.tong_quan.loi + truoc.tong_quan.canh_bao}</b> → <b>${sau.tong_quan.loi + sau.tong_quan.canh_bao}</b></p>` +
        (dong ? `<ul>${dong}</ul>` : "<p>Phần trình bày đã đúng, không có gì phải sửa.</p>");
      if (!dong) { bao("kq-sua", "dat", html); return; }
      const b64 = ND30Zip.sangBase64(ra.buf);
      try {
        await moVanBanMoi(b64);
        bao("kq-sua", "dat", html + "<p>Word đã mở <b>bản đã sửa</b> trong cửa sổ mới. Xem lại rồi lưu bản mới (File › Save As). Lỗi còn lại là lỗi nội dung, xem ở thẻ Soát.</p>");
      } catch (e) {
        nutThayNoiDung("kq-sua", html, b64, "bản đã sửa");
      }
    });
  }

  /* ---------------------------------------------------------------- dựng văn bản từ nội dung */
  const LS_HS = "nd30_ho_so";
  const TEN_LOAI_DU = { BC: "BÁO CÁO", TTr: "TỜ TRÌNH", KH: "KẾ HOẠCH", TB: "THÔNG BÁO", "QĐ": "QUYẾT ĐỊNH", CTr: "CHƯƠNG TRÌNH",
    HD: "HƯỚNG DẪN", "ĐA": "ĐỀ ÁN", PA: "PHƯƠNG ÁN", QC: "QUY CHẾ", GM: "GIẤY MỜI", BB: "BIÊN BẢN", NQ: "NGHỊ QUYẾT" };
  const dong = (s) => String(s || "").split(/\r?\n/).map((x) => x.trim()).filter(Boolean);
  function docHoSo() {
    try { return JSON.parse(localStorage.getItem(LS_HS) || "{}"); } catch (e) { return {}; }
  }
  function napHoSo() {
    let hs = docHoSo();
    if (!hs.coQuan) {   // lần đầu: lấy sẵn những gì đã gõ ở thẻ Khối
      try { const f = JSON.parse(localStorage.getItem(LS_FORM) || "{}"); hs = Object.assign({ chuQuan: f.chuQuan, coQuan: f.coQuan, diaDanh: f.diaDanh, thamQuyen: f.thamQuyen, chucVu: f.chucVu, hoTen: f.hoTen }, hs); } catch (e) { /* bỏ qua */ }
    }
    document.querySelectorAll("[data-hs]").forEach((x) => { if (hs[x.dataset.hs] != null && hs[x.dataset.hs] !== "") x.value = hs[x.dataset.hs]; });
    if (!docHoSo().coQuan) $("ho-so").setAttribute("open", "");
  }
  function luuHoSo() {
    const hs = {};
    document.querySelectorAll("[data-hs]").forEach((x) => { hs[x.dataset.hs] = x.value.trim(); });
    localStorage.setItem(LS_HS, JSON.stringify(hs));
    return hs;
  }
  function doiLoaiDung() {
    const l = document.querySelector('[data-d="loai"]').value, cv = l === "CV";
    $("d-vv").hidden = !cv; $("d-trich").hidden = cv;
    $("d-tqbh").hidden = !(l === "QĐ" || l === "NQ");
  }
  async function docVB() {
    if (!(await canGiayPhep())) return;
    await chay("nut-doc-vb", async () => {
      let pt;
      try { pt = await ND30DungVB.phanTich(await layTep()); }
      catch (e) { bao("kq-dung", "loi", "Không đọc được văn bản: " + ESC(e.message)); return; }
      const hs = docHoSo();
      const dat = (k, v) => { const x = document.querySelector(`[data-d="${k}"]`); x.value = v || ""; };
      dat("loai", pt.loai); dat("trichYeu", pt.trichYeu); dat("veViec", pt.veViec);
      dat("kinhGui", pt.kinhGui.join("\n"));
      dat("noiNhan", (pt.noiNhan.length ? pt.noiNhan : dong(hs.noiNhan)).join("\n"));
      dat("thamQuyen", pt.thamQuyen || (pt.chucVu ? "" : hs.thamQuyen));
      dat("chucVu", pt.chucVu || hs.chucVu); dat("hoTen", pt.hoTen || hs.hoTen);
      dat("thamQuyenBH", pt.thamQuyenBH || ND30DungVB.suyThamQuyenBH(Object.assign({}, hs, {
        thamQuyen: document.querySelector('[data-d="thamQuyen"]').value, chucVu: document.querySelector('[data-d="chucVu"]').value })));
      doiLoaiDung();
      const nhan = [];
      nhan.push(pt.tenLoai ? `tên loại <b>${ESC(pt.tenLoai)}</b>` : "không thấy tên loại, coi là <b>công văn</b>");
      if (pt.trichYeu || pt.veViec) nhan.push("trích yếu");
      if (pt.kinhGui.length) nhan.push(`${pt.kinhGui.length} nơi Kính gửi`);
      nhan.push(`${pt.soDoan} đoạn nội dung`);
      if (pt.coKhoiDau) nhan.push("khối Quốc hiệu, số, ngày cũ (sẽ dựng lại)");
      if (pt.coKhoiKy) nhan.push("khối nơi nhận, chữ ký cũ (sẽ dựng lại)");
      $("dung-tom").innerHTML = "Nhận ra: " + nhan.join("; ") + ". Xem lại các ô dưới đây rồi bấm Dựng." +
        (docHoSo().coQuan ? "" : "<br><b>Chưa có hồ sơ cơ quan:</b> điền và bấm Lưu hồ sơ ở trên trước khi dựng.");
      $("form-dung").hidden = false;
      $("kq-dung").innerHTML = "";
    });
  }
  /* Word có WordApiDesktop 1.3 (Microsoft 365 bản mới) thì đặt được khổ giấy, lề trang tại chỗ. */
  async function datLeTrang() {
    if (!Office.context.requirements.isSetSupported("WordApiDesktop", "1.3")) return false;
    try {
      await Word.run(async (ctx) => {
        const ds = ctx.document.sections; ds.load("items"); await ctx.sync();
        ds.items.forEach((s) => s.pageSetup.load("orientation"));
        await ctx.sync();
        ds.items.forEach((s) => {
          const p = s.pageSetup, ngang = p.orientation === "Landscape";
          p.pageWidth = ngang ? 841.9 : 595.3; p.pageHeight = ngang ? 595.3 : 841.9;
          p.topMargin = 56.7; p.bottomMargin = 56.7; p.leftMargin = 85.05; p.rightMargin = 56.7;
        });
        await ctx.sync();
      });
      return true;
    } catch (e) { return false; }
  }
  async function dungVB() {
    if (!(await canGiayPhep())) return;
    const hs = luuHoSo();
    if (!hs.coQuan) { bao("kq-dung", "loi", "Chưa có tên cơ quan ban hành trong hồ sơ cơ quan."); $("ho-so").setAttribute("open", ""); return; }
    const v = (k) => document.querySelector(`[data-d="${k}"]`).value.trim();
    const loai = v("loai");
    const tt = Object.assign({}, hs, {
      loai, tenLoai: TEN_LOAI_DU[loai] || "", trichYeu: v("trichYeu"), veViec: v("veViec"),
      kinhGui: dong(v("kinhGui")), noiNhan: dong(v("noiNhan")), thamQuyen: v("thamQuyen"), chucVu: v("chucVu"), hoTen: v("hoTen"),
      thamQuyenBH: v("thamQuyenBH"),
    });
    await chay("nut-dung", async () => {
      try {
        const goc = await layTep();
        const chuan = await ND30SuaNhanh.sua(goc);
        const ra = await ND30DungVB.dung(chuan.buf, tt);
        await Word.run(async (ctx) => { ctx.document.body.insertFileFromBase64(ND30Zip.sangBase64(ra), "Replace"); await ctx.sync(); });
        await boLuiKhung();
        const le = await datLeTrang();
        const sau = await SoatVanBan.soat(await layTep(), "dung");
        const conLai = sau.tong_quan.loi + sau.tong_quan.canh_bao;
        bao("kq-dung", le || conLai === 0 ? "dat" : "canh-bao", "Đã dựng văn bản và chuẩn hóa định dạng. Bấm Ctrl + Z nếu muốn trả lại." +
          (ra.soCanCu ? ` <br>Khối căn cứ (${ra.soCanCu} dòng): in nghiêng, các dòng trên kết thúc bằng dấu chấm phẩy.` : "") +
          (ra.soPhuLuc ? ` <br>Đã chuẩn hóa ${ra.soPhuLuc} phụ lục: mỗi phụ lục sang trang mới, số trang đánh lại từ 1; dòng "Kèm theo" để trống số, ngày chờ văn thư.` : "") +
          (le ? " Đã đặt khổ A4, lề 2 - 2 - 3 - 2 cm." : " <br>Word bản này không cho add-in đổi lề trang: nếu thẻ Soát báo lề hoặc khổ giấy sai, vào Layout › Margins › Custom Margins, đặt trên 2, dưới 2, trái 3, phải 2 cm; Layout › Size › A4.") +
          `<br>Soát lại: ${sau.tong_quan.loi} lỗi, ${sau.tong_quan.canh_bao} cảnh báo` + (conLai ? " (xem thẻ Soát)." : "."));
      } catch (e) { bao("kq-dung", "loi", "Không dựng được: " + ESC(e.message)); }
    });
  }

  /* ---------------------------------------------------------------- 3. khuôn */
  function veKhuon() {
    $("ds-khuon").innerHTML = (window.ND30_KHUON || []).map((k, i) =>
      `<div class="khuon"><div><b>${ESC(k.ten)}</b><div class="ghi">${ESC(k.mo_ta || "")}</div></div><button class="chinh" data-khuon="${i}">Tạo mới</button></div>`).join("");
  }
  async function taoTuKhuon(i, nut) {
    if (!(await canGiayPhep())) return;
    const k = window.ND30_KHUON[i];
    nut.disabled = true;
    try {
      await moVanBanMoi(k.b64);
      bao("kq-khuon", "dat", `Đã mở ${ESC(k.ten)} trong cửa sổ mới. Thay các chỗ chấm (......) bằng nội dung thật.`);
    } catch (e) {
      nutThayNoiDung("kq-khuon", "", k.b64, ESC(k.ten));
    } finally { nut.disabled = false; }
  }

  /* ---------------------------------------------------------------- 4. khối */
  const LS_FORM = "nd30_form_khoi";
  function docForm() {
    const o = {};
    document.querySelectorAll("[data-k]").forEach((x) => { o[x.dataset.k] = x.type === "checkbox" ? x.checked : x.value; });
    const luu = Object.assign({}, o); delete luu.ngay; delete luu.soKyHieu; delete luu.veViec; delete luu.trichYeu;
    localStorage.setItem(LS_FORM, JSON.stringify(luu));
    return o;
  }
  function napForm() {
    let o = {};
    try { o = JSON.parse(localStorage.getItem(LS_FORM) || "{}"); } catch (e) { /* bỏ qua */ }
    document.querySelectorAll("[data-k]").forEach((x) => {
      if (!(x.dataset.k in o)) return;
      if (x.type === "checkbox") x.checked = !!o[x.dataset.k]; else x.value = o[x.dataset.k];
    });
    const d = new Date();
    document.querySelector('[data-k="ngay"]').value = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    doiLoai();
  }
  const TEN_LOAI = { BC: "Báo cáo", TTr: "Tờ trình", KH: "Kế hoạch", TB: "Thông báo", "QĐ": "Quyết định", NQ: "Nghị quyết" };
  function doiLoai() {
    const l = document.querySelector('[data-k="loai"]').value;
    $("dong-vv").hidden = l !== "CV";
    $("dong-trich-yeu").hidden = l === "CV";
    document.querySelector('[data-k="soKyHieu"]').placeholder = l === "CV" ? "     /UBND-VP" : `     /${l}-UBND`;
  }
  async function chenOoxml(xml, viTri) {
    await Word.run(async (ctx) => {
      if (viTri === "dau") ctx.document.body.insertOoxml(xml, "Start");
      else if (viTri === "cuoi") ctx.document.body.insertOoxml(xml, "End");
      else ctx.document.getSelection().insertOoxml(xml, "Replace");
      await ctx.sync();
    });
    await boLuiKhung();
  }
  /* Từ Quốc hiệu, Tiêu ngữ tới Kính gửi và khối ký không được lùi đầu dòng. Đoạn đầu phần chèn bị Word gộp với
     đoạn có sẵn nên có thể mang lùi đầu dòng của Normal: quét lại mọi đoạn kiểu "NĐ30 Khung", đưa lùi đầu dòng về 0. */
  async function boLuiKhung() {
    try {
      await Word.run(async (ctx) => {
        const ps = ctx.document.body.paragraphs;
        ps.load("items/style,items/firstLineIndent");
        await ctx.sync();
        ps.items.forEach((p) => { if (/N[ĐD]30\s*Khung/i.test(p.style || "") && p.firstLineIndent !== 0) p.firstLineIndent = 0; });
        await ctx.sync();
      });
    } catch (e) { /* Word quá cũ: bỏ qua, kiểu NĐ30 Khung đã đặt lùi 0 */ }
  }
  async function chenKhoiDau() {
    if (!(await canGiayPhep())) return;
    const o = docForm();
    const ngay = o.deTrongNgay || !o.ngay ? null : new Date(o.ngay + "T00:00:00");
    const laCv = o.loai === "CV";
    const xml = ND30Khoi.dauVanBan({
      chuQuan: o.chuQuan, coQuan: o.coQuan, soKyHieu: o.soKyHieu.trim() ? o.soKyHieu : null,
      veViec: laCv ? o.veViec : null, diaDanh: o.diaDanh, ngay,
      tenLoai: laCv ? null : TEN_LOAI[o.loai], trichYeu: laCv ? null : o.trichYeu,
    });
    await chay("nut-khoi-dau", async () => {
      try { await chenOoxml(xml, document.querySelector('[name="vt-dau"]:checked').value); bao("kq-khoi", "dat", "Đã chèn khối đầu văn bản."); }
      catch (e) { bao("kq-khoi", "loi", "Không chèn được: " + ESC(e.message)); }
    });
  }
  async function chenKhoiKy() {
    if (!(await canGiayPhep())) return;
    const o = docForm();
    const xml = ND30Khoi.khoiKy({ noiNhan: o.noiNhan.split(/\r?\n/), thamQuyen: o.thamQuyen, chucVu: o.chucVu, hoTen: o.hoTen });
    await chay("nut-khoi-ky", async () => {
      try { await chenOoxml(xml, document.querySelector('[name="vt-ky"]:checked').value); bao("kq-khoi", "dat", "Đã chèn khối nơi nhận, chữ ký."); }
      catch (e) { bao("kq-khoi", "loi", "Không chèn được: " + ESC(e.message)); }
    });
  }

  /* ---------------------------------------------------------------- khung */
  function doiThe(ten) {
    document.querySelectorAll("nav.the button").forEach((b) => { b.classList[b.dataset.the === ten ? "add" : "remove"]("dang-chon"); });
    document.querySelectorAll(".noi-the").forEach((d) => { d.hidden = d.id !== "the-" + ten; });
  }

  function ganSuKien() {
    document.querySelectorAll("nav.the button").forEach((b) => { b.onclick = () => doiThe(b.dataset.the); });
    $("nut-kich-hoat").onclick = bamKichHoat;
    $("o-ma").addEventListener("keydown", (e) => { if (e.key === "Enter") bamKichHoat(); });
    $("nut-chep-may").onclick = () => { navigator.clipboard && navigator.clipboard.writeText(ND30GiayPhep.maMay()); };
    $("nut-quay-lai").onclick = () => moManChinh();
    $("nut-doi-ma").onclick = () => moKichHoat("Nhập mã mới. Giấy phép hiện tại sẽ được thay khi kích hoạt thành công.", true);
    $("nut-soat").onclick = soat;
    $("nut-doc-vb").onclick = docVB;
    $("nut-dung").onclick = dungVB;
    $("nut-luu-ho-so").onclick = () => { luuHoSo(); bao("kq-dung", "dat", "Đã lưu hồ sơ cơ quan."); };
    document.querySelector('[data-d="loai"]').onchange = doiLoaiDung;
    $("nut-sua").onclick = suaNhanh;
    $("nut-khoi-dau").onclick = chenKhoiDau;
    $("nut-khoi-ky").onclick = chenKhoiKy;
    document.querySelector('[data-k="loai"]').onchange = doiLoai;
    $("nut-nang-cap").onclick = () => chuyenBan(banTin.moi_nhat);
    $("nut-de-sau").onclick = () => { sessionStorage.setItem("nd30_de_sau", banTin.moi_nhat); $("bang-nang-cap").hidden = true; };
    $("nut-kiem-cap-nhat").onclick = async () => {
      const co = await kiemNangCap(true);
      if (!co) bao("kq-soat", "dat", banTin ? `Đang dùng bản mới nhất (${ESC(CH.phien_ban)}).` : "Không kiểm tra được, máy đang mất mạng.");
    };
    document.body.addEventListener("click", (e) => {
      const v = e.target.closest("[data-tim]");
      if (v) { timDen(v.dataset.tim).catch(() => {}); return; }
      const k = e.target.closest("[data-khuon]");
      if (k) { taoTuKhuon(+k.dataset.khuon, k); return; }
      const b = e.target.closest("[data-ban]");
      if (b) chuyenBan(b.dataset.ban);
    });
  }

  Office.onReady((info) => {
    localStorage.setItem(LS_PB, CH.phien_ban);   // nhớ bản đang dùng; chỉ đổi khi người dùng bấm Nâng cấp
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
    kiemGiayPhep().catch((e) => { $("dang-tai").textContent = "Lỗi khởi động: " + e.message; });
  });
})();
