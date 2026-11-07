/* Dữ liệu trang "Excel cho dân văn phòng". Sửa nội dung ở đây, không cần đụng index.html.
   - LENH: công thức, câu lệnh lấy từ bình luận ghim của từng video @aichovanphong.
   - SACH: sản phẩm gợi ý. "lien_ket" đang là trang sản phẩm công khai trên TikTok Shop;
     khi tài khoản đủ điều kiện tiếp thị liên kết, thay bằng link tiếp thị của kênh (vt.tiktok.com/...).
   Lệnh Word có \1 thì trong chuỗi JS viết \\1. */
window.KENH = {
  ten: "Excel cho dân văn phòng",
  tiktok: "https://www.tiktok.com/@aichovanphong",
  video: (id) => "https://www.tiktok.com/@aichovanphong/video/" + id,
};

window.NHOM = [
  { ma: "lam-sach", ten: "Làm sạch dữ liệu" },
  { ma: "tung-nghe", ten: "Excel từng nghề" },
  { ma: "tinh-nhanh", ten: "Tính nhanh" },
  { ma: "van-ban", ten: "Văn bản đúng chuẩn" },
  { ma: "cau-lenh-ai", ten: "Câu lệnh AI" },
];

window.LENH = [
  { ma: "49", nhom: "van-ban", ten: "Ngày tháng ban hành thiếu số 0", loi: "Ghi \"ngày 9 tháng 11\", \"tháng 1\" trên văn bản.",
    lenh: "Ctrl + H → More → tick Use wildcards\nTìm:  ngày ([1-9]) tháng\nThay: ngày 0\\1 tháng\n\nTìm:  tháng ([12]) năm\nThay: tháng 0\\1 năm",
    ghi_chu: "Ngày nhỏ hơn 10 và tháng 1, 2 phải thêm số 0 (điểm b mục 4 Phần II, Phần I, Phụ lục I NĐ 30/2020/NĐ-CP). Tháng 3 trở đi không phải thêm. Lệnh phân biệt chữ hoa: chỗ nào viết \"Ngày\" hoa thì chạy thêm lệnh với chữ \"Ngày\".",
    tep: "49-ngay-thang-dung-nd30.docx", video: null, sap_co: true },
  { ma: "48", nhom: "van-ban", ten: "Phụ lục đánh số trang riêng", loi: "Phụ lục chạy tiếp số trang của công văn: 4, 5, 6…",
    lenh: "Đặt chuột trước chữ \"Phụ lục\" → Layout → Breaks → Next Page\nBấm đúp số trang ở phụ lục → Insert → Page Number → Format Page Numbers → Start at: 1",
    ghi_chu: "Số trang của phụ lục đánh riêng theo từng phụ lục (điểm đ mục 1 Phần III). Ngắt bằng Ctrl + Enter thì không tách được số. Có từ hai phụ lục thì ghi Phụ lục I, Phụ lục II.",
    tep: "48-phu-luc-so-trang-rieng.docx", video: null, sap_co: true },
  { ma: "47", nhom: "van-ban", ten: "Số trang đúng Nghị định 30", loi: "Để số trang ở góc dưới bên phải.",
    lenh: "Insert → Page Number → Top of Page → Plain Number 2\nBấm đúp đầu trang → tick Different First Page\nBôi đen số → Times New Roman, cỡ 13 hoặc 14",
    ghi_chu: "Số trang canh giữa lề trên, không hiện số trang thứ nhất (mục I.7 Phần I, Phụ lục I NĐ 30/2020/NĐ-CP).",
    tep: "47-so-trang-dung-nd30.docx", video: "7704296758381120788" },
  { ma: "46", nhom: "tung-nghe", ten: "Số thứ tự không lủng khi xoá dòng, không nhảy khi lọc", loi: "Kéo chuột đánh số 1, 2, 3 rồi xoá dòng hoặc lọc.",
    lenh: "=AGGREGATE(3,5,$B$2:B2)",
    ghi_chu: "Gõ ở ô A2 rồi kéo xuống, B là cột họ tên luôn có dữ liệu. SUBTOTAL(3,…) cũng được nhưng dòng cuối có thể không ẩn khi lọc. Máy để vùng Việt Nam thì đổi dấu phẩy thành dấu chấm phẩy.",
    tep: "46-so-thu-tu-aggregate.xlsx", video: "7704912884203048213" },
  { ma: "43", nhom: "tung-nghe", ten: "Kế toán cộng chi phí theo phòng", loi: "Lọc từng phòng rồi cộng tay.",
    lenh: "=SUMIF($B$2:$B$121,E2,$C$2:$C$121)",
    ghi_chu: "Cột B là phòng, C là số tiền, E2 là tên phòng cần cộng; khoá vùng bằng $ rồi kéo xuống. Tổng lệch thì kiểm dấu cách thừa, cắt bằng TRIM.",
    tep: "43-sumif-chi-phi-theo-phong.xlsx", video: "7704664498296261908" },
  { ma: "39", nhom: "lam-sach", ten: "Ngày 05/11 bị đảo thành 11/05", loi: "Dán ngày từ phần mềm khác vô, ngày tháng bị đảo.",
    lenh: "Bôi cột ngày → Data → Text to Columns → Next → Next\nDate: chọn kiểu của tệp gốc (tháng/ngày/năm thì chọn MDY) → Finish",
    ghi_chu: "Dấu hiệu cột bị đảo: ô có ngày từ 13 trở lên nằm canh trái.",
    tep: "39-ngay-thang-bi-dao.xlsx", video: "7705042552839310612" },
  { ma: "38", nhom: "lam-sach", ten: "Số tài khoản mất số cuối, số điện thoại mất số 0", loi: "Dán số tài khoản 16 số, số điện thoại vô ô định dạng General.",
    lenh: "Bôi cột → Ctrl + 1 → Text → OK → rồi mới dán số",
    ghi_chu: "Excel chỉ giữ 15 chữ số, chữ số thứ 16 trở đi thành 0. Cột đã hỏng thì đổi sang Text không cứu được, phải dán lại từ tệp gốc.",
    tep: "38-so-tai-khoan-mat-so.xlsx", video: "7704540942283394325" },
  { ma: "37", nhom: "lam-sach", ten: "Tách họ tên bằng Ctrl + E, không cần công thức", loi: "Gõ tay họ, tên từng dòng.",
    lenh: "Gõ mẫu dòng đầu → xuống ô dưới → Ctrl + E",
    ghi_chu: "Tên 4 chữ vẫn lấy đúng chữ cuối. Kết quả không tự đổi khi sửa cột gốc; danh sách còn sửa thì dùng công thức. Excel 2013 trở lên.",
    tep: "37-ctrl-e-tach-ho-ten.xlsx", video: "7704163561630698772" },
  { ma: "28", nhom: "lam-sach", ten: "Tách Họ, Tên đệm, Tên bằng công thức", loi: "Danh sách họ và tên nằm chung một cột.",
    lenh: "Họ (B2):     =LEFT(TRIM(A2),FIND(\" \",TRIM(A2))-1)\nTên (D2):    =TRIM(RIGHT(SUBSTITUTE(TRIM(A2),\" \",REPT(\" \",100)),100))\nTên đệm (C2): =TRIM(MID(TRIM(A2),LEN(B2)+2,LEN(TRIM(A2))-LEN(B2)-LEN(D2)-1))",
    ghi_chu: "Gõ cột Họ và cột Tên trước, cột Tên đệm sau.",
    tep: "28-tach-ho-ten-cong-thuc.xlsx", video: "7702317160848411925" },
  { ma: "27", nhom: "lam-sach", ten: "Tách địa chỉ thành khóm ấp, phường xã, tỉnh", loi: "Địa chỉ ghi chung một ô, cách nhau bằng dấu phẩy.",
    lenh: "=TRIM(MID(SUBSTITUTE($A2,\",\",REPT(\" \",100)),COLUMN(A1)*100-99,100))",
    ghi_chu: "Gõ ở ô B2, kéo sang D rồi kéo xuống. Mỗi phần địa chỉ phải dưới 100 ký tự và cách nhau bằng dấu phẩy.",
    tep: "27-tach-dia-chi.xlsx", video: "7701941428167036181" },
  { ma: "35", nhom: "tinh-nhanh", ten: "Tính tổng bằng một phím Alt + =", loi: "Gõ =SUM rồi quét vùng từng cột.",
    lenh: "Chọn ô dưới cột → Alt + = → Enter\nBôi cả bảng gồm dòng, cột trống → Alt + =",
    ghi_chu: "Bảng đang lọc thì Alt + = tự dùng SUBTOTAL, chỉ cộng dòng đang hiện. Số nào canh trái là số dạng chữ, đổi sang số trước khi cộng.",
    tep: "35-tinh-tong-alt-bang.xlsx", video: "7703792835429960980" },
  { ma: "23", nhom: "cau-lenh-ai", ten: "Chụp bảng giấy thành bảng Excel", loi: "Gõ lại bảng giấy bằng tay.",
    lenh: "Chuyển bảng trong ảnh này thành bảng Excel, giữ đúng các cột, thêm dòng tổng cộng.",
    ghi_chu: "Soát lại từng số sau khi chuyển, nhất là chữ viết tay.", tep: null, video: "7702676823183723797" },
  { ma: "36", nhom: "cau-lenh-ai", ten: "Kế toán: gom bảng chi theo phòng", loi: "Cộng tay từng phòng, dò khoản trùng bằng mắt.",
    lenh: "Gom bảng chi dưới đây theo phòng, cộng tổng từng phòng, xếp cao xuống thấp, chỉ ra khoản bất thường hoặc bị trùng. Trả về dạng bảng.",
    ghi_chu: "Không dán dữ liệu thật có tên người, số tài khoản lên công cụ AI.", tep: null, video: "7703922853154016532" },
  { ma: "05", nhom: "cau-lenh-ai", ten: "Đọc nhanh tệp PDF dài", loi: "Đọc hết 80 trang mới biết việc gì phải làm.",
    lenh: "1) Tóm tắt 10 dòng: quy định gì, cho ai, từ ngày nào\n2) Liệt kê việc phải làm + hạn + số trang\n3) Trích nguyên văn đoạn gốc từng ý",
    ghi_chu: "Câu 3 để tự kiểm lại, AI có thể tóm sai.", tep: null, video: "7699723336292551957" },
];

/* Bảng tra "Văn bản đúng chuẩn": nguyên văn đã đối chiếu Phụ lục I NĐ 30/2020/NĐ-CP ngày 05/3/2020. */
window.THE_THUC = [
  { sai: "Số trang ở góc dưới bên phải", dung: "Canh giữa ở lề trên, cỡ 13–14, không hiện số trang thứ nhất", can_cu: "Mục I.7" },
  { sai: "Phụ lục chạy tiếp số trang công văn", dung: "Số trang của phụ lục đánh riêng theo từng phụ lục", can_cu: "Mục III.1 điểm đ" },
  { sai: "Hai phụ lục ghi Phụ lục 1, Phụ lục 2", dung: "Từ hai phụ lục trở lên đánh số La Mã: Phụ lục I, Phụ lục II", can_cu: "Mục III.1 điểm a" },
  { sai: "\"ngày 9 tháng 11\", \"tháng 1\"", dung: "Ngày nhỏ hơn 10 và tháng 1, 2 thêm số 0: ngày 09, tháng 01", can_cu: "Mục II.4 điểm b" },
  { sai: "Lề tuỳ ý", dung: "Trên, dưới 20–25 mm; trái 30–35 mm; phải 15–20 mm", can_cu: "Mục I.3" },
  { sai: "Giãn dòng quá rộng", dung: "Cách đoạn tối thiểu 6pt; cách dòng từ dòng đơn đến 1,5 lines", can_cu: "Mục II.6 điểm e" },
];

window.LOAI_SACH = [
  { ma: "moi-hoc", ten: "Mới học Excel" },
  { ma: "meo", ten: "Mẹo & biểu mẫu" },
  { ma: "word", ten: "Word & văn bản" },
  { ma: "ai", ten: "AI văn phòng" },
  { ma: "combo", ten: "Combo tiết kiệm" },
];

/* Số liệu giá, đánh giá, lượt bán đọc trên TikTok Shop ngày 07/11/2026; giá đổi theo khuyến mãi. */
window.SACH = [
  { ma: "1729609055060396333", loai: "combo", ten: "Combo 2 sách Excel + Word ứng dụng văn phòng", tac_gia: "Nguyễn Quang Vinh · NXB Thông tin và Truyền thông",
    hop_voi: "Anh em mới đi làm, cần cả Excel lẫn Word", ly_do: "Cặp Excel + Word, đúng hai phần mềm kênh hay làm video. Theo mô tả của nhà bán: Excel 183 trang, Word 179 trang, kèm video bài giảng.",
    gia: "290.600đ", gia_goc: "396.000đ", sao: "4,8", da_ban: "40,3K", noi_bat: true },
  { ma: "1729482898048059693", loai: "moi-hoc", ten: "Excel ứng dụng văn phòng từ cơ bản đến nâng cao", tac_gia: "Nguyễn Quang Vinh",
    hop_voi: "Anh em học Excel từ đầu, muốn có lộ trình", ly_do: "Đi từ nhập liệu, hàm tới Pivot Table; cuốn bán chạy nhất của nhà bán này.",
    gia: "124.280đ", gia_goc: "198.000đ", sao: "4,8", da_ban: "19,5K" },
  { ma: "1729601124748527917", loai: "meo", ten: "150 thủ thuật Excel ứng dụng văn phòng", tac_gia: "Nguyễn Quang Vinh",
    hop_voi: "Anh em đã biết Excel, muốn làm nhanh hơn", ly_do: "Cùng kiểu với video mẹo trên kênh: mỗi thủ thuật một việc cụ thể.",
    gia: "150.080đ", gia_goc: "228.000đ", sao: "4,8", da_ban: "7,5K" },
  { ma: "1731686468240116013", loai: "meo", ten: "68 biểu mẫu Excel ứng dụng văn phòng", tac_gia: "Nguyễn Quang Vinh",
    hop_voi: "Kế toán, nhân sự, hành chính cần mẫu dùng ngay", ly_do: "Hợp với loạt \"Excel từng nghề\": có sẵn mẫu để sửa theo việc của mình.",
    gia: "124.280đ", gia_goc: "198.000đ", sao: "4,7", da_ban: "3,9K" },
  { ma: "1729584207716976941", loai: "word", ten: "Word ứng dụng văn phòng từ cơ bản đến nâng cao", tac_gia: "Nguyễn Quang Vinh",
    hop_voi: "Anh em soạn công văn, báo cáo hằng ngày", ly_do: "Bổ sung cho loạt \"Văn bản đúng chuẩn\": mục lục tự động, trộn thư, định dạng. Phần thể thức thì đối chiếu thêm Nghị định 30/2020.",
    gia: "124.280đ", gia_goc: "198.000đ", sao: "4,8", da_ban: "4,2K" },
  { ma: "1732085580559124781", loai: "ai", ten: "Ứng dụng AI trong văn phòng", tac_gia: "Nguyễn Quang Vinh",
    hop_voi: "Anh em muốn dùng ChatGPT, Gemini cho việc văn phòng", ly_do: "Đi cùng các câu lệnh AI trên kênh. Nhớ: không đưa dữ liệu thật của cơ quan lên công cụ AI.",
    gia: "124.280đ", gia_goc: "198.000đ", sao: "4,8", da_ban: "4,4K" },
  { ma: "1731151775287970093", loai: "meo", ten: "101 phím tắt tin học văn phòng", tac_gia: "Nguyễn Quang Vinh",
    hop_voi: "Anh em thích làm bằng bàn phím", ly_do: "Mỏng, rẻ, để cạnh máy tra nhanh, như phím Alt + = trong video tính tổng.",
    gia: "79.000đ", gia_goc: "", sao: "4,2", da_ban: "4,9K" },
  { ma: "1730734519081994652", loai: "combo", ten: "Combo 2 sách Excel + Word ứng dụng thực tế, kèm video", tac_gia: "Antbooks",
    hop_voi: "Anh em muốn so với một nhà sách khác", ly_do: "Lựa chọn của nhà sách khác, cùng tầm giá, có video hướng dẫn kèm theo.",
    gia: "309.000đ", gia_goc: "450.000đ", sao: "4,8", da_ban: "1,3K" },
];
window.SACH.forEach((s) => { s.lien_ket = s.lien_ket || "https://www.tiktok.com/view/product/" + s.ma; });
