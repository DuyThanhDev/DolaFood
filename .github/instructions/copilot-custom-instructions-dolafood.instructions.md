
# 🛠️ GitHub Copilot - Custom Instructions cho Dự án DolaFood

## 1. What would you like to tell Copilot about you, your preferences, or how you work?

Tôi đang phát triển **DolaFood** – một website chuyên về pizza, phục vụ người dùng tại thành phố. Dự án sử dụng các công nghệ hiện đại:

- **React 18 + TypeScript + Vite**
- **Tailwind CSS** cho thiết kế responsive (ưu tiên mobile-first)
- **Ant Design Icons**
- Kiến trúc **client-server** sử dụng **RESTful API**
- Tuân thủ tài liệu thiết kế chi tiết (UI/UX & chức năng rõ ràng)
- Ưu tiên **clean code**, dễ đọc, dễ bảo trì
- Áp dụng DevOps: CI/CD với **GitHub Actions**, sử dụng biến môi trường `.env`, kiểm tra code bằng **ESLint + Prettier**
- Nguyên tắc API:
  - Endpoint RESTful, sử dụng danh từ số nhiều
  - Response chuẩn: `{ status, message, data }`

Tôi cần Copilot hỗ trợ viết code rõ ràng, có chú thích nếu cần, không tạo logic rườm rà.

---

## 2. How would you like Copilot to respond?

- Luôn **phản hồi bằng tiếng Việt**
- **Tuân thủ tài liệu thiết kế chi tiết** khi tạo giao diện hoặc xử lý logic
- Sử dụng **Function Component + hook (useState, useEffect, useMemo...)** trong React
- Props phải có **interface rõ ràng**
- CSS viết bằng **Tailwind** (mobile-first, không dùng inline-style)
- Khi gọi API: đúng method, endpoint rõ ràng, tuân thủ chuẩn REST
- Cấu hình môi trường CI/CD phân biệt `dev/prod`, validate code bằng ESLint, có test script
- Các nút hành động và giao diện phải rõ ràng, trực quan, dễ dùng

---

## 🧩 Giao diện chính của DolaFood bao gồm:

1. **Trang chủ**: Banner, danh mục món nổi bật, món bán chạy/flash sale, ưu đãi, blog, đánh giá khách hàng, liên kết mạng xã hội  
2. **Trang danh mục món ăn**: Grid layout, lọc, sắp xếp, tag sản phẩm  
3. **Trang chi tiết sản phẩm**: Gallery ảnh, mô tả, nút mua, đánh giá, gợi ý món liên quan  
4. **Trang giỏ hàng**: Danh sách món, cập nhật/xóa, áp mã giảm giá, tạm tính  
5. **Trang thanh toán**: Form thông tin giao hàng, chọn phương thức thanh toán, ghi chú, xuất hóa đơn  
6. **Xác nhận đơn hàng thành công**: Mã đơn, cảm ơn, theo dõi đơn  
7. **Trang đăng nhập/đăng ký**: Email/password, Google/Facebook, quên mật khẩu  
8. **Tài khoản cá nhân**: Thông tin, lịch sử đơn, yêu thích, mã giảm, đổi mật khẩu  
9. **Danh sách cửa hàng**: Thông tin chi nhánh, Google Maps  
10. **Trang giới thiệu**: Câu chuyện, tầm nhìn, hình ảnh đội ngũ  
11. **Blog / Tin tức**: Danh sách bài viết, tìm kiếm, trang chi tiết  
12. **Trang liên hệ**: Form gửi liên hệ, bản đồ, giờ làm việc  
13. **Popup/module khác**: Popup khuyến mãi, tìm kiếm nhanh, xem nhanh sản phẩm, yêu thích, flash sale, voucher

---

## 🎨 UI/UX & Responsive yêu cầu:

- Responsive đầy đủ: desktop / tablet / mobile  
- Màu sắc thân thiện, sạch sẽ, liên quan đến thực phẩm tươi ngon  
- Font rõ ràng, dễ đọc  
- Call-to-action nổi bật: Mua ngay, Thêm giỏ  
- Icon trực quan: giỏ hàng, lọc, sao, tài khoản…
