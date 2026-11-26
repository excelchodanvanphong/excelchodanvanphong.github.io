/* Dựng văn bản hoàn chỉnh từ phần nội dung người dùng đã gõ.
   ND30DungVB.phanTich(buf) -> Promise<{ loai, tenLoai, trichYeu, veViec, kinhGui[], noiNhan[], thamQuyen, chucVu, hoTen, soDoan, boDau, boCuoi }>
     Nhận ra tên loại, trích yếu, V/v, Kính gửi ở đầu; Nơi nhận, người ký ở cuối (dạng đoạn rời hoặc bảng);
     khối Quốc hiệu, số, ngày tháng cũ (nếu có) được đánh dấu để bỏ và dựng lại.
   ND30DungVB.dung(buf, tt) -> Promise<Uint8Array>: thay phần đầu, phần cuối bằng khối đúng Nghị định 30, giữ nguyên nội dung giữa. */
(function (goc) {
  "use strict";
  const W = "http://schemas.openxmlformats.org/wordprocessingml/2006/main";
  const LOAI = [
    ["BÁO CÁO", "BC"], ["TỜ TRÌNH", "TTr"], ["KẾ HOẠCH", "KH"], ["THÔNG BÁO", "TB"], ["QUYẾT ĐỊNH", "QĐ"],
    ["CHƯƠNG TRÌNH", "CTr"], ["BIÊN BẢN", "BB"], ["HƯỚNG DẪN", "HD"], ["ĐỀ ÁN", "ĐA"], ["PHƯƠNG ÁN", "PA"],
    ["QUY CHẾ", "QC"], ["GIẤY MỜI", "GM"], ["CÔNG ĐIỆN", "CĐ"],
  ];
  const conCac = (el) => Array.from(el.childNodes).filter((n) => n.nodeType === 1);
  const chu = (el) => {
    if (el.localName === "tbl") {
      return Array.from(el.getElementsByTagNameNS(W, "p")).map((p) => chu(p)).join("\n");
    }
    return Array.from(el.getElementsByTagNameNS(W, "t")).map((t) => t.textContent).join("");
  };
  const gon = (s) => s.replace(/\s+/g, " ").trim();
  const laHoa = (s) => /\p{L}/u.test(s) && s === s.toUpperCase();
  const boGach = (s) => s.replace(/^[-–•+]\s*/, "").replace(/[\s;.,…]+$/, "").trim();
  const coChu = (s) => /\p{L}/u.test(s || "");   // dòng chỉ có dấu chấm của khuôn mẫu thì coi như trống

  function thanVanBan(doc) {
    const body = doc.getElementsByTagNameNS(W, "body")[0];
    const ds = conCac(body).filter((e) => e.localName !== "sectPr");
    return { body, ds };
  }

  function tachLoai(s) {
    const t = gon(s).toUpperCase();
    for (const [ten, ma] of LOAI) if (t === ten || t.indexOf(ten + " ") === 0) return { ten, ma, conLai: gon(s).slice(ten.length).trim() };
    return null;
  }
  const kieuCau = (s) => { s = s.toLowerCase(); return s.charAt(0).toUpperCase() + s.slice(1); };

  /* Khối chữ ký: dòng ngắn sau nội dung, không kết thúc bằng dấu câu. */
  function docChuKy(dong) {
    const kq = { thamQuyen: "", chucVu: "", hoTen: "" };
    const ds = dong.map(gon).filter((x) => x && !/^\(.*\)$/.test(x) && !/^Nơi\s*nhận/i.test(x));
    if (!ds.length) return kq;
    let i = 0;
    const mau = (x) => /QUYỀN\s*HẠN|CHỨC\s*VỤ\s*CỦA\s*NGƯỜI\s*KÝ|^Họ\s*(và|,)?\s*tên$/i.test(x);   // chữ mẫu của khuôn
    if (/^(KT|TL|TM|TUQ|Q)\.\s*/i.test(ds[0])) { kq.thamQuyen = ds[0]; i = 1; }
    const conLai = ds.slice(i);
    if (conLai.length === 1) { if (laHoa(conLai[0])) kq.chucVu = conLai[0]; else kq.hoTen = conLai[0]; }
    else if (conLai.length >= 2) { kq.chucVu = conLai.slice(0, -1).filter(laHoa).join(" ") || conLai[0]; kq.hoTen = conLai[conLai.length - 1]; }
    if (mau(kq.chucVu)) kq.chucVu = "";
    if (mau(kq.hoTen)) kq.hoTen = "";
    return kq;
  }

  function phanTichDoc(doc) {
    const { ds } = thanVanBan(doc);
    const tx = ds.map((e) => gon(chu(e)));
    const kq = { loai: "", tenLoai: "", trichYeu: "", veViec: "", kinhGui: [], noiNhan: [], thamQuyen: "", chucVu: "", hoTen: "", boDau: 0, boCuoi: ds.length, ketVung: ds.length, soDoan: 0, coKhoiDau: false, coKhoiKy: false };

    /* ---- phần đầu */
    let i = 0;
    const DAU = /CỘNG\s*HÒA\s*XÃ\s*HỘI|CỘNG\s*HOÀ\s*XÃ\s*HỘI|Độc\s*lập\s*[-–—]\s*Tự\s*do|^Số\s*:|,\s*ngày\s.*tháng\s.*năm/i;
    while (i < ds.length && i < 15) {
      const t = tx[i];
      if (!t) { i++; continue; }
      if (DAU.test(t) || (ds[i].localName === "tbl" && /CỘNG\s*H[OÒ]A|Số\s*:/i.test(t))) { kq.coKhoiDau = true; i++; continue; }
      if (kq.coKhoiDau && laHoa(t) && t.length < 80 && !tachLoai(t) && i < 6) { i++; continue; }   // tên cơ quan rời
      break;
    }
    while (i < ds.length) {
      const t = tx[i];
      if (!t) { i++; continue; }
      const loai = !kq.tenLoai && laHoa(t) ? tachLoai(t) : null;
      if (loai) {
        kq.tenLoai = loai.ten; kq.loai = loai.ma;
        if (coChu(loai.conLai)) kq.trichYeu = kieuCau(loai.conLai);
        i++;
        while (i < ds.length && !tx[i]) i++;
        if (!kq.trichYeu && i < ds.length && tx[i].length < 250 && !/^Kính\s*gửi/i.test(tx[i]) && !/^(Căn\s*cứ|I\.|1\.)/i.test(tx[i])) {
          if (coChu(tx[i])) kq.trichYeu = tx[i];
          i++;
        }
        continue;
      }
      if (/^V\/v\b/i.test(t)) { const v = t.replace(/^V\/v\s*/i, ""); if (coChu(v)) kq.veViec = v; i++; continue; }
      if (/^Kính\s*gửi/i.test(t)) {
        const sau = t.replace(/^Kính\s*gửi\s*:?\s*/i, "");
        if (coChu(sau)) kq.kinhGui.push(boGach(sau));
        i++;
        while (i < ds.length && /^[-–•+]\s*\S/.test(tx[i])) { if (coChu(tx[i])) kq.kinhGui.push(boGach(tx[i])); i++; }
        continue;
      }
      break;
    }
    kq.boDau = i;

    /* ---- phần cuối: dừng ở ngắt section hoặc dòng "PHỤ LỤC" (phụ lục giữ nguyên, đứng sau khối chữ ký) */
    let L = ds.length;
    for (let k = i; k < ds.length; k++) {
      const e = ds[k];
      const pPr = e.localName === "p" ? conCac(e).find((c) => c.localName === "pPr") : null;
      if (pPr && conCac(pPr).some((c) => c.localName === "sectPr")) { L = k; break; }
      if (k > i + 1 && /^PH[ỤU]\s*L[ỤU]C\b/.test(tx[k])) { L = k; break; }
    }
    kq.ketVung = L;
    let j = L;
    while (j > i && !tx[j - 1]) j--;
    const cuoi = ds[j - 1];
    if (cuoi && cuoi.localName === "tbl" && /Nơi\s*nhận/i.test(tx[j - 1])) {
      const hang = cuoi.getElementsByTagNameNS(W, "tr")[0];
      const o = hang ? Array.from(hang.childNodes).filter((n) => n.localName === "tc") : [];
      const dongO = (c) => c ? Array.from(c.getElementsByTagNameNS(W, "p")).map((p) => gon(chu(p))) : [];
      kq.noiNhan = dongO(o[0]).filter((x) => x && !/^Nơi\s*nhận/i.test(x) && coChu(x)).map(boGach);
      Object.assign(kq, docChuKy(dongO(o[1])));
      kq.coKhoiKy = true;
      j--;
    } else {
      const tuDong = Math.max(i, j - 20);
      let nn = -1;
      for (let k = j - 1; k >= tuDong; k--) if (/^Nơi\s*nhận/i.test(tx[k])) { nn = k; break; }
      let ketThuc = j;
      const kyDong = [];
      if (nn >= 0) {
        let k = nn + 1;
        while (k < j && (/^[-–•+]\s*\S/.test(tx[k]) || !tx[k])) { if (coChu(tx[k])) kq.noiNhan.push(boGach(tx[k])); k++; }
        for (; k < j; k++) kyDong.push(tx[k]);
        ketThuc = nn;
        kq.coKhoiKy = true;
      }
      // dòng ký đứng ngay sau nội dung (trước hoặc không có Nơi nhận): dòng ngắn, không dấu câu cuối
      let k = ketThuc;
      const truoc = [];
      while (k - 1 >= i && (!tx[k - 1] || (tx[k - 1].length <= 60 && !/[.;:,!?]$/.test(tx[k - 1]) && !/^[-–•+]/.test(tx[k - 1])))) {
        if (tx[k - 1]) truoc.unshift(tx[k - 1]);
        k--;
        if (truoc.length > 5) break;
      }
      if (truoc.length && truoc.length <= 5) { kyDong.unshift(...truoc); ketThuc = k; kq.coKhoiKy = true; }
      if (kyDong.length) Object.assign(kq, docChuKy(kyDong));
      j = ketThuc;
    }
    while (j > i && !tx[j - 1]) j--;
    kq.boCuoi = j;
    kq.soDoan = tx.slice(i, j).filter(Boolean).length;
    if (!kq.loai) kq.loai = "CV";
    return kq;
  }

  async function moDoc(buf) {
    const z = goc.ND30Zip.mo(buf);
    const doc = new DOMParser().parseFromString(await z.docChu("word/document.xml"), "application/xml");
    return { z, doc };
  }

  async function phanTich(buf) {
    const { doc } = await moDoc(buf);
    return phanTichDoc(doc);
  }

  /* tt: kết quả phanTich đã người dùng sửa + hồ sơ cơ quan:
     { loai, tenLoai, trichYeu, veViec, kinhGui[], noiNhan[], thamQuyen, chucVu, hoTen,
       chuQuan, coQuan, kyHieu, kyHieuDonVi, diaDanh } */
  async function dung(buf, tt) {
    const { z, doc } = await moDoc(buf);
    const kq = phanTichDoc(doc);   // vị trí phần đầu, phần cuối tính lại trên đúng tệp sẽ dựng
    const { body, ds } = thanVanBan(doc);
    const laCv = tt.loai === "CV";
    const kh = (tt.kyHieu || "").trim() || ".....";
    const soKyHieu = "      /" + (laCv ? kh + (tt.kyHieuDonVi ? "-" + tt.kyHieuDonVi.trim() : "") : tt.loai + "-" + kh);
    const K = goc.ND30Khoi;
    let noiNhan = (tt.noiNhan || []).filter((x) => x.trim());
    if ((tt.kinhGui || []).length && !noiNhan.some((x) => /^Như\s+trên/i.test(boGach(x)))) noiNhan = ["Như trên"].concat(noiNhan);
    const dauXml = K.thanDau({
      chuQuan: tt.chuQuan, coQuan: tt.coQuan, soKyHieu, veViec: laCv ? (tt.veViec || ".....") : null,
      diaDanh: tt.diaDanh, namTrong: String(new Date().getFullYear()),
      tenLoai: laCv ? null : tt.tenLoai, trichYeu: laCv ? null : tt.trichYeu, kinhGui: tt.kinhGui,
    });
    const kyXml = K.thanKy({ noiNhan, thamQuyen: tt.thamQuyen, chucVu: tt.chucVu, hoTen: tt.hoTen });

    const manh = (xml) => {
      const d = new DOMParser().parseFromString(`<w:body xmlns:w="${W}">${xml}</w:body>`, "application/xml");
      return conCac(d.documentElement).map((n) => doc.importNode(n, true));
    };
    // bỏ phần đầu, phần cuối cũ; giữ nội dung giữa
    const sauKy = ds[kq.ketVung] || conCac(body).find((e) => e.localName === "sectPr") || null;   // phụ lục hoặc cuối văn bản
    ds.forEach((e, idx) => { if (idx < kq.boDau || (idx >= kq.boCuoi && idx < kq.ketVung)) body.removeChild(e); });
    const dauNut = conCac(body)[0] || null;
    for (const n of manh(dauXml)) body.insertBefore(n, dauNut);
    for (const n of manh(kyXml)) body.insertBefore(n, sauKy);
    // đoạn rỗng sau bảng chữ ký để bảng không dính vào đoạn kế tiếp
    for (const n of manh(K.doan("", { canh: "both", co: 14 }))) body.insertBefore(n, sauKy);

    // Đoạn nội dung đang theo kiểu mặc định (Normal) chuyển sang kiểu riêng "NĐ30 Nội dung": Normal của văn bản đích
    // có thể lùi đầu dòng theo số ký tự và Word ưu tiên giá trị đó hơn lùi 1 cm ghi trên dòng.
    const kStyles = await z.docChu("word/styles.xml");
    const st = kStyles ? new DOMParser().parseFromString(kStyles, "application/xml") : null;
    let macDinh = "Normal";
    if (st) {
      for (const e of Array.from(st.getElementsByTagNameNS(W, "style"))) {
        if (e.getAttributeNS(W, "type") === "paragraph" && e.getAttributeNS(W, "default") === "1") macDinh = e.getAttributeNS(W, "styleId");
      }
    }
    const kieuCuaP = (p) => {
      const pPr = conCac(p).find((c) => c.localName === "pPr");
      const ps = pPr ? conCac(pPr).find((c) => c.localName === "pStyle") : null;
      return { pPr, ps, ten: ps ? ps.getAttributeNS(W, "val") : macDinh };
    };
    ds.forEach((e, idx) => {
      if (idx < kq.boDau || idx >= kq.boCuoi || e.localName !== "p") return;
      const k = kieuCuaP(e);
      if (k.ten !== macDinh) return;   // giữ đề mục, danh sách có kiểu riêng
      let pPr = k.pPr;
      if (!pPr) { pPr = doc.createElementNS(W, "w:pPr"); e.insertBefore(pPr, e.firstChild); }
      let ps = k.ps;
      if (!ps) { ps = doc.createElementNS(W, "w:pStyle"); pPr.insertBefore(ps, pPr.firstChild); }
      ps.setAttributeNS(W, "w:val", K.KIEU_NOI_DUNG);
    });

    let s = new XMLSerializer().serializeToString(doc);
    s = s.replace(/ xmlns:xml="http:\/\/www\.w3\.org\/XML\/1998\/namespace"/g, "");
    if (!/^<\?xml/.test(s)) s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n' + s;
    z.datChu("word/document.xml", s);
    if (st && !kStyles.includes('w:styleId="' + K.KIEU_KHUNG + '"')) {
      let x = new XMLSerializer().serializeToString(st).replace(/<\/w:styles>\s*$/, K.KIEU_XML + "</w:styles>");
      x = x.replace(/ xmlns:xml="http:\/\/www\.w3\.org\/XML\/1998\/namespace"/g, "");
      if (!/^<\?xml/.test(x)) x = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n' + x;
      z.datChu("word/styles.xml", x);
    }
    return await z.xuat();
  }

  goc.ND30DungVB = { phanTich, dung, tachLoai };
})(typeof window !== "undefined" ? window : globalThis);
