function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
    var em = 0;
    var _iterator = _createForOfIteratorHelper(String(chu)),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var c = _step.value;
        em += c === " " ? 0.25 : /\d/.test(c) ? 0.5 : c !== c.toLowerCase() ? dam ? 0.74 : 0.7 : /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0558\u0559\u0560-\u0588\u058B\u058C\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u208F-\u209F\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DD\uA7E2\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB6C\uAB6D\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBF]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDED9-\uDEEE\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF0A\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDB0-\uDDDB\uDDF1\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C\uD8B4-\uD8BE][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2\uDFF3]|\uD823[\uDC00-\uDCDA\uDCFF-\uDD20\uDD80-\uDDF2\uDE00-\uDFFF]|\uD824[\uDC00-\uDD91\uDDA0-\uDDD2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD28\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD68\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA6\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF81\uDF90-\uDF96\uDFCD-\uDFFF]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1E\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79]|\uD8BF[\uDC00-\uDC3F])/.test(c) ? dam ? 0.5 : 0.46 : 0.33;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return em * co;
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
  function chiaDong(chu, co, dam, rongPt) {
    var tu = chu.split(/\s+/).filter(Boolean);
    if (doRong(chu, co, dam) <= rongPt || tu.length < 2) return [chu];
    var _loop = function _loop() {
        var tot = null;
        var _thu = function thu(bd, con, dong) {
          if (con === 1) {
            var ds = dong.concat([tu.slice(bd).join(" ")]);
            var dai = Math.max.apply(null, ds.map(function (x) {
              return doRong(x, co, dam);
            }));
            if (dai <= rongPt && (!tot || dai < tot.dai)) tot = {
              ds: ds,
              dai: dai
            };
            return;
          }
          for (var k = bd + 1; k <= tu.length - con + 1; k++) _thu(k, con - 1, dong.concat([tu.slice(bd, k).join(" ")]));
        };
        _thu(0, n, []);
        if (tot) return {
          v: tot.ds
        };
      },
      _ret;
    for (var n = 2; n <= Math.min(4, tu.length); n++) {
      _ret = _loop();
      if (_ret) return _ret.v;
    }
    return [chu];
  }
  function thanDau(o) {
    var TONG = 17,
      MAC_DINH = 6.5,
      LECH = -0.5,
      PT = 28.3465,
      DEM = 0.38 + 0.2;
    var cq = (o.coQuan || "TÊN CƠ QUAN, TỔ CHỨC").toUpperCase();
    var cqcq = o.chuQuan ? o.chuQuan.toUpperCase() : "";
    var tn = "Độc lập - Tự do - Hạnh phúc",
      qh = "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM";
    var dongNgay = chuNgay(o.diaDanh, o.ngay, o.namTrong);
    var canPhai = Math.max(doRong(qh, 12, true), doRong(tn, 13, true), doRong(dongNgay, 14, false) * 1.03) / PT + DEM;
    var canTrai = Math.max(cqcq ? doRong(cqcq, 12, false) : 0, doRong(cq, 12, true)) / PT + DEM;
    var COT_TRAI = Math.round(Math.min(Math.max(MAC_DINH, canTrai), TONG - canPhai) * 20) / 20;
    var COT_PHAI = TONG - COT_TRAI;
    var rongChu = (COT_TRAI - DEM) * PT;
    var trai = [];
    if (cqcq) chiaDong(cqcq, 12, false, rongChu).forEach(function (x) {
      return trai.push(doan(x, {
        co: 12
      }));
    });
    var dongCq = chiaDong(cq, 12, true, rongChu);
    dongCq.forEach(function (x) {
      return trai.push(doan(x, {
        co: 12,
        dam: true
      }));
    });
    trai.push(duongKe(COT_TRAI - 0.38, Math.min(Math.max.apply(null, dongCq.map(function (x) {
      return doRong(x, 12, true);
    })), 140) * 0.4));
    var phai = [doan(qh, {
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
    var ngay = [doan(dongNgay, {
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