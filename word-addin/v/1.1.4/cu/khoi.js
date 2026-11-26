(function (goc) {
  "use strict";

  var TNR = "Times New Roman";
  var CM = 567;
  var thoat = function thoat(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  };
  var canvas = null;
  function doRong(chu, co, dam) {
    try {
      canvas = canvas || document.createElement("canvas");
      var g = canvas.getContext("2d");
      if (g) {
        g.font = "".concat(dam ? "bold " : "").concat(co, "pt \"").concat(TNR, "\"");
        var w = g.measureText(chu).width;
        if (w) return w * 0.75;
      }
    } catch (e) {}
    return chu.length * co * (dam ? 0.52 : 0.48);
  }
  var KIEU_KHUNG = "ND30Khung",
    KIEU_NOI_DUNG = "ND30NoiDung";
  var RPR_KIEU = "<w:rPr><w:rFonts w:ascii=\"".concat(TNR, "\" w:hAnsi=\"").concat(TNR, "\" w:cs=\"").concat(TNR, "\" w:eastAsia=\"").concat(TNR, "\"/><w:sz w:val=\"28\"/><w:szCs w:val=\"28\"/></w:rPr>");
  var KIEU_XML = "<w:style w:type=\"paragraph\" w:customStyle=\"1\" w:styleId=\"".concat(KIEU_KHUNG, "\"><w:name w:val=\"N\u011030 Khung\"/><w:qFormat/>") + "<w:pPr><w:spacing w:before=\"0\" w:after=\"0\" w:line=\"240\" w:lineRule=\"auto\"/><w:ind w:left=\"0\" w:right=\"0\" w:firstLine=\"0\"/></w:pPr>".concat(RPR_KIEU, "</w:style>") + "<w:style w:type=\"paragraph\" w:customStyle=\"1\" w:styleId=\"".concat(KIEU_NOI_DUNG, "\"><w:name w:val=\"N\u011030 N\u1ED9i dung\"/><w:qFormat/>") + "<w:pPr><w:spacing w:before=\"120\" w:after=\"120\" w:line=\"240\" w:lineRule=\"auto\"/><w:ind w:left=\"0\" w:right=\"0\" w:firstLine=\"567\"/><w:jc w:val=\"both\"/></w:pPr>".concat(RPR_KIEU, "</w:style>");
  function doan(chu, o) {
    o = o || {};
    var co = (o.co || 14) * 2;
    var rPr = "<w:rPr><w:rFonts w:ascii=\"".concat(TNR, "\" w:hAnsi=\"").concat(TNR, "\" w:cs=\"").concat(TNR, "\" w:eastAsia=\"").concat(TNR, "\"/>") + (o.dam ? "<w:b/><w:bCs/>" : "") + (o.nghieng ? "<w:i/><w:iCs/>" : "") + "<w:color w:val=\"000000\"/><w:sz w:val=\"".concat(co, "\"/><w:szCs w:val=\"").concat(co, "\"/></w:rPr>");
    var ind = "<w:ind w:left=\"".concat(o.trai || 0, "\" w:right=\"").concat(o.phai || 0, "\" w:firstLine=\"").concat(o.dau || 0, "\"/>");
    var sp = "<w:spacing w:before=\"".concat((o.truoc || 0) * 20, "\" w:after=\"").concat((o.sau || 0) * 20, "\" w:line=\"240\" w:lineRule=\"auto\"/>");
    var pPr = "<w:pPr><w:pStyle w:val=\"".concat(KIEU_KHUNG, "\"/>").concat(o.giu ? "<w:keepNext/>" : "").concat(sp).concat(ind, "<w:jc w:val=\"").concat(o.canh || "center", "\"/>").concat(rPr, "</w:pPr>");
    var chay = chu ? "<w:r>".concat(rPr, "<w:t xml:space=\"preserve\">").concat(thoat(chu), "</w:t></w:r>") : "";
    return "<w:p>".concat(pPr).concat(chay, "</w:p>");
  }
  function duongKe(vungCm, daiPt) {
    var le = Math.max(0, Math.round((vungCm * 28.3465 - daiPt) / 2 * 20));
    return "<w:p><w:pPr><w:pStyle w:val=\"".concat(KIEU_KHUNG, "\"/><w:pBdr><w:top w:val=\"single\" w:sz=\"6\" w:space=\"0\" w:color=\"000000\"/></w:pBdr>") + "<w:spacing w:before=\"80\" w:after=\"0\" w:line=\"20\" w:lineRule=\"exact\"/><w:ind w:left=\"".concat(le, "\" w:right=\"").concat(le, "\" w:firstLine=\"0\"/>") + "<w:jc w:val=\"center\"/><w:rPr><w:sz w:val=\"2\"/></w:rPr></w:pPr></w:p>";
  }
  function bang(cot, hang, lech) {
    var vien = ["top", "left", "bottom", "right", "insideH", "insideV"].map(function (k) {
      return "<w:".concat(k, " w:val=\"nil\"/>");
    }).join("");
    var tblPr = "<w:tblPr><w:tblW w:w=\"".concat(Math.round(cot.reduce(function (a, b) {
      return a + b;
    }, 0) * CM), "\" w:type=\"dxa\"/>") + (lech ? "<w:tblInd w:w=\"".concat(Math.round(lech * CM), "\" w:type=\"dxa\"/>") : "") + "<w:tblBorders>".concat(vien, "</w:tblBorders><w:tblLayout w:type=\"fixed\"/><w:tblLook w:val=\"0000\"/></w:tblPr>");
    var luoi = "<w:tblGrid>" + cot.map(function (c) {
      return "<w:gridCol w:w=\"".concat(Math.round(c * CM), "\"/>");
    }).join("") + "</w:tblGrid>";
    var dong = hang.map(function (h) {
      return "<w:tr>" + h.map(function (o, i) {
        return "<w:tc><w:tcPr><w:tcW w:w=\"".concat(Math.round(cot[i] * CM), "\" w:type=\"dxa\"/></w:tcPr>").concat(o.join("") || doan(""), "</w:tc>");
      }).join("") + "</w:tr>";
    }).join("");
    return "<w:tbl>".concat(tblPr).concat(luoi).concat(dong, "</w:tbl>");
  }
  function goi(than) {
    return '<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage">' + '<pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData>' + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' + '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' + "</Relationships></pkg:xmlData></pkg:part>" + '<pkg:part pkg:name="/word/_rels/document.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData>' + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' + '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' + "</Relationships></pkg:xmlData></pkg:part>" + '<pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData>' + '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>' + than + "</w:body></w:document>" + "</pkg:xmlData></pkg:part>" + '<pkg:part pkg:name="/word/styles.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"><pkg:xmlData>' + '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' + KIEU_XML + "</w:styles>" + "</pkg:xmlData></pkg:part></pkg:package>";
  }
  function chuNgay(diaDanh, ngay, namTrong) {
    var dd = (diaDanh || "").trim() || "......";
    if (namTrong) return "".concat(dd, ", ng\xE0y      th\xE1ng      n\u0103m ").concat(namTrong);
    if (!ngay) return "".concat(dd, ", ng\xE0y ..... th\xE1ng ..... n\u0103m ......");
    var d = ngay.getDate(),
      m = ngay.getMonth() + 1;
    var n = d < 10 ? "0" + d : String(d);
    var t = m < 3 ? "0" + m : String(m);
    return "".concat(dd, ", ng\xE0y ").concat(n, " th\xE1ng ").concat(t, " n\u0103m ").concat(ngay.getFullYear());
  }
  function kinhGui(ds) {
    var noi = (ds || []).map(function (x) {
      return x.trim().replace(/^[-–•+]\s*/, "").replace(/[;.,]+$/, "");
    }).filter(Boolean);
    if (!noi.length) return "";
    if (noi.length === 1) return doan("Kính gửi: " + noi[0] + ".", {
      co: 14,
      truoc: 12,
      sau: 6
    });
    var LE = 1985;
    var lui = LE + Math.round((doRong("Kính gửi:", 14, false) - doRong("-", 14, false) / 2) * 20);
    var x = doan("Kính gửi:", {
      co: 14,
      truoc: 12,
      canh: "left",
      trai: LE
    });
    noi.forEach(function (n, i) {
      x += doan("- " + n + (i === noi.length - 1 ? "." : ";"), {
        co: 14,
        canh: "left",
        trai: lui,
        sau: i === noi.length - 1 ? 6 : 0
      });
    });
    return x;
  }
  function dauVanBan(o) {
    return goi(thanDau(o) + doan("", {
      canh: "both",
      co: 14
    }));
  }
  function thanDau(o) {
    var COT_TRAI = 6.5,
      COT_PHAI = 10.5,
      LECH = -0.5;
    var cq = (o.coQuan || "TÊN CƠ QUAN, TỔ CHỨC").toUpperCase();
    var tn = "Độc lập - Tự do - Hạnh phúc";
    var trai = [];
    if (o.chuQuan) trai.push(doan(o.chuQuan.toUpperCase(), {
      co: 12
    }));
    trai.push(doan(cq, {
      co: 12,
      dam: true
    }), duongKe(COT_TRAI - 0.38, Math.min(doRong(cq, 12, true), 140) * 0.4));
    var phai = [doan("CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM", {
      co: 12,
      dam: true
    }), doan(tn, {
      co: 13,
      dam: true
    }), duongKe(COT_PHAI - 0.38, doRong(tn, 13, true))];
    var so = [doan(o.soKyHieu ? "Số: " + o.soKyHieu.replace(/^Số\s*:\s*/i, "") : "Số:          /.....-.....", {
      co: 13,
      truoc: 6
    })];
    if (o.veViec) so.push(doan("V/v " + o.veViec.replace(/^V\/v\s*/i, ""), {
      co: 12,
      truoc: 6
    }));
    var ngay = [doan(chuNgay(o.diaDanh, o.ngay, o.namTrong), {
      co: 14,
      nghieng: true,
      truoc: 6
    })];
    var than = bang([COT_TRAI, COT_PHAI], [[trai, phai], [so, ngay]], LECH);
    if (o.tenLoai) {
      than += doan(o.tenLoai.toUpperCase(), {
        co: 14,
        dam: true,
        truoc: 18,
        giu: true
      });
      var ty = (o.trichYeu || "").trim();
      if (ty) {
        than += doan(ty, {
          co: 14,
          dam: true,
          giu: true
        });
        than += duongKe(16, Math.min(doRong(ty, 14, true), 420) * 0.45);
      }
    }
    if (o.kinhGui) than += kinhGui(o.kinhGui);
    return than;
  }
  function chuanNoiNhan(ds) {
    var dong = ds.map(function (x) {
      return x.trim().replace(/^[-–•]\s*/, "").replace(/[;.,]+$/, "");
    }).filter(Boolean);
    var luu = dong.findIndex(function (x) {
      return /^Lưu\s*:?/i.test(x);
    });
    var dsLuu = luu >= 0 ? dong.splice(luu, 1)[0] : "Lưu: VT";
    dsLuu = dsLuu.replace(/^Lưu\s*:?\s*/i, "Lưu: ");
    return dong.map(function (x) {
      return "- " + x + ";";
    }).concat(["- " + dsLuu + "."]);
  }
  function khoiKy(o) {
    return goi(thanKy(o));
  }
  function thanKy(o) {
    var trai = [doan("Nơi nhận:", {
      co: 12,
      dam: true,
      nghieng: true,
      canh: "left",
      truoc: 12
    })].concat(chuanNoiNhan(o.noiNhan || []).map(function (x) {
      return doan(x, {
        co: 11,
        canh: "left"
      });
    }));
    var phai = [];
    var tq = (o.thamQuyen || "").trim(),
      cv = (o.chucVu || "").trim() || "QUYỀN HẠN, CHỨC VỤ CỦA NGƯỜI KÝ";
    if (tq) phai.push(doan(tq.toUpperCase(), {
      co: 14,
      dam: true,
      truoc: 12
    }));
    phai.push(doan(cv.toUpperCase(), {
      co: 14,
      dam: true,
      truoc: tq ? 0 : 12
    }));
    for (var i = 0; i < 4; i++) phai.push(doan("", {
      co: 14
    }));
    phai.push(doan((o.hoTen || "").trim() || "Họ và tên", {
      co: 14,
      dam: true
    }));
    return bang([8, 8], [[trai, phai]], 0);
  }
  goc.ND30Khoi = {
    dauVanBan: dauVanBan,
    khoiKy: khoiKy,
    thanDau: thanDau,
    thanKy: thanKy,
    kinhGui: kinhGui,
    chuNgay: chuNgay,
    chuanNoiNhan: chuanNoiNhan,
    doan: doan,
    KIEU_XML: KIEU_XML,
    KIEU_KHUNG: KIEU_KHUNG,
    KIEU_NOI_DUNG: KIEU_NOI_DUNG
  };
})(typeof window !== "undefined" ? window : globalThis);