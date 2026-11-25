/* Dựng khối đầu văn bản (tên cơ quan, Quốc hiệu, Tiêu ngữ, số ký hiệu, địa danh ngày tháng) và
   khối nơi nhận, chữ ký theo Phụ lục I Nghị định 30/2020/NĐ-CP, dạng OOXML để chèn bằng insertOoxml.
   Định dạng gắn trực tiếp vào từng đoạn nên không phụ thuộc kiểu (style) của văn bản đang mở.
   Kích thước bảng giống bộ khuôn NĐ30 của kênh: cột 6,5 cm + 10,5 cm, lùi trái 0,5 cm. */
(function (goc) {
  "use strict";
  const TNR = "Times New Roman";
  const CM = 567;
  const thoat = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  /* Độ dài dòng chữ (point) để kẻ đường dưới tên cơ quan, Tiêu ngữ cho đúng tỷ lệ. */
  let canvas = null;
  function doRong(chu, co, dam) {
    try {
      canvas = canvas || document.createElement("canvas");
      const g = canvas.getContext("2d");
      if (g) { g.font = `${dam ? "bold " : ""}${co}pt "${TNR}"`; const w = g.measureText(chu).width; if (w) return w * 0.75; }
    } catch (e) { /* không có canvas thì ước lượng */ }
    return chu.length * co * (dam ? 0.52 : 0.48);
  }

  function doan(chu, o) {
    o = o || {};
    const co = (o.co || 14) * 2;
    const rPr = `<w:rPr><w:rFonts w:ascii="${TNR}" w:hAnsi="${TNR}" w:cs="${TNR}" w:eastAsia="${TNR}"/>` +
      (o.dam ? "<w:b/><w:bCs/>" : "") + (o.nghieng ? "<w:i/><w:iCs/>" : "") +
      `<w:color w:val="000000"/><w:sz w:val="${co}"/><w:szCs w:val="${co}"/></w:rPr>`;
    const ind = `<w:ind w:left="${o.trai || 0}" w:right="${o.phai || 0}" w:firstLine="${o.dau || 0}"/>`;
    const sp = `<w:spacing w:before="${(o.truoc || 0) * 20}" w:after="${(o.sau || 0) * 20}" w:line="240" w:lineRule="auto"/>`;
    const pPr = `<w:pPr>${o.giu ? "<w:keepNext/>" : ""}${sp}${ind}<w:jc w:val="${o.canh || "center"}"/>${rPr}</w:pPr>`;
    const chay = chu ? `<w:r>${rPr}<w:t xml:space="preserve">${thoat(chu)}</w:t></w:r>` : "";
    return `<w:p>${pPr}${chay}</w:p>`;
  }

  /* Đường kẻ nét liền: đoạn cao 1pt có viền trên, lùi hai bên để đường dài đúng daiPt. */
  function duongKe(vungCm, daiPt) {
    const le = Math.max(0, Math.round(((vungCm * 28.3465 - daiPt) / 2) * 20));
    return `<w:p><w:pPr><w:pBdr><w:top w:val="single" w:sz="6" w:space="0" w:color="000000"/></w:pBdr>` +
      `<w:spacing w:before="80" w:after="0" w:line="20" w:lineRule="exact"/><w:ind w:left="${le}" w:right="${le}" w:firstLine="0"/>` +
      `<w:jc w:val="center"/><w:rPr><w:sz w:val="2"/></w:rPr></w:pPr></w:p>`;
  }

  function bang(cot, hang, lech) {
    const vien = ["top", "left", "bottom", "right", "insideH", "insideV"].map((k) => `<w:${k} w:val="nil"/>`).join("");
    const tblPr = `<w:tblPr><w:tblW w:w="${Math.round(cot.reduce((a, b) => a + b, 0) * CM)}" w:type="dxa"/>` +
      (lech ? `<w:tblInd w:w="${Math.round(lech * CM)}" w:type="dxa"/>` : "") +
      `<w:tblBorders>${vien}</w:tblBorders><w:tblLayout w:type="fixed"/><w:tblLook w:val="0000"/></w:tblPr>`;
    const luoi = "<w:tblGrid>" + cot.map((c) => `<w:gridCol w:w="${Math.round(c * CM)}"/>`).join("") + "</w:tblGrid>";
    const dong = hang.map((h) => "<w:tr>" + h.map((o, i) =>
      `<w:tc><w:tcPr><w:tcW w:w="${Math.round(cot[i] * CM)}" w:type="dxa"/></w:tcPr>${o.join("") || doan("")}</w:tc>`).join("") + "</w:tr>").join("");
    return `<w:tbl>${tblPr}${luoi}${dong}</w:tbl>`;
  }

  function goi(than) {
    return '<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage">' +
      '<pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData>' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
      "</Relationships></pkg:xmlData></pkg:part>" +
      '<pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData>' +
      '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>' + than + "</w:body></w:document>" +
      "</pkg:xmlData></pkg:part></pkg:package>";
  }

  /* ------------------------------------------------------------ ngày tháng theo mục II.4 */
  function chuNgay(diaDanh, ngay, namTrong) {
    const dd = (diaDanh || "").trim() || "......";
    if (namTrong) return `${dd}, ngày      tháng      năm ${namTrong}`;   // chờ ký: để trống ngày, tháng cho văn thư ghi
    if (!ngay) return `${dd}, ngày ..... tháng ..... năm ......`;
    const d = ngay.getDate(), m = ngay.getMonth() + 1;
    const n = d < 10 ? "0" + d : String(d);
    const t = m < 3 ? "0" + m : String(m);   // ngày dưới 10 và tháng 1, 2 ghi thêm số 0
    return `${dd}, ngày ${n} tháng ${t} năm ${ngay.getFullYear()}`;
  }

  /* Kính gửi (mục II.9 điểm b, d): một nơi thì ghi cùng dòng, canh giữa; nhiều nơi thì mỗi nơi một dòng,
     gạch đầu dòng thẳng hàng dưới dấu hai chấm, cuối dòng chấm phẩy, dòng cuối dấu chấm. */
  function kinhGui(ds) {
    const noi = (ds || []).map((x) => x.trim().replace(/^[-–•+]\s*/, "").replace(/[;.,]+$/, "")).filter(Boolean);
    if (!noi.length) return "";
    if (noi.length === 1) return doan("Kính gửi: " + noi[0] + ".", { co: 14, truoc: 12, sau: 6 });
    const LE = 1985;   // 3,5 cm
    const lui = LE + Math.round((doRong("Kính gửi:", 14, false) - doRong("-", 14, false) / 2) * 20);
    let x = doan("Kính gửi:", { co: 14, truoc: 12, canh: "left", trai: LE });
    noi.forEach((n, i) => { x += doan("- " + n + (i === noi.length - 1 ? "." : ";"), { co: 14, canh: "left", trai: lui, sau: i === noi.length - 1 ? 6 : 0 }); });
    return x;
  }

  /* o: { chuQuan, coQuan, soKyHieu, veViec, diaDanh, ngay (Date|null), namTrong, tenLoai, trichYeu, kinhGui[] } */
  function dauVanBan(o) {
    return goi(thanDau(o) + doan("", { canh: "both", co: 14 }));
  }
  function thanDau(o) {
    const COT_TRAI = 6.5, COT_PHAI = 10.5, LECH = -0.5;
    const cq = (o.coQuan || "TÊN CƠ QUAN, TỔ CHỨC").toUpperCase();
    const tn = "Độc lập - Tự do - Hạnh phúc";
    const trai = [];
    if (o.chuQuan) trai.push(doan(o.chuQuan.toUpperCase(), { co: 12 }));
    trai.push(doan(cq, { co: 12, dam: true }), duongKe(COT_TRAI - 0.38, Math.min(doRong(cq, 12, true), 140) * 0.4));
    const phai = [doan("CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM", { co: 12, dam: true }), doan(tn, { co: 13, dam: true }),
      duongKe(COT_PHAI - 0.38, doRong(tn, 13, true))];
    const so = [doan(o.soKyHieu ? "Số: " + o.soKyHieu.replace(/^Số\s*:\s*/i, "") : "Số:          /.....-.....", { co: 13, truoc: 6 })];
    if (o.veViec) so.push(doan("V/v " + o.veViec.replace(/^V\/v\s*/i, ""), { co: 12, truoc: 6 }));
    const ngay = [doan(chuNgay(o.diaDanh, o.ngay, o.namTrong), { co: 14, nghieng: true, truoc: 6 })];
    let than = bang([COT_TRAI, COT_PHAI], [[trai, phai], [so, ngay]], LECH);
    if (o.tenLoai) {
      than += doan(o.tenLoai.toUpperCase(), { co: 14, dam: true, truoc: 18, giu: true });
      const ty = (o.trichYeu || "").trim();
      if (ty) {
        than += doan(ty, { co: 14, dam: true, giu: true });
        than += duongKe(16, Math.min(doRong(ty, 14, true), 420) * 0.45);
      }
    }
    if (o.kinhGui) than += kinhGui(o.kinhGui);
    return than;
  }

  /* Nơi nhận: mỗi dòng gạch đầu dòng, cuối dòng chấm phẩy, dòng "Lưu" cuối cùng kết thúc bằng dấu chấm. */
  function chuanNoiNhan(ds) {
    const dong = ds.map((x) => x.trim().replace(/^[-–•]\s*/, "").replace(/[;.,]+$/, "")).filter(Boolean);
    const luu = dong.findIndex((x) => /^Lưu\s*:?/i.test(x));
    let dsLuu = luu >= 0 ? dong.splice(luu, 1)[0] : "Lưu: VT";
    dsLuu = dsLuu.replace(/^Lưu\s*:?\s*/i, "Lưu: ");
    return dong.map((x) => "- " + x + ";").concat(["- " + dsLuu + "."]);
  }

  /* o: { noiNhan: string[], thamQuyen ("KT. GIÁM ĐỐC"...), chucVu, hoTen } */
  function khoiKy(o) {
    return goi(thanKy(o));
  }
  function thanKy(o) {
    const trai = [doan("Nơi nhận:", { co: 12, dam: true, nghieng: true, canh: "left", truoc: 12 })]
      .concat(chuanNoiNhan(o.noiNhan || []).map((x) => doan(x, { co: 11, canh: "left" })));
    const phai = [];
    const tq = (o.thamQuyen || "").trim(), cv = (o.chucVu || "").trim() || "QUYỀN HẠN, CHỨC VỤ CỦA NGƯỜI KÝ";
    if (tq) phai.push(doan(tq.toUpperCase(), { co: 14, dam: true, truoc: 12 }));
    phai.push(doan(cv.toUpperCase(), { co: 14, dam: true, truoc: tq ? 0 : 12 }));
    for (let i = 0; i < 4; i++) phai.push(doan("", { co: 14 }));
    phai.push(doan((o.hoTen || "").trim() || "Họ và tên", { co: 14, dam: true }));
    return bang([8, 8], [[trai, phai]], 0);
  }

  goc.ND30Khoi = { dauVanBan, khoiKy, thanDau, thanKy, kinhGui, chuNgay, chuanNoiNhan, doan };
})(typeof window !== "undefined" ? window : globalThis);
