# Nguyen Khac Thang — Full-stack Software Engineer Portfolio

Trang web portfolio chuyên nghiệp chuẩn Big-Corp dành cho **Nguyễn Khắc Thắng** (Full-stack Software Engineer). Được thiết kế sáng sủa, hiện đại, rộng rãi với cấu trúc tối ưu cho nhà tuyển dụng (Recruiters & Engineering Managers), hỗ trợ **song ngữ Anh - Việt (mặc định là Tiếng Anh)**.

---

## 🚀 Live Preview tại máy của bạn
Server preview đang chạy tại:
👉 **[http://localhost:5173/](http://localhost:5173/)**

Hoặc chạy thủ công bất cứ lúc nào:
```bash
# Chế độ phát triển (Hot reload)
npm run dev

# Hoặc xem bản production build
npm run preview
```

---

## 🌟 Tính năng & Cải tiến mới

1. **Hỗ trợ Song ngữ Anh - Việt (Bilingual EN / VI)**:
   - **Mặc định là Tiếng Anh (English)** theo đúng tiêu chuẩn gửi hồ sơ quốc tế và yêu cầu của bạn.
   - Nút chuyển đổi nhanh **`[ EN | VI ]`** được đặt gọn gàng, tinh tế trên thanh điều hướng (cả Desktop và Mobile Drawer).
   - Tự động lưu tùy chọn ngôn ngữ vào `localStorage` của trình duyệt.
   - Toàn bộ nội dung: Giới thiệu, Dự án sản xuất MES, CRM du học, Dòng thời gian kinh nghiệm, Ma trận kỹ năng, Nền tảng học vấn, Form liên hệ, Modal chi tiết và Thông báo sao chép đều được bản địa hóa chỉn chu, văn phong chuyên nghiệp chuẩn Big-Corp.

2. **Ảnh đại diện tinh tế (Tasteful & Compact Avatar)**:
   - Ảnh gốc `avatar.heif` đã được chuyển đổi và tối ưu hóa thành định dạng WebP/JPEG chất lượng cao, dung lượng nhẹ (~200KB).
   - Hiển thị nhỏ gọn, trang trọng ở cả thanh điều hướng (Navbar) và thẻ hồ sơ cá nhân (Hero Profile Card) với đèn báo trạng thái online xanh lá.
   - Tích hợp tính năng click xem ảnh chân dung đầy đủ (Modal Lightbox).

3. **Cấu trúc nội dung chuẩn mực từ CV**:
   - **Hero Executive Overview**: Tóm tắt giá trị cốt lõi, vai trò Full-stack Software Engineer với thế mạnh về hệ thống sản xuất (MES/Traceability) và web platform.
   - **Key Metrics Badges**: 
     - `200+` Công nhân nhà máy sử dụng thực tế.
     - `Phase 3 Lead` Trưởng nhóm bàn giao giai đoạn 3 tại Innotech Vietnam.
     - `100%` End-to-end QR Traceability & System Stabilization.
     - `UIT VNU-HCM` Cử nhân Kỹ thuật Phần mềm.
   - **Featured Enterprise Projects (Case Studies)**:
     - **Cao Phat — Paper Manufacturing Management & Traceability System**: Traceability đa cấp (nguyên liệu, pallet, thành phẩm), điều phối lịch sản xuất, hỗ trợ 200+ công nhân. Tích hợp nút **"Deep Dive Architecture"** mở modal phân tích chi tiết.
     - **Ellacy — Study Abroad Service Platform**: CRM du học, quản lý ứng viên, form động, RESTful API và React interface.
     - **Innotech Internal HRM & Systems**: Hệ thống nội bộ, quy trình Git chuẩn hóa.
   - **Career Milestones Timeline**: Dòng thời gian chi tiết quá trình làm việc tại Innotech Vietnam (Chính thức & Thực tập).
   - **Technical Skills Matrix**: Bảng ma trận kỹ năng phân nhóm khoa học (Languages, Backend, Frontend, Database, DevOps/Hardware, AI Coding Tools), có thanh tìm kiếm nhanh cho Recruiter.
   - **Education**: Đại học Công nghệ Thông tin (ĐHQG-HCM) - UIT.
   - **Recruiter Contact Hub**: Nút copy 1-click Email & Số điện thoại (có Toast thông báo), form liên hệ trực tiếp, link LinkedIn & GitHub, nút in/lưu CV chuẩn PDF.

---

## 🛠️ Công nghệ sử dụng
- **React 19**
- **Vite 8** (Bundling & Fast HMR)
- **Tailwind CSS v4**
- **Lucide Icons & Custom SVG**
- **Bilingual Context System** (React Context API)
- **Sharp & Heic-Convert** (Tối ưu hóa ảnh gốc)

---

## 🌐 Hướng dẫn triển khai online (Deploy miễn phí trong 2 phút)

Thư mục `dist/` đã được build sẵn file tĩnh với đường dẫn tương đối (`base: './'`), bạn có thể deploy lên bất kỳ nền tảng nào:

### Cách 1: Vercel (Khuyên dùng - Cực nhanh)
1. Đẩy code lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/nkthang2003/<repo-name>.git
   git push -u origin main
   ```
2. Truy cập [vercel.com](https://vercel.com) -> Đăng nhập bằng GitHub -> Import repo -> Click **Deploy**.

### Cách 2: GitHub Pages
Chạy lệnh:
```bash
npm run build
```
Và kích hoạt GitHub Pages trỏ vào thư mục repo hoặc branch `gh-pages`.

### Cách 3: Netlify
Kéo thả thư mục `dist` trực tiếp vào trang [app.netlify.com/drop](https://app.netlify.com/drop).
