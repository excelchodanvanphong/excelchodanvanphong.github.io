/* Trình duyệt nhúng của TikTok không cho mở link nào từ trang (thử 11/11/2026 trên iPhone: link thường báo
   "TikTok không thể trực tiếp mở trang này"; x-safari-https:// báo "không thể hoàn tất hành động"; snssdk, intent cũng không chạy).
   Nên khi trang chạy trong TikTok: dải hướng dẫn cố định ở đầu trang, bấm link thì hiện bảng hướng dẫn
   "⋯ → Mở trong trình duyệt" kèm nút chép đúng link vừa bấm. Nút Copy công thức vẫn dùng bình thường.
   Ngoài TikTok không làm gì. */
(function () {
  var ua = navigator.userAgent;
  if (!/musical_ly|BytedanceWebview|TikTok|trill/i.test(ua)) return;

  function chep(t, nut, xong) {
    (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).catch(function () {
      var x = document.createElement("textarea"); x.value = t; document.body.append(x); x.select(); document.execCommand("copy"); x.remove();
    }).finally(function () { nut.textContent = xong; });
  }

  var HUONG_DAN = 'Bấm <b>⋯</b> góc trên bên phải → <b>Mở trong trình duyệt</b>.';

  function dai() {
    var d = document.createElement("div");
    d.className = "dai-tiktok";
    d.innerHTML = 'Link không mở được hoặc không tải được file? ' + HUONG_DAN +
      ' <button type="button">Chép link trang</button>';
    d.querySelector("button").addEventListener("click", function (e) { chep(location.href, e.currentTarget, "Đã chép, dán vào Safari/Chrome"); });
    document.body.prepend(d);
  }

  var bang;
  function moBang(url) {
    if (!bang) {
      bang = document.createElement("div");
      bang.className = "bang-tiktok";
      bang.setAttribute("role", "dialog");
      bang.innerHTML = '<div class="hop"><p><b>TikTok không cho mở link này.</b></p><p>' + HUONG_DAN +
        '</p><p>Hoặc chép link dán vào Safari, Chrome:</p><div class="hang-nut"><button type="button" class="nut chinh" data-chep>Chép link</button>' +
        '<button type="button" class="nut phu" data-dong>Đóng</button></div></div>';
      bang.addEventListener("click", function (e) { if (e.target === bang || e.target.hasAttribute("data-dong")) bang.hidden = true; });
      document.body.append(bang);
    }
    var nut = bang.querySelector("[data-chep]");
    nut.textContent = "Chép link";
    nut.onclick = function () { chep(url, nut, "Đã chép ✓"); };
    bang.hidden = false;
  }

  /* 11/11/2026: link tiểu sử chuyển sang beacons.ai/aichovanphong, đi qua Beacons thì link mở được, nên không chặn cú bấm nữa.
     moBang() giữ lại nếu sau này cần bật lại. */

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", dai); else dai();
})();
