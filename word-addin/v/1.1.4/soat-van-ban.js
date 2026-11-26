/* Soát thể thức văn bản .docx theo Phụ lục I Nghị định 30/2020/NĐ-CP ngày 05/3/2020 của Chính phủ.
   Chạy hoàn toàn trên trình duyệt: giải nén .docx bằng DecompressionStream, đọc XML bằng DOMParser.
   Không thư viện ngoài, không gửi file đi đâu. Căn cứ đối chiếu nguyên văn ngày 07/11/2026
   (tai-nguyen/van-ban-phap-ly/nd-30-2020-phu-luc-i-trich-van-ban.txt trong vault của người làm kênh).
   window.SoatVanBan.soat(arrayBuffer, tenFile) -> Promise<{tong_quan, ket_qua[]}> */
(function () {
  "use strict";
  const W = "http://schemas.openxmlformats.org/wordprocessingml/2006/main";
  const A = "http://schemas.openxmlformats.org/drawingml/2006/main";
  const R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships";
  const PL = "Phụ lục I Nghị định 30/2020/NĐ-CP";

  /* ---------------------------------------------------------------- giải nén .docx */
  async function giaiNen(buf) {
    const dv = new DataView(buf), u8 = new Uint8Array(buf);
    let eocd = -1;
    for (let i = buf.byteLength - 22; i >= Math.max(0, buf.byteLength - 66000); i--) {
      if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
    }
    if (eocd < 0) throw new Error("KHONG_PHAI_DOCX");
    const soMuc = dv.getUint16(eocd + 10, true);
    let p = dv.getUint32(eocd + 16, true);
    const td = new TextDecoder("utf-8"), tep = {};
    for (let k = 0; k < soMuc; k++) {
      if (dv.getUint32(p, true) !== 0x02014b50) break;
      const kieu = dv.getUint16(p + 10, true), nen = dv.getUint32(p + 20, true);
      const dTen = dv.getUint16(p + 28, true), dPhu = dv.getUint16(p + 30, true), dGhi = dv.getUint16(p + 32, true);
      const viTri = dv.getUint32(p + 42, true);
      const ten = td.decode(u8.subarray(p + 46, p + 46 + dTen));
      tep[ten] = { kieu, nen, viTri };
      p += 46 + dTen + dPhu + dGhi;
    }
    async function doc(ten) {
      const t = tep[ten];
      if (!t) return null;
      const n = dv.getUint16(t.viTri + 26, true), m = dv.getUint16(t.viTri + 28, true);
      const du = u8.subarray(t.viTri + 30 + n + m, t.viTri + 30 + n + m + t.nen);
      if (t.kieu === 0) return td.decode(du);
      if (t.kieu !== 8) throw new Error("NEN_LA");
      const ds = new DecompressionStream("deflate-raw");
      const ra = new Blob([du]).stream().pipeThrough(ds);
      return await new Response(ra).text();
    }
    return { co: (t) => !!tep[t], doc, ds: Object.keys(tep) };
  }

  /* ---------------------------------------------------------------- tiện ích XML */
  const xml = (s) => s ? new DOMParser().parseFromString(s, "application/xml") : null;
  const con = (el, ten) => { if (!el) return null; for (const c of el.children) if (c.localName === ten && c.namespaceURI === W) return c; return null; };
  const tat = (el, ten) => el ? Array.from(el.getElementsByTagNameNS(W, ten)) : [];
  const thuoc = (el, ten) => el ? (el.getAttributeNS(W, ten) ?? el.getAttribute("w:" + ten)) : null;
  const so = (v) => (v == null || v === "") ? null : Number(v);
  const bat = (el) => { if (!el) return null; const v = thuoc(el, "val"); return !(v === "0" || v === "false" || v === "none"); };

  function docRPr(rPr) {
    if (!rPr) return {};
    const o = {}, f = con(rPr, "rFonts");
    if (f) { const a = thuoc(f, "ascii") || thuoc(f, "hAnsi"); const t = thuoc(f, "asciiTheme") || thuoc(f, "hAnsiTheme");
      if (a) o.font = a; else if (t) o.fontTheme = t; }
    const sz = con(rPr, "sz"); if (sz) o.sz = so(thuoc(sz, "val")) / 2;
    const b = con(rPr, "b"); if (b) o.b = bat(b);
    const i = con(rPr, "i"); if (i) o.i = bat(i);
    const c = con(rPr, "color"); if (c) o.color = (thuoc(c, "val") || "").toUpperCase();
    const caps = con(rPr, "caps"); if (caps) o.caps = bat(caps);
    return o;
  }
  function docPPr(pPr) {
    if (!pPr) return {};
    const o = {};
    const jc = con(pPr, "jc"); if (jc) o.jc = thuoc(jc, "val");
    const ind = con(pPr, "ind");
    if (ind) { const fl = thuoc(ind, "firstLine"), hg = thuoc(ind, "hanging"); if (fl != null) o.firstLine = so(fl); if (hg != null) o.firstLine = -so(hg); }
    const sp = con(pPr, "spacing");
    if (sp) { const bf = thuoc(sp, "before"), af = thuoc(sp, "after"), ln = thuoc(sp, "line"), lr = thuoc(sp, "lineRule");
      if (bf != null) o.before = so(bf); if (af != null) o.after = so(af); if (ln != null) o.line = so(ln); if (lr) o.lineRule = lr; }
    if (con(pPr, "numPr")) o.list = true;
    const ps = con(pPr, "pStyle"); if (ps) o.style = thuoc(ps, "val");
    return o;
  }

  /* ---------------------------------------------------------------- kiểu (styles) */
  function bangKieu(sx, theme) {
    const kieu = {}, mac = { r: {}, p: {} };
    let kieuDoanMacDinh = null;
    if (sx) {
      const dd = tat(sx, "docDefaults")[0];
      if (dd) { mac.r = docRPr(tat(dd, "rPr")[0]); mac.p = docPPr(tat(dd, "pPr")[0]); }
      for (const s of tat(sx, "style")) {
        const id = thuoc(s, "styleId"), loai = thuoc(s, "type");
        const goc = con(s, "basedOn");
        kieu[id] = { loai, goc: goc ? thuoc(goc, "val") : null, r: docRPr(con(s, "rPr")), p: docPPr(con(s, "pPr")), ten: (con(s, "name") && thuoc(con(s, "name"), "val")) || id };
        if (loai === "paragraph" && thuoc(s, "default") === "1") kieuDoanMacDinh = id;
      }
    }
    const fTheme = { minor: "", major: "" };
    if (theme) {
      const mi = theme.getElementsByTagNameNS(A, "minorFont")[0], ma = theme.getElementsByTagNameNS(A, "majorFont")[0];
      const lat = (x) => x && x.getElementsByTagNameNS(A, "latin")[0] ? x.getElementsByTagNameNS(A, "latin")[0].getAttribute("typeface") : "";
      fTheme.minor = lat(mi); fTheme.major = lat(ma);
    }
    function chuoi(id) { const ds = []; let k = 0; while (id && kieu[id] && k++ < 20) { ds.unshift(kieu[id]); id = kieu[id].goc; } return ds; }
    return {
      mac, kieuDoanMacDinh,
      tenKieu: (id) => (kieu[id] || {}).ten || id,
      gopR(pStyle, rStyle, truc) {
        const o = Object.assign({}, mac.r);
        for (const k of chuoi(pStyle || kieuDoanMacDinh)) Object.assign(o, k.r);
        for (const k of chuoi(rStyle)) Object.assign(o, k.r);
        Object.assign(o, truc);
        if (!o.font && o.fontTheme) o.font = /major/i.test(o.fontTheme) ? fTheme.major : fTheme.minor;
        if (!o.font) o.font = "Times New Roman"; // mặc định của chuẩn OOXML khi không khai báo
        if (!o.sz) o.sz = 10;
        return o;
      },
      gopP(pStyle, truc) {
        const o = Object.assign({}, mac.p);
        for (const k of chuoi(pStyle || kieuDoanMacDinh)) Object.assign(o, k.p);
        Object.assign(o, truc);
        return o;
      },
    };
  }

  /* ---------------------------------------------------------------- đọc đoạn văn */
  function chuDoan(p) {
    let t = "";
    for (const el of p.getElementsByTagNameNS(W, "*")) {
      if (el.localName === "t") t += el.textContent;
      else if (el.localName === "tab") t += "\t";
      else if (el.localName === "br" || el.localName === "cr") t += "\n";
    }
    return t;
  }
  function trongBang(p) { let e = p.parentElement; while (e) { if (e.localName === "tc" || e.localName === "txbxContent") return e; e = e.parentElement; } return null; }

  function docDoan(doc, kb) {
    const ds = [];
    let stt = 0;
    for (const p of tat(doc, "p")) {
      let e = p.parentElement, boQua = false;
      while (e) { if (e.localName === "Fallback") { boQua = true; break; } e = e.parentElement; }
      if (boQua) continue; // bản dự phòng của hộp văn bản, trùng nội dung với bản chính
      const pPrT = docPPr(con(p, "pPr"));
      const pp = kb.gopP(pPrT.style, pPrT);
      const run = [];
      for (const r of tat(p, "r")) {
        if (r.parentElement && r.parentElement.localName === "del") continue;
        let t = "";
        for (const c of r.children) {
          if (c.localName === "t") t += c.textContent;
          else if (c.localName === "tab") t += "\t";
        }
        if (!t) continue;
        const rPr = con(r, "rPr");
        const rs = rPr && con(rPr, "rStyle") ? thuoc(con(rPr, "rStyle"), "val") : null;
        run.push({ t, p: kb.gopR(pPrT.style, rs, docRPr(rPr)) });
      }
      const text = run.map((x) => x.t).join("");
      const tc = trongBang(p);
      const d = { stt: 0, text, gon: text.replace(/\s+/g, " ").trim(), run, pp, tc, kieu: pPrT.style };
      if (d.gon) d.stt = ++stt;
      ds.push(d);
    }
    return ds;
  }

  /* thuộc tính chiếm đa số theo số ký tự */
  function daSo(d, ham) {
    const dem = new Map();
    for (const r of d.run) { const n = r.t.replace(/\s/g, "").length; if (!n) continue; const v = ham(r.p); dem.set(v, (dem.get(v) || 0) + n); }
    let tot = null, max = -1; for (const [v, n] of dem) if (n > max) { max = n; tot = v; }
    return tot;
  }
  /* như daSo nhưng chỉ tính trên đoạn chữ khớp mẫu re (Quốc hiệu, Tiêu ngữ có khi nằm chung một đoạn) */
  function daSoKhop(d, re, ham) {
    const m = re.exec(d.text); if (!m) return daSo(d, ham);
    const a = m.index, b = m.index + m[0].length, dem = new Map();
    let vt = 0;
    for (const r of d.run) {
      const s = Math.max(a, vt), e = Math.min(b, vt + r.t.length);
      if (e > s) { const n = r.t.slice(s - vt, e - vt).replace(/\s/g, "").length; if (n) { const v = ham(r.p); dem.set(v, (dem.get(v) || 0) + n); } }
      vt += r.t.length;
    }
    let tot = null, max = -1; for (const [v, n] of dem) if (n > max) { max = n; tot = v; }
    return tot;
  }
  const coChu = (d) => d.run.reduce((s, r) => s + r.t.replace(/\s/g, "").length, 0);
  const trich = (s, n = 70) => { s = s.replace(/\s+/g, " ").trim(); return s.length > n ? s.slice(0, n - 1) + "…" : s; };
  const mm = (tw) => Math.round(tw / 56.6929 * 10) / 10;
  const vd = (d) => ({ doan: d.stt, trich: trich(d.gon) });

  /* ---------------------------------------------------------------- các quy tắc */
  async function soat(buf, tenFile) {
    let z;
    try { z = await giaiNen(buf); } catch (e) { throw new Error("Không mở được file. Chỉ nhận file Word .docx (file .doc cũ: mở bằng Word, chọn Lưu thành .docx)."); }
    if (!z.co("word/document.xml")) throw new Error("File này không phải văn bản Word .docx.");
    const doc = xml(await z.doc("word/document.xml"));
    const sx = xml(await z.doc("word/styles.xml"));
    const theme = xml(await z.doc("word/theme/theme1.xml"));
    const rels = xml(await z.doc("word/_rels/document.xml.rels"));
    const app = await z.doc("docProps/app.xml");
    const kb = bangKieu(sx, theme);
    const doan = docDoan(doc, kb);
    const coNoiDung = doan.filter((d) => d.gon);
    const kq = [];
    const them = (o) => kq.push(Object.assign({ vi_du: [] }, o));

    if (coNoiDung.length === 0) throw new Error("Văn bản trống, không có chữ để soát.");

    // Thân bài: đoạn ngoài bảng, đủ dài, không canh giữa, không viết hoa toàn bộ
    const than = coNoiDung.filter((d) => !d.tc && d.gon.length >= 80 && d.pp.jc !== "center" && d.gon !== d.gon.toUpperCase());

    /* 1. Khổ giấy, lề (mục I.1, I.2, I.3) */
    const sect = tat(doc, "sectPr");
    let loiGiay = [], loiLe = [], ngang = false;
    sect.forEach((s, i) => {
      const sz = con(s, "pgSz"), mg = con(s, "pgMar");
      if (sz) {
        const w = so(thuoc(sz, "w")), h = so(thuoc(sz, "h"));
        const a4 = (x, y) => Math.abs(x - 11906) <= 60 && Math.abs(y - 16838) <= 60;
        if (a4(w, h)) {} else if (a4(h, w)) ngang = true;
        else loiGiay.push(`Phần ${i + 1}: ${mm(w)} × ${mm(h)} mm`);
      }
      if (mg) {
        const v = { tren: Math.abs(so(thuoc(mg, "top"))), duoi: Math.abs(so(thuoc(mg, "bottom"))), trai: so(thuoc(mg, "left")), phai: so(thuoc(mg, "right")) };
        const sai = [];
        const ngoai = (x, a, b) => mm(x) < a - 0.3 || mm(x) > b + 0.3;
        if (ngoai(v.tren, 20, 25)) sai.push(`trên ${mm(v.tren)} mm`);
        if (ngoai(v.duoi, 20, 25)) sai.push(`dưới ${mm(v.duoi)} mm`);
        if (ngoai(v.trai, 30, 35)) sai.push(`trái ${mm(v.trai)} mm`);
        if (ngoai(v.phai, 15, 20)) sai.push(`phải ${mm(v.phai)} mm`);
        if (sai.length) loiLe.push((sect.length > 1 ? `Phần ${i + 1}: ` : "") + sai.join(", "));
      }
    });
    them(loiGiay.length ? { muc: "loi", ma: "kho-giay", tieu_de: "Khổ giấy không phải A4", chi_tiet: loiGiay.join("; "), can_cu: `Mục I.1 Phần I ${PL}: khổ A4 (210 × 297 mm).`, cach_sua: "Layout › Size › A4." }
      : { muc: "dat", ma: "kho-giay", tieu_de: ngang ? "Khổ A4 (có phần trình bày ngang)" : "Khổ giấy A4", chi_tiet: ngang ? "Trình bày ngang chỉ dùng khi văn bản có bảng, biểu không làm thành phụ lục riêng (mục I.2)." : "", can_cu: `Mục I.1, I.2 Phần I ${PL}.` });
    them(loiLe.length ? { muc: "loi", ma: "le", tieu_de: "Lề trang chưa đúng", chi_tiet: loiLe.join("; ") + ". Đúng: trên, dưới 20–25 mm; trái 30–35 mm; phải 15–20 mm.", can_cu: `Mục I.3 Phần I ${PL}.`, cach_sua: "Layout › Margins › Custom Margins: Top 2 cm, Bottom 2 cm, Left 3 cm, Right 1,5 cm (hoặc trong khoảng cho phép)." }
      : { muc: "dat", ma: "le", tieu_de: "Lề trang đúng khoảng quy định", can_cu: `Mục I.3 Phần I ${PL}.` });

    /* 2. Phông chữ, màu chữ (mục I.4) */
    const phong = new Map(), mau = [];
    for (const d of coNoiDung) for (const r of d.run) {
      const n = r.t.replace(/[\s\d.,;:()\-–/]/g, "").length; if (!n) continue;
      const f = (r.p.font || "").trim();
      if (!/^times new roman$/i.test(f)) { const x = phong.get(f) || { n: 0, d: d }; x.n += n; phong.set(f, x); }
      if (r.p.color && r.p.color !== "AUTO" && r.p.color !== "000000") mau.push({ d, mau: r.p.color, t: r.t });
    }
    if (phong.size) {
      const ds = [...phong.entries()].sort((a, b) => b[1].n - a[1].n);
      them({ muc: "loi", ma: "phong", tieu_de: "Có chữ không dùng phông Times New Roman", chi_tiet: "Phông khác: " + ds.map(([f, x]) => `${f || "(không rõ)"} (${x.n} ký tự)`).join(", ") + ".",
        can_cu: `Mục I.4 Phần I ${PL}: phông Times New Roman, bộ mã Unicode, màu đen.`, cach_sua: "Ctrl + A, chọn phông Times New Roman. Sửa luôn trong Style Normal (chuột phải Normal › Modify) để đoạn mới không bị lại.",
        vi_du: ds.slice(0, 4).map(([f, x]) => vd(x.d)), video: "59" });
    } else them({ muc: "dat", ma: "phong", tieu_de: "Toàn bộ chữ dùng Times New Roman", can_cu: `Mục I.4 Phần I ${PL}.` });
    if (mau.length) {
      const cacMau = [...new Set(mau.map((x) => "#" + x.mau))];
      them({ muc: "loi", ma: "mau", tieu_de: "Có chữ không phải màu đen", chi_tiet: `${mau.length} đoạn chữ màu ${cacMau.slice(0, 5).join(", ")}. Chữ đỏ, xanh thường là ghi chú soạn thảo quên xoá.`,
        can_cu: `Mục I.4 Phần I ${PL}: phông chữ màu đen.`, cach_sua: "Ctrl + A › Font Color › Automatic (hoặc Black).", vi_du: [...new Map(mau.map((x) => [x.d.stt, x.d])).values()].slice(0, 5).map(vd), video: "59" });
    } else them({ muc: "dat", ma: "mau", tieu_de: "Chữ màu đen", can_cu: `Mục I.4 Phần I ${PL}.` });

    /* 3. Nội dung: cỡ chữ, canh đều, lùi đầu dòng, giãn dòng, cách đoạn (mục II.6 điểm e) */
    if (than.length) {
      const saiCo = than.filter((d) => { const c = daSo(d, (p) => p.sz); return c < 13 || c > 14; });
      them(saiCo.length ? { muc: "loi", ma: "co-chu", tieu_de: "Cỡ chữ nội dung ngoài khoảng 13–14", chi_tiet: `${saiCo.length}/${than.length} đoạn nội dung, ví dụ cỡ ${daSo(saiCo[0], (p) => p.sz)}.`,
          can_cu: `Mục II.6 điểm e Phần I ${PL}: nội dung văn bản cỡ chữ từ 13 đến 14.`, cach_sua: "Bôi phần nội dung, chọn cỡ 14 (hoặc 13). Gọn nhất: sửa cỡ trong Style Normal.", vi_du: saiCo.slice(0, 5).map(vd) }
        : { muc: "dat", ma: "co-chu", tieu_de: "Cỡ chữ nội dung 13–14", can_cu: `Mục II.6 điểm e Phần I ${PL}.` });

      const khongDeu = than.filter((d) => d.pp.jc !== "both" && d.pp.jc !== "distribute");
      if (khongDeu.length > than.length * 0.2) them({ muc: "canh-bao", ma: "canh-deu", tieu_de: "Nội dung chưa canh đều hai lề", chi_tiet: `${khongDeu.length}/${than.length} đoạn nội dung đang canh trái hoặc canh khác.`,
        can_cu: `Mục II.6 điểm e Phần I ${PL}: nội dung được canh đều cả hai lề.`, cach_sua: "Bôi nội dung, bấm Ctrl + J.", vi_du: khongDeu.slice(0, 4).map(vd) });
      else them({ muc: "dat", ma: "canh-deu", tieu_de: "Nội dung canh đều hai lề", can_cu: `Mục II.6 điểm e Phần I ${PL}.` });

      const thuong = than.filter((d) => !d.pp.list && !/^[-+•]/.test(d.gon));
      const saiLui = thuong.filter((d) => { const f = d.pp.firstLine || 0; return !(Math.abs(f - 567) <= 30 || Math.abs(f - 720) <= 30); });
      if (thuong.length && saiLui.length > thuong.length * 0.2) them({ muc: "canh-bao", ma: "lui-dau-dong", tieu_de: "Đầu dòng chưa lùi 1 cm hoặc 1,27 cm",
        chi_tiet: `${saiLui.length}/${thuong.length} đoạn, ví dụ đang lùi ${((saiLui[0].pp.firstLine || 0) / 567).toFixed(2).replace(".", ",")} cm.`,
        can_cu: `Mục II.6 điểm e Phần I ${PL}: khi xuống dòng, chữ đầu dòng lùi vào 1 cm hoặc 1,27 cm.`, cach_sua: "Bôi nội dung › chuột phải › Paragraph › Special: First line, By: 1 cm (hoặc 1,27 cm). Đừng lùi bằng phím cách hay Tab.", vi_du: saiLui.slice(0, 4).map(vd) });
      else if (thuong.length) them({ muc: "dat", ma: "lui-dau-dong", tieu_de: "Đầu dòng lùi đúng 1 cm hoặc 1,27 cm", can_cu: `Mục II.6 điểm e Phần I ${PL}.` });

      const saiDong = than.filter((d) => {
        const p = d.pp, co = daSo(d, (x) => x.sz) || 14;
        if (!p.line) return false;
        if (!p.lineRule || p.lineRule === "auto") return p.line < 236 || p.line > 364;
        const pt = p.line / 20; return pt < co * 1.0 || pt > co * 1.75;
      });
      if (saiDong.length) {
        const p = saiDong[0].pp;
        const mo = (!p.lineRule || p.lineRule === "auto") ? `${(p.line / 240).toFixed(2).replace(".", ",")} dòng` : `${p.lineRule === "exact" ? "Exactly" : "At least"} ${p.line / 20}pt`;
        them({ muc: "loi", ma: "gian-dong", tieu_de: "Giãn dòng ngoài khoảng dòng đơn đến 1,5 dòng", chi_tiet: `${saiDong.length}/${than.length} đoạn, ví dụ đang đặt ${mo}.`,
          can_cu: `Mục II.6 điểm e Phần I ${PL}: khoảng cách giữa các dòng tối thiểu là dòng đơn, tối đa là 1,5 lines.`, cach_sua: "Bôi nội dung › Paragraph › Line spacing: Single, 1.5 lines, hoặc Exactly 17–20pt với cỡ 14.", vi_du: saiDong.slice(0, 4).map(vd) });
      } else them({ muc: "dat", ma: "gian-dong", tieu_de: "Giãn dòng trong khoảng cho phép", can_cu: `Mục II.6 điểm e Phần I ${PL}.` });

      const sat = than.filter((d) => Math.max(d.pp.before || 0, d.pp.after || 0) < 118);
      if (sat.length > than.length * 0.3) them({ muc: "canh-bao", ma: "cach-doan", tieu_de: "Khoảng cách giữa các đoạn dưới 6pt", chi_tiet: `${sat.length}/${than.length} đoạn có cách trên, cách dưới đều nhỏ hơn 6pt.`,
        can_cu: `Mục II.6 điểm e Phần I ${PL}: khoảng cách giữa các đoạn văn tối thiểu là 6pt.`, cach_sua: "Bôi nội dung › Paragraph › Spacing Before: 6pt, After: 6pt.", vi_du: sat.slice(0, 3).map(vd) });
      else them({ muc: "dat", ma: "cach-doan", tieu_de: "Cách đoạn từ 6pt", can_cu: `Mục II.6 điểm e Phần I ${PL}.` });
    }

    /* 4. Số trang (mục I.7) */
    const relMap = {};
    if (rels) for (const r of rels.getElementsByTagName("Relationship")) relMap[r.getAttribute("Id")] = "word/" + r.getAttribute("Target").replace(/^\/?word\//, "");
    const coPage = async (tep) => { const s = await z.doc(tep); if (!s) return null; return /PAGE(?!S)\b/.test(s.replace(/NUMPAGES|SECTIONPAGES/g, "")) && /instrText|fldSimple/.test(s) ? s : null; };
    let pageDau = false, pageChan = false, jcDau = null, trangDau = true;
    const caiDat = await z.doc("word/settings.xml");
    const chanLe = !!caiDat && /<w:evenAndOddHeaders(?![^>]*w:val="(?:0|false)")/.test(caiDat);
    for (const [i, s] of sect.entries()) {
      if (i === 0 && !con(s, "titlePg")) trangDau = false;
      for (const h of Array.from(s.children).filter((c) => c.localName === "headerReference" || c.localName === "footerReference")) {
        const tep = relMap[h.getAttributeNS(R, "id") || h.getAttribute("r:id")]; if (!tep) continue;
        const loai = thuoc(h, "type");
        if (loai === "even" && !chanLe) continue; // đầu, chân trang chẵn chỉ dùng khi bật Different Odd & Even
        if (loai === "first" && !con(s, "titlePg")) continue;
        const s2 = await coPage(tep); if (!s2) continue;
        if (h.localName === "footerReference") pageChan = true;
        else if (loai !== "first") { pageDau = true; const x = xml(s2); const pjc = tat(x, "jc")[0]; jcDau = pjc ? thuoc(pjc, "val") : jcDau; }
      }
    }
    const soTrang = app ? Number((app.match(/<Pages>(\d+)<\/Pages>/) || [])[1] || 0) : 0;
    if (pageChan) them({ muc: "loi", ma: "so-trang", tieu_de: "Số trang đặt ở chân trang", chi_tiet: "Số trang phải đặt ở phần lề trên, canh giữa.",
      can_cu: `Mục I.7 Phần I ${PL}: số trang canh giữa theo chiều ngang trong phần lề trên, không hiển thị số trang thứ nhất.`, cach_sua: "Bấm đúp chân trang, xoá số. Insert › Page Number › Top of Page › Plain Number 2 (giữa), tick Different First Page.", video: "47" });
    else if (!pageDau && (soTrang > 1 || coNoiDung.reduce((s, d) => s + d.gon.length, 0) > 3500))
      them({ muc: "canh-bao", ma: "so-trang", tieu_de: "Văn bản nhiều trang nhưng chưa đánh số trang", can_cu: `Mục I.7 Phần I ${PL}.`, cach_sua: "Insert › Page Number › Top of Page › Plain Number 2, tick Different First Page.", video: "47" });
    else if (pageDau && !trangDau) them({ muc: "loi", ma: "so-trang", tieu_de: "Trang đầu đang hiện số trang", can_cu: `Mục I.7 Phần I ${PL}: không hiển thị số trang thứ nhất.`, cach_sua: "Bấm đúp vào đầu trang, tick Different First Page.", video: "47" });
    else if (pageDau && jcDau && jcDau !== "center") them({ muc: "canh-bao", ma: "so-trang", tieu_de: "Số trang chưa canh giữa", can_cu: `Mục I.7 Phần I ${PL}.`, cach_sua: "Bấm đúp vào số trang, Ctrl + E." });
    else if (pageDau) them({ muc: "dat", ma: "so-trang", tieu_de: "Số trang ở lề trên, ẩn trang đầu", can_cu: `Mục I.7 Phần I ${PL}.` });

    /* 5. Quốc hiệu, Tiêu ngữ (mục II.1) */
    const dau = coNoiDung.slice(0, 30);
    const reQH = /C[ỘO]NG\s+H[OÒ]À?A?\s+X[ÃA]\s+H[ỘO]I\s+CH[ỦU]\s+NGH[ĨI]A\s+VI[ỆE]T\s+NAM/i;
    const reTN = /Độc\s*lập.{0,4}Tự\s*do.{0,4}Hạnh\s*phúc/i;
    const qh = dau.find((d) => reQH.test(d.gon.normalize("NFC")));
    if (qh) {
      const sai = [], co = daSoKhop(qh, reQH, (p) => p.sz), dam = daSoKhop(qh, reQH, (p) => !!p.b);
      const t = qh.gon.match(/c[ộo]ng.*nam/i)[0];
      if (t !== t.toUpperCase() && !daSo(qh, (p) => !!p.caps)) sai.push("chưa viết in hoa");
      if (/HOÀ/.test(t)) sai.push("Nghị định viết “HÒA” (dấu trên chữ O), bản này viết “HOÀ”");
      if (co < 12 || co > 13) sai.push(`cỡ ${co}, đúng là 12–13`);
      if (!dam) sai.push("chưa in đậm");
      them(sai.length ? { muc: "loi", ma: "quoc-hieu", tieu_de: "Quốc hiệu chưa đúng", chi_tiet: sai.join("; ") + ".", can_cu: `Mục II.1 điểm a Phần I ${PL}: chữ in hoa, cỡ 12–13, đứng, đậm.`, cach_sua: "Gõ lại đúng “CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM”, cỡ 12 hoặc 13, Ctrl + B.", vi_du: [vd(qh)] }
        : { muc: "dat", ma: "quoc-hieu", tieu_de: "Quốc hiệu đúng chữ, cỡ, kiểu", can_cu: `Mục II.1 điểm a Phần I ${PL}.` });
    }
    const tn = dau.find((d) => reTN.test(d.gon.normalize("NFC")));
    if (tn) {
      const sai = [], co = daSoKhop(tn, reTN, (p) => p.sz), dam = daSoKhop(tn, reTN, (p) => !!p.b);
      const t = tn.gon.normalize("NFC").match(/Độc\s*lập.{0,4}Tự\s*do.{0,4}Hạnh\s*phúc/i)[0];
      if (t !== "Độc lập - Tự do - Hạnh phúc") {
        if (/[–—]/.test(t)) sai.push("đang dùng gạch dài (– hoặc —), đúng là gạch nối (-)");
        else if (/\S-|-\S/.test(t)) sai.push("thiếu khoảng trắng hai bên gạch nối");
        else sai.push(`đang viết “${t}”, đúng là “Độc lập - Tự do - Hạnh phúc”`);
      }
      if (co < 13 || co > 14) sai.push(`cỡ ${co}, đúng là 13–14`);
      if (!dam) sai.push("chưa in đậm");
      them(sai.length ? { muc: "loi", ma: "tieu-ngu", tieu_de: "Tiêu ngữ chưa đúng", chi_tiet: sai.join("; ") + ".", can_cu: `Mục II.1 điểm b Phần I ${PL}: chữ in thường, cỡ 13–14, đứng, đậm, giữa các cụm từ có gạch nối (-), có cách chữ.`, cach_sua: "Gõ lại đúng “Độc lập - Tự do - Hạnh phúc” bằng phím gạch ngang thường. Nếu Word vừa tự đổi thành gạch dài thì bấm Ctrl + Z một lần.", vi_du: [vd(tn)] }
        : { muc: "dat", ma: "tieu-ngu", tieu_de: "Tiêu ngữ đúng chữ, gạch nối, cỡ, kiểu", can_cu: `Mục II.1 điểm b Phần I ${PL}.` });
    }

    /* 6. Số, ký hiệu (mục II.3 điểm c) */
    const so_ = dau.find((d) => /^Số\s*[:.]?\s*[\d\s]*\//.test(d.gon) || /^Số\s*:/.test(d.gon));
    if (so_) {
      const sai = [], t = so_.gon;
      if (!/^Số\s*:/.test(t)) sai.push("sau chữ “Số” thiếu dấu hai chấm");
      const m = t.match(/^Số\s*:?\s*(\d+)\s*\//);
      if (m && Number(m[1]) < 10 && m[1].length < 2) sai.push(`số “${m[1]}” nhỏ hơn 10 phải ghi “0${m[1]}”`);
      const kh = (t.split("/").slice(1).join("/") || "").trim();
      if (kh && /\s-|-\s/.test(kh)) sai.push(`ký hiệu “${kh}” có khoảng trắng quanh gạch nối, đúng là không cách chữ`);
      const khIn = kh.replace(/\bTTr\b/g, "TTR"); // "TTr" là chữ viết tắt chuẩn của Tờ trình (Phụ lục III NĐ 30)
      if (kh && khIn !== khIn.toUpperCase()) sai.push(`ký hiệu “${kh}” phải viết in hoa`);
      const co = daSo(so_, (p) => p.sz);
      if (co && co !== 13) sai.push(`cỡ ${co}, đúng là 13`);
      them(sai.length ? { muc: "loi", ma: "so-ky-hieu", tieu_de: "Số, ký hiệu văn bản chưa đúng", chi_tiet: sai.join("; ") + ".", can_cu: `Mục II.3 điểm c Phần I ${PL}: sau “Số” có dấu hai chấm, số nhỏ hơn 10 ghi thêm số 0, ký hiệu in hoa cỡ 13, giữa các nhóm chữ viết tắt có gạch nối, không cách chữ.`, cach_sua: "Sửa trực tiếp dòng Số, ví dụ “Số: 05/BC-UBND”.", vi_du: [vd(so_)] }
        : { muc: "dat", ma: "so-ky-hieu", tieu_de: "Số, ký hiệu văn bản đúng cách viết", can_cu: `Mục II.3 điểm c Phần I ${PL}.` });
    }

    /* 7. Địa danh, ngày tháng (mục II.4) */
    // dòng thời gian ban hành: bắt đầu bằng địa danh, chữ "ngày" nằm gần đầu dòng; không lấy dòng căn cứ, trích yếu có ngày tháng
    const ngay = dau.find((d) => /ngày\s+\d{1,2}\s+tháng\s+\d{1,2}\s+năm\s+\d{4}/.test(d.gon) && !/^(Căn\s+cứ|Theo|Về|V\/v|Số)/i.test(d.gon)
      && d.gon.indexOf("ngày") <= 45 && d.gon.length < 90);
    if (ngay) {
      const sai = [], m = ngay.gon.match(/ngày\s+(\d{1,2})\s+tháng\s+(\d{1,2})\s+năm/);
      if (m[1].length === 1) sai.push(`“ngày ${m[1]}” phải ghi “ngày 0${m[1]}”`);
      if (m[2].length === 1 && (m[2] === "1" || m[2] === "2")) sai.push(`“tháng ${m[2]}” phải ghi “tháng 0${m[2]}”`);
      const dd = ngay.gon.match(/^(.*?)\s*ngày\s+\d/);
      if (dd && dd[1].trim() && !/,$/.test(dd[1].trim())) sai.push(`sau địa danh “${dd[1].trim()}” thiếu dấu phẩy`);
      const nghieng = daSo(ngay, (p) => !!p.i), co = daSo(ngay, (p) => p.sz);
      if (!nghieng) sai.push("chưa in nghiêng");
      if (co < 13 || co > 14) sai.push(`cỡ ${co}, đúng là 13–14`);
      them(sai.length ? { muc: "loi", ma: "ngay-thang", tieu_de: "Dòng địa danh, ngày tháng chưa đúng", chi_tiet: sai.join("; ") + ".", can_cu: `Mục II.4 điểm b, c Phần I ${PL}: ngày nhỏ hơn 10 và tháng 1, 2 ghi thêm số 0; chữ in thường, cỡ 13–14, nghiêng; sau địa danh có dấu phẩy.`, cach_sua: "Sửa trực tiếp, ví dụ “Hà Nội, ngày 05 tháng 02 năm 2026”, rồi Ctrl + I. Sửa cả văn bản một lần: Ctrl + H, tick Use wildcards, tìm “ngày ([1-9]) tháng” thay “ngày 0\\1 tháng”.", vi_du: [vd(ngay)], video: sai.some((x) => /số 0|“ngày|“tháng/.test(x)) ? "49" : "67" }
        : { muc: "dat", ma: "ngay-thang", tieu_de: "Dòng địa danh, ngày tháng đúng", can_cu: `Mục II.4 Phần I ${PL}.` });
    }
    // ngày tháng thiếu số 0 ở chỗ khác trong văn bản (căn cứ, nội dung): chỉ gợi ý
    const ngayKhac = coNoiDung.filter((d) => d !== ngay && /ngày\s+[1-9]\s+tháng|tháng\s+[12]\s+năm/.test(d.gon));
    if (ngayKhac.length) them({ muc: "goi-y", ma: "ngay-khac", tieu_de: "Ngày tháng trong nội dung viết thiếu số 0", chi_tiet: `${ngayKhac.length} đoạn có “ngày 1–9” hoặc “tháng 1, 2” chưa có số 0. Quy định số 0 áp cho dòng thời gian ban hành; viết thống nhất trong cả văn bản thì gọn hơn.`,
      can_cu: `Mục II.4 điểm b Phần I ${PL}.`, cach_sua: "Ctrl + H › More › Use wildcards: tìm “ngày ([1-9]) tháng” thay “ngày 0\\1 tháng”; tìm “tháng ([12]) năm” thay “tháng 0\\1 năm”.", vi_du: ngayKhac.slice(0, 4).map(vd), video: "49" });

    /* 8. Kính gửi (mục II.9 điểm d) */
    const kg = coNoiDung.find((d) => /^Kính\s+gửi/i.test(d.gon));
    const tenLoai = dau.find((d) => /^(BÁO CÁO|TỜ TRÌNH)$/.test(d.gon));
    if (!kg && tenLoai) them({ muc: "canh-bao", ma: "kinh-gui", tieu_de: `${tenLoai.gon === "BÁO CÁO" ? "Báo cáo" : "Tờ trình"} chưa có dòng Kính gửi`,
      chi_tiet: "Nếu văn bản gửi cơ quan, tổ chức cấp trên thì phải có dòng “Kính gửi:” và tên nơi nhận, đặt dưới tên loại và trích yếu. Văn bản nội bộ không gửi cấp trên thì bỏ qua mục này.",
      can_cu: `Mục II.9 điểm b Phần I ${PL}: tờ trình, báo cáo của cấp dưới gửi cấp trên và công văn, nơi nhận gồm phần “Kính gửi”. Thông tư 01/2011/TT-BNV (hết hiệu lực 15/6/2020) chỉ quy định dòng này cho công văn.`,
      cach_sua: "Thêm dòng “Kính gửi: <tên cơ quan cấp trên>” canh giữa, cỡ 13–14, dưới trích yếu.", vi_du: [vd(tenLoai)], video: "58" });
    if (kg && !/^Kính\s+gửi\s*:/i.test(kg.gon)) them({ muc: "loi", ma: "kinh-gui", tieu_de: "Sau “Kính gửi” thiếu dấu hai chấm", can_cu: `Mục II.9 điểm d Phần I ${PL}: sau từ “Kính gửi” có dấu hai chấm (:).`, cach_sua: "Thêm dấu hai chấm: “Kính gửi: …”.", vi_du: [vd(kg)], video: "58" });

    /* 9. Nơi nhận (mục II.9 điểm d, ô 9b) */
    const nn = coNoiDung.find((d) => /^Nơi\s+nhận/i.test(d.gon));
    if (nn) {
      const sai = [];
      if (!/^Nơi\s+nhận\s*:/i.test(nn.gon)) sai.push("thiếu dấu hai chấm sau “Nơi nhận”");
      const co = daSo(nn, (p) => p.sz);
      if (co !== 12) sai.push(`chữ “Nơi nhận” cỡ ${co}, đúng là 12`);
      if (!daSo(nn, (p) => !!p.b) || !daSo(nn, (p) => !!p.i)) sai.push("chữ “Nơi nhận” phải đậm, nghiêng");
      const i0 = coNoiDung.indexOf(nn), dong = [];
      for (let k = i0 + 1; k < coNoiDung.length && dong.length < 25; k++) {
        const d = coNoiDung[k]; if (d.tc !== nn.tc || !/^[-–]/.test(d.gon)) break; dong.push(d);
      }
      if (dong.length) {
        const coDong = dong.map((d) => daSo(d, (p) => p.sz)).filter((c) => c !== 11);
        if (coDong.length) sai.push(`dòng liệt kê cỡ ${coDong[0]}, đúng là 11`);
        const cuoi = dong[dong.length - 1];
        const truocCuoi = dong.slice(0, -1).filter((d) => !/;$/.test(d.gon));
        if (truocCuoi.length) sai.push(`${truocCuoi.length} dòng chưa kết thúc bằng dấu chấm phẩy`);
        if (/^[-–]\s*Lưu/i.test(cuoi.gon) && !/\.$/.test(cuoi.gon)) sai.push("dòng “Lưu: …” cuối cùng phải kết thúc bằng dấu chấm");
      }
      them(sai.length ? { muc: "canh-bao", ma: "noi-nhan", tieu_de: "Phần Nơi nhận chưa đúng cách trình bày", chi_tiet: sai.join("; ") + ".", can_cu: `Mục II.9 điểm d Phần I ${PL}: “Nơi nhận” cỡ 12, nghiêng, đậm, có dấu hai chấm; các dòng cỡ 11, đầu dòng gạch nối, cuối dòng chấm phẩy, dòng “Lưu” cuối cùng.`, cach_sua: "Bôi chữ “Nơi nhận:” cỡ 12, Ctrl + B, Ctrl + I; bôi các dòng bên dưới cỡ 11.", vi_du: [vd(nn)] }
        : { muc: "dat", ma: "noi-nhan", tieu_de: "Phần Nơi nhận đúng cách trình bày", can_cu: `Mục II.9 điểm d Phần I ${PL}.` });
    }

    /* 10. Khối căn cứ ban hành (mục II.6 điểm a) */
    const nhomCC = [];
    for (let k = 0; k < coNoiDung.length; k++) {
      if (!/^Căn\s+cứ\s/.test(coNoiDung[k].gon) || coNoiDung[k].tc) continue;
      const g = [coNoiDung[k]]; while (k + 1 < coNoiDung.length && /^Căn\s+cứ\s/.test(coNoiDung[k + 1].gon)) g.push(coNoiDung[++k]);
      if (g.length >= 2) nhomCC.push({ g, sau: coNoiDung[k + 1] });
    }
    for (const { g, sau } of nhomCC) {
      const sai = [];
      if (g.some((d) => !daSo(d, (p) => !!p.i))) sai.push("dòng căn cứ chưa in nghiêng");
      const giua = g.slice(0, -1).filter((d) => !/;$/.test(d.gon)); if (giua.length) sai.push(`${giua.length} dòng giữa chưa kết thúc bằng dấu chấm phẩy`);
      // Dòng cuối chỉ bắt buộc dấu chấm khi khối căn cứ đứng độc lập (quyết định, quy chế): sau nó là “Theo đề nghị…”
      // hoặc dòng in hoa “QUYẾT ĐỊNH:”. Tờ trình, kế hoạch nối căn cứ vào câu sau bằng dấu phẩy là bình thường.
      const docLap = sau && (/^Theo\s+đề\s+nghị/i.test(sau.gon) || (sau.gon === sau.gon.toUpperCase() && /[A-ZĐ]/.test(sau.gon)));
      const cuoi = g[g.length - 1].gon;
      if (docLap && /^Theo\s+đề\s+nghị/i.test(sau.gon)) {
        if (!/[;.]$/.test(cuoi)) sai.push(`dòng căn cứ cuối kết thúc bằng “${cuoi.slice(-1)}”, nên là dấu chấm phẩy`);
        if (!/\.$/.test(sau.gon)) sai.push(`dòng “Theo đề nghị…” kết thúc bằng “${sau.gon.slice(-1)}”, nên là dấu chấm`);
      } else if (docLap && !/\.$/.test(cuoi)) sai.push(`dòng căn cứ cuối kết thúc bằng “${cuoi.slice(-1)}”, nên là dấu chấm`);
      if (sai.length) them({ muc: "canh-bao", ma: "can-cu", tieu_de: "Khối căn cứ ban hành chưa đúng cách trình bày", chi_tiet: sai.join("; ") + ".", can_cu: `Mục II.6 điểm a Phần I ${PL}: căn cứ ban hành chữ in thường, nghiêng, cỡ 13–14; mỗi căn cứ một dòng, cuối dòng chấm phẩy, dòng cuối dấu chấm.`, cach_sua: "Bôi các dòng căn cứ, Ctrl + I; dòng cuối đổi dấu phẩy, chấm phẩy thành dấu chấm.", vi_du: [vd(g[0])], video: "57" });
    }

    /* 11. Văn bản đã hết hiệu lực được trích dẫn */
    const HHL = [
      [/01\/2011\/TT-BNV/, "Thông tư số 01/2011/TT-BNV (thể thức văn bản)", "Nghị định số 30/2020/NĐ-CP"],
      [/110\/2004\/NĐ-CP/, "Nghị định số 110/2004/NĐ-CP (công tác văn thư)", "Nghị định số 30/2020/NĐ-CP"],
      [/09\/2010\/NĐ-CP/, "Nghị định số 09/2010/NĐ-CP (sửa đổi Nghị định 110/2004)", "Nghị định số 30/2020/NĐ-CP"],
      [/58\/2014\/QH13/, "Luật Bảo hiểm xã hội số 58/2014/QH13", "Luật Bảo hiểm xã hội số 41/2024/QH15 (hiệu lực từ 01/7/2025)"],
    ];
    for (const [re, ten, moi] of HHL) {
      const thay = coNoiDung.filter((d) => re.test(d.gon));
      if (thay.length) them({ muc: "canh-bao", ma: "het-hieu-luc", tieu_de: `Trích dẫn ${ten}`, chi_tiet: `Văn bản này đã được thay bằng ${moi}. Nếu đang dùng làm căn cứ hiện hành thì phải đổi; nếu chỉ nhắc lại lịch sử thì giữ.`, can_cu: "Đối chiếu hiệu lực văn bản trước khi trích dẫn.", cach_sua: `Thay bằng ${moi}, ghi đủ số, ngày ban hành, cơ quan ban hành.`, vi_du: thay.slice(0, 3).map(vd) });
    }

    /* 12. Chữ viết tắt chưa giải thích (khuyến nghị, không phải quy định của NĐ 30) */
    const lamSach = (s) => s.replace(/https?:\S+/g, " ")
      .replace(/(?<![\p{L}])\p{Lu}+(?:\s+\p{Lu}+)+(?![\p{L}])/gu, " "); // cụm nhiều chữ in hoa liền nhau là tiêu đề, không phải chữ tắt
    const toanVan = coNoiDung.filter((d) => !d.tc && d.gon !== d.gon.toUpperCase()).map((d) => lamSach(d.gon)).join("\n");
    const LA_MA = /^(I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII|XIII|XIV|XV|XX)$/;
    const chuaGiai = [];
    const daXet = new Set();
    // bỏ qua chữ tắt nằm trong số ký hiệu văn bản (05/BC-UBND, 28-NQ/TW): đứng sát dấu / hoặc -
    for (const m of toanVan.matchAll(/(?<![\p{L}\d\/\-&])([A-ZĐ]{2,}[A-ZĐ0-9]*)(?![\p{L}\d\/\-&])/gu)) {
      const tu = m[1]; if (daXet.has(tu) || LA_MA.test(tu)) continue; daXet.add(tu);
      const giai = toanVan.indexOf("(" + tu + ")");
      if (giai < 0 || giai > m.index + tu.length + 2) chuaGiai.push(tu);
    }
    if (chuaGiai.length) them({ muc: "goi-y", ma: "viet-tat", tieu_de: "Chữ viết tắt chưa được giải thích ở lần dùng đầu", chi_tiet: chuaGiai.slice(0, 12).join(", ") + (chuaGiai.length > 12 ? ` và ${chuaGiai.length - 12} chữ khác` : "") + ".",
      can_cu: "Khuyến nghị soạn thảo, không phải quy định của Nghị định 30: người đọc ngoài ngành dễ hiểu hơn khi lần đầu ghi đủ tên rồi đặt chữ tắt trong ngoặc, ví dụ “bảo hiểm xã hội (BHXH)”.", cach_sua: "Ở lần xuất hiện đầu tiên ghi đủ tên, chữ tắt trong ngoặc đơn; từ đó về sau mới dùng chữ tắt." });

    /* 13. Lỗi gõ, chỗ trống chưa điền (gợi ý) */
    const goLoi = [];
    for (const d of coNoiDung) {
      const t = d.text;
      if (/^Số\s*:/.test(d.gon) || /\.{3,}/.test(t)) continue; // khoảng trống chờ ghi số, dãy chấm của mẫu là cố ý
      if (/\S {2,}\S/.test(t)) goLoi.push([d, "thừa khoảng trắng"]);
      else if (/\s[,.;:!?](?!\d)/.test(t) && !/\s\.\.\./.test(t)) goLoi.push([d, "khoảng trắng trước dấu câu"]);
      else if (/[,;](?=[\p{L}])/u.test(t)) goLoi.push([d, "thiếu khoảng trắng sau dấu phẩy, chấm phẩy"]);
    }
    if (goLoi.length) them({ muc: "goi-y", ma: "go-loi", tieu_de: "Lỗi gõ khoảng trắng, dấu câu", chi_tiet: `${goLoi.length} đoạn.`, can_cu: "Lỗi chính tả, gõ phím.", cach_sua: "Thừa khoảng trắng: Ctrl + H, tìm hai dấu cách, thay một dấu cách, Replace All vài lần.", vi_du: goLoi.slice(0, 5).map(([d, l]) => Object.assign(vd(d), { ghi: l })) });
    const trong = coNoiDung.filter((d) => /\[[^\]]{0,40}\]|\.{4,}|…{2,}|\bxx\b|\bXXX?\b/.test(d.gon) && !/^Số\s*:/.test(d.gon) && !/ngày\s*\.{0,}\s*tháng/.test(d.gon));
    if (trong.length) them({ muc: "goi-y", ma: "cho-trong", tieu_de: "Còn chỗ trống, chỗ mẫu chưa điền", chi_tiet: `${trong.length} đoạn có dấu ngoặc vuông, dãy dấu chấm hoặc “xx”.`, can_cu: "Soát trước khi trình ký.", cach_sua: "Điền nội dung hoặc xoá phần mẫu.", vi_du: trong.slice(0, 5).map(vd) });

    const dem = (m) => kq.filter((x) => x.muc === m).length;
    return {
      tong_quan: { ten: tenFile, so_doan: coNoiDung.length, so_trang: soTrang || null, loi: dem("loi"), canh_bao: dem("canh-bao"), goi_y: dem("goi-y"), dat: dem("dat"),
        la_van_ban_hanh_chinh: !!(qh || tn || so_ || nn) },
      ket_qua: kq,
    };
  }

  window.SoatVanBan = { soat };
})();
