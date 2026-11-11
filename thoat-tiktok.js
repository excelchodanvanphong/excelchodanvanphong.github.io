/* Trình duyệt nhúng của TikTok chặn mở link ("TikTok không thể trực tiếp mở trang này", thử 11/11/2026 trên iPhone).
   Khi trang chạy trong TikTok: mọi link đổi sang mở bằng trình duyệt của máy
   (iPhone: x-safari-https:// → Safari, cần iOS 17+; Android: intent:// → trình duyệt mặc định),
   kèm dải hướng dẫn "Mở bằng trình duyệt" và nút chép link làm dự phòng. Ngoài TikTok không làm gì. */
(function () {
  var ua = navigator.userAgent;
  if (!/musical_ly|BytedanceWebview|TikTok|trill/i.test(ua)) return;
  var ios = /iPhone|iPad|iPod/i.test(ua), android = /Android/i.test(ua);

  function raNgoai(url) {
    var u = new URL(url, location.href);
    if (!/^https?:$/.test(u.protocol)) return null;
    if (ios) return "x-safari-" + u.href.replace(/^http:/, "https:");
    if (android) return "intent://" + u.host + u.pathname + u.search + u.hash + "#Intent;scheme=https;S.browser_fallback_url=" + encodeURIComponent(u.href) + ";end";
    return null;
  }

  function doiLink() {
    document.querySelectorAll("a[href]:not([data-ngoai])").forEach(function (a) {
      var h = a.getAttribute("href");
      if (!h || h.charAt(0) === "#") return;
      var moi = raNgoai(a.href);
      if (!moi) return;
      a.setAttribute("data-ngoai", "1");
      a.setAttribute("href", moi);
      a.removeAttribute("target");
      a.removeAttribute("download");
    });
  }

  function dai() {
    var d = document.createElement("div");
    d.className = "dai-tiktok";
    d.innerHTML = '<b>Đang mở trong TikTok.</b> Bấm <b>⋯</b> góc trên bên phải → <b>Mở trong trình duyệt</b> để dùng đủ link, tải file.' +
      ' <button type="button">Chép link trang</button>';
    d.querySelector("button").addEventListener("click", function (e) {
      var t = location.href, b = e.currentTarget;
      (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).catch(function () {
        var x = document.createElement("textarea"); x.value = t; document.body.append(x); x.select(); document.execCommand("copy"); x.remove();
      }).finally(function () { b.textContent = "Đã chép, dán vào Safari/Chrome"; });
    });
    document.body.prepend(d);
  }

  function batDau() { dai(); doiLink(); new MutationObserver(doiLink).observe(document.body, { childList: true, subtree: true }); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", batDau); else batDau();
})();
