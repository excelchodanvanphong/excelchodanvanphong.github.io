/* Sửa nhanh thể thức theo Phụ lục I Nghị định 30/2020/NĐ-CP trên bản sao của văn bản.
   Làm trực tiếp trên XML của .docx nên đổi được cả khổ giấy, lề trang (Word 2016–2021 không cho add-in đổi lề).
   ND30SuaNhanh.sua(arrayBuffer, tuyChon) -> Promise<{ buf: Uint8Array, tk }>
   tuyChon: { phong, mau, co, canh, dong, trang } (mặc định bật hết). */
(function (goc) {
  "use strict";
  const W = "http://schemas.openxmlformats.org/wordprocessingml/2006/main";
  const TNR = "Times New Roman";
  const KY_HIEU = /symbol|wingdings|webdings|marlett/i;
  const PPR = ["pStyle", "keepNext", "keepLines", "pageBreakBefore", "framePr", "widowControl", "numPr", "suppressLineNumbers", "pBdr", "shd", "tabs", "suppressAutoHyphens", "kinsoku", "wordWrap", "overflowPunct", "topLinePunct", "autoSpaceDE", "autoSpaceDN", "bidi", "adjustRightInd", "snapToGrid", "spacing", "ind", "contextualSpacing", "mirrorIndents", "suppressOverlap", "jc", "textDirection", "textAlignment", "textboxTightWrap", "outlineLvl", "divId", "cnfStyle", "rPr", "sectPr", "pPrChange"];
  const RPR = ["rStyle", "rFonts", "b", "bCs", "i", "iCs", "caps", "smallCaps", "strike", "dstrike", "outline", "shadow", "emboss", "imprint", "noProof", "snapToGrid", "vanish", "webHidden", "color", "spacing", "w", "kern", "position", "sz", "szCs", "highlight", "u", "effect", "bdr", "shd", "fitText", "vertAlign", "rtl", "cs", "em", "lang", "eastAsianLayout", "specVanish", "oMath", "rPrChange"];
  const SECT = ["headerReference", "footerReference", "footnotePr", "endnotePr", "type", "pgSz", "pgMar", "paperSrc", "pgBorders", "lnNumType", "pgNumType", "cols", "formProt", "vAlign", "noEndnote", "titlePg", "textDirection", "bidi", "rtlGutter", "docGrid", "printerSettings", "sectPrChange"];
  const CM1 = 567, CM127 = 720, PT6 = 120;
  const LE = { top: 1134, bottom: 1134, left: 1701, right: 1134 };   // 2 - 2 - 3 - 2 cm

  /* ---------------------------------------------------------------- tiện ích XML */
  const conCac = (el) => el ? Array.from(el.childNodes).filter((n) => n.nodeType === 1) : [];
  const con = (el, ten) => conCac(el).find((c) => c.localName === ten && c.namespaceURI === W) || null;
  const tat = (el, ten) => el ? Array.from(el.getElementsByTagNameNS(W, ten)) : [];
  const lay = (el, ten) => { if (!el) return null; const v = el.getAttributeNS(W, ten); return v === "" ? (el.hasAttributeNS(W, ten) ? "" : null) : v; };
  const so = (el, ten) => { const v = lay(el, ten); return v == null || v === "" || isNaN(+v) ? undefined : +v; };
  const dat = (el, ten, v) => el.setAttributeNS(W, "w:" + ten, String(v));
  const bo = (el, ...ds) => ds.forEach((t) => { if (el.hasAttributeNS(W, t)) el.removeAttributeNS(W, t); });
  const gan = (v, dich) => v != null && Math.abs(v - dich) <= 20;

  function coTo(el, ...ten) {
    for (let p = el.parentNode; p && p.nodeType === 1; p = p.parentNode) if (ten.includes(p.localName)) return true;
    return false;
  }
  /* Lấy hoặc tạo con theo đúng thứ tự lược đồ OOXML (Word báo hỏng tệp nếu sai thứ tự). */
  function datCon(cha, ten, thuTu) {
    const co = con(cha, ten);
    if (co) return co;
    const moi = cha.ownerDocument.createElementNS(W, "w:" + ten);
    const vt = thuTu.indexOf(ten);
    const sau = conCac(cha).find((c) => c.namespaceURI === W && thuTu.indexOf(c.localName) > vt);
    cha.insertBefore(moi, sau || null);
    return moi;
  }
  function datDau(cha, ten) {   // pPr, rPr luôn là con đầu tiên
    const co = con(cha, ten);
    if (co) return co;
    const moi = cha.ownerDocument.createElementNS(W, "w:" + ten);
    cha.insertBefore(moi, conCac(cha)[0] || null);
    return moi;
  }
  const chu = (p) => tat(p, "t").filter((t) => !coTo(t, "txbxContent")).map((t) => t.textContent).join("");

  /* ---------------------------------------------------------------- kiểu (styles.xml) */
  function docKieu(st) {
    const k = { theoId: {}, macDinhP: null, pMd: null, rMd: null };
    if (!st) return k;
    for (const s of tat(st, "style")) {
      const id = lay(s, "styleId");
      k.theoId[id] = { cha: lay(con(s, "basedOn"), "val"), pPr: con(s, "pPr"), rPr: con(s, "rPr") };
      if (lay(s, "type") === "paragraph" && (lay(s, "default") === "1" || lay(s, "default") === "true")) k.macDinhP = id;
    }
    const dd = tat(st, "docDefaults")[0];
    k.pMd = con(con(dd, "pPrDefault"), "pPr");
    k.rMd = con(con(dd, "rPrDefault"), "rPr");
    return k;
  }
  function theoChuoi(k, id, phan, fn) {
    for (let i = 0, x = id; x && i < 20; i++) {
      const s = k.theoId[x];
      if (!s) break;
      const v = fn(s[phan]);
      if (v !== undefined) return v;
      x = s.cha;
    }
    return undefined;
  }
  const kieuP = (k, p) => lay(con(con(p, "pPr"), "pStyle"), "val") || k.macDinhP;
  function hlP(k, p, fn) {
    const pPr = con(p, "pPr");
    let v = pPr ? fn(pPr) : undefined;
    if (v === undefined) v = theoChuoi(k, kieuP(k, p), "pPr", (x) => x ? fn(x) : undefined);
    if (v === undefined && k.pMd) v = fn(k.pMd);
    return v;
  }
  function hlR(k, r, p, fn) {
    const rPr = con(r, "rPr");
    let v = rPr ? fn(rPr) : undefined;
    if (v === undefined) v = theoChuoi(k, lay(con(rPr, "rStyle"), "val"), "rPr", (x) => x ? fn(x) : undefined);
    if (v === undefined) v = theoChuoi(k, kieuP(k, p), "rPr", (x) => x ? fn(x) : undefined);
    if (v === undefined && k.rMd) v = fn(k.rMd);
    return v;
  }
  const coChu = (k, r, p) => hlR(k, r, p, (x) => so(con(x, "sz"), "val")) || 20;

  /* ---------------------------------------------------------------- từng việc sửa */
  function doiPhong(rf) {
    const ten = ["ascii", "hAnsi", "cs", "eastAsia"].map((t) => lay(rf, t)).filter(Boolean);
    const chuDe = ["asciiTheme", "hAnsiTheme", "cstheme", "eastAsiaTheme"].some((t) => rf.hasAttributeNS(W, t));
    if (!ten.length && !chuDe) return false;
    if (ten.some((t) => KY_HIEU.test(t))) return false;
    if (!chuDe && ten.length === 4 && ten.every((t) => t === TNR)) return false;
    for (const t of ["ascii", "hAnsi", "cs", "eastAsia"]) dat(rf, t, TNR);
    bo(rf, "asciiTheme", "hAnsiTheme", "cstheme", "eastAsiaTheme");
    return true;
  }
  function doiMau(c) {
    const v = (lay(c, "val") || "").toLowerCase();
    if ((v === "auto" || v === "000000") && !c.hasAttributeNS(W, "themeColor")) return false;
    dat(c, "val", "000000");
    bo(c, "themeColor", "themeShade", "themeTint");
    return true;
  }

  function suaDoan(k, p, tc, tk) {
    if (!chu(p).trim()) return;
    const jc = hlP(k, p, (x) => lay(con(x, "jc"), "val") ?? undefined);
    if (["center", "right", "end"].includes(jc)) return;   // tên loại, trích yếu, chữ ký... giữ nguyên
    const pPr = datDau(p, "pPr");
    if (tc.canh) {
      if (jc !== "both") { dat(datCon(pPr, "jc", PPR), "val", "both"); tk.canh++; }
      const dsSo = hlP(k, p, (x) => con(x, "numPr") ? true : undefined);
      const fl = hlP(k, p, (x) => {
        const i = con(x, "ind");
        if (!i) return undefined;
        const h = so(i, "hanging");
        if (h !== undefined) return -h;
        return so(i, "firstLine");
      }) || 0;
      if (!dsSo && fl >= 0 && !gan(fl, CM1) && !gan(fl, CM127)) {
        const i = datCon(pPr, "ind", PPR);
        dat(i, "firstLine", CM1); bo(i, "firstLineChars", "hanging", "hangingChars");
        tk.lui++;
      }
    }
    if (tc.dong) {
      const sp = (t) => hlP(k, p, (x) => so(con(x, "spacing"), t));
      const tu = (t) => hlP(k, p, (x) => { const s = con(x, "spacing"); return s && s.hasAttributeNS(W, t) ? lay(s, t) : undefined; });
      const truoc = sp("before") || 0, sau = sp("after") || 0;
      const tuDong = tu("beforeAutospacing") === "1" || tu("afterAutospacing") === "1";
      if (truoc < PT6 && sau < PT6 && !tuDong) {
        const s = datCon(pPr, "spacing", PPR);
        dat(s, "before", PT6); dat(s, "after", PT6); bo(s, "beforeLines", "afterLines");
        tk.cach_doan++;
      }
      const dong = sp("line"), kieu = tu("lineRule") || "auto";
      if (dong !== undefined) {
        const r0 = tat(p, "r")[0];
        const co = r0 ? coChu(k, r0, p) / 2 : 14;
        const sai = kieu === "auto" ? dong / 240 < 0.99 || dong / 240 > 1.51 : dong / 20 < co || dong / 20 > co * 1.75;
        if (sai) {
          const s = datCon(pPr, "spacing", PPR);
          dat(s, "line", 240); dat(s, "lineRule", "auto");
          tk.gian_dong++;
        }
      }
    }
    if (tc.co) {
      let doi = false;
      for (const r of tat(p, "r")) {
        if (coTo(r, "txbxContent") || !tat(r, "t").length) continue;
        const sz = coChu(k, r, p);
        if (sz === 26 || sz === 28) continue;
        const rPr = datDau(r, "rPr");
        dat(datCon(rPr, "sz", RPR), "val", 28);
        dat(datCon(rPr, "szCs", RPR), "val", 28);
        doi = true;
      }
      if (doi) tk.co++;
    }
  }

  function suaTrang(sect, tk) {
    let doi = false;
    const sz = datCon(sect, "pgSz", SECT);
    const ngang = lay(sz, "orient") === "landscape";
    const [rong, cao] = ngang ? [16838, 11906] : [11906, 16838];
    if (!gan(so(sz, "w"), rong) || !gan(so(sz, "h"), cao)) { dat(sz, "w", rong); dat(sz, "h", cao); doi = true; }
    const moiTao = !con(sect, "pgMar");
    const m = datCon(sect, "pgMar", SECT);
    for (const [t, v] of Object.entries(LE)) if (!gan(so(m, t), v)) { dat(m, t, v); doi = true; }
    if (moiTao) { dat(m, "header", 567); dat(m, "footer", 567); dat(m, "gutter", 0); }
    if (doi) tk.trang++;
  }

  const KHAI_BAO = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n';
  function viet(doc) {
    let s = new XMLSerializer().serializeToString(doc);
    if (!/^<\?xml/.test(s)) s = KHAI_BAO + s;
    return s;
  }

  async function sua(buf, tuyChon) {
    const tc = Object.assign({ phong: true, mau: true, co: true, canh: true, dong: true, trang: true }, tuyChon || {});
    const z = goc.ND30Zip.mo(buf);
    const P = new DOMParser();
    const tk = { phong: 0, mau: 0, co: 0, canh: 0, lui: 0, gian_dong: 0, cach_doan: 0, trang: 0 };

    const stXml = await z.docChu("word/styles.xml");
    const st = stXml ? P.parseFromString(stXml, "application/xml") : null;
    const k = docKieu(st);
    if (st && tc.phong) {
      let doi = 0;
      for (const rf of tat(st, "rFonts")) if (doiPhong(rf)) doi++;
      if (k.rMd && !con(k.rMd, "rFonts")) {
        const rf = datCon(k.rMd, "rFonts", RPR);
        for (const t of ["ascii", "hAnsi", "cs", "eastAsia"]) dat(rf, t, TNR);
        doi++;
      }
      if (doi) { z.datChu("word/styles.xml", viet(st)); tk.phong += doi; }
    }

    const cacPhan = z.ds.filter((t) => /^word\/(document|header\d*|footer\d*|footnotes|endnotes)\.xml$/.test(t));
    for (const ten of cacPhan) {
      const doc = P.parseFromString(await z.docChu(ten), "application/xml");
      if (tc.phong) for (const rf of tat(doc, "rFonts")) if (doiPhong(rf)) tk.phong++;
      if (tc.mau) for (const c of tat(doc, "color")) if (c.parentNode.localName === "rPr" && doiMau(c)) tk.mau++;
      if (ten === "word/document.xml") {
        const than = con(doc.documentElement, "body");
        for (const p of tat(than, "p")) if (!coTo(p, "tbl", "txbxContent")) suaDoan(k, p, tc, tk);
        if (tc.trang) for (const s of tat(doc, "sectPr")) if (!coTo(s, "sectPrChange")) suaTrang(s, tk);
      }
      z.datChu(ten, viet(doc));
    }
    return { buf: await z.xuat(), tk };
  }

  goc.ND30SuaNhanh = { sua };
})(typeof window !== "undefined" ? window : globalThis);
