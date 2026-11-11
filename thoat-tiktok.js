/* Trình duyệt nhúng của TikTok chặn mọi link bấm từ trang (thử 11/11/2026 trên iPhone: link thường, JS, x-safari-https,
   snssdk, intent đều bị chặn). Người làm kênh chốt 11/11/2026: trong TikTok trang không có link nào.
   - Phần tử .chi-trinh-duyet (nút TikTok, xem tất cả sách...) bị gỡ.
   - Link trong trang (#muc) đổi thành cuộn bằng JS, không điều hướng.
   - Link còn lại (logo, chân trang...) đổi thành chữ thường.
   - Dòng nhắc nhỏ ở đầu trang: muốn xem video, tải file thì mở bằng trình duyệt.
   app.js tự không sinh link video, tải file, sách khi ở trong TikTok. Ngoài TikTok không làm gì. */
(function () {
  if (!/musical_ly|BytedanceWebview|TikTok|trill/i.test(navigator.userAgent)) return;
  document.documentElement.classList.add("trong-tiktok");

  function goLink(goc) {
    (goc || document).querySelectorAll(".chi-trinh-duyet").forEach(function (x) { x.remove(); });
    (goc || document).querySelectorAll("a[href]").forEach(function (a) {
      var h = a.getAttribute("href");
      if (h && h.charAt(0) === "#" && h.length > 1) {
        var nut = document.createElement("button");
        nut.type = "button"; nut.className = a.className + " nut-cuon"; nut.innerHTML = a.innerHTML;
        nut.addEventListener("click", function () { var d = document.querySelector(h); if (d) d.scrollIntoView({ behavior: "smooth", block: "start" }); });
        a.replaceWith(nut);
      } else {
        var s = document.createElement("span");
        s.className = a.className; s.innerHTML = a.innerHTML;
        a.replaceWith(s);
      }
    });
  }

  function dai() {
    var d = document.createElement("div");
    d.className = "dai-tiktok";
    d.innerHTML = 'Bấm tên bài, tên công thức để đọc ngay. Xem video, tải file mẫu: bấm <b>⋯</b> góc trên → <b>Mở trong trình duyệt</b>.';
    document.body.prepend(d);
  }

  function batDau() {
    dai(); goLink();
    new MutationObserver(function (ds) {
      ds.forEach(function (m) { m.addedNodes.forEach(function (n) { if (n.nodeType === 1) goLink(n.parentNode || n); }); });
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", batDau); else batDau();
})();
