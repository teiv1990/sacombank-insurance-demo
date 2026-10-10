# Demo Bảo hiểm nhúng trên Sacombank Pay (bản bảo hiểm tích sẵn)

Giao diện điện thoại bấm được thật, mô phỏng luồng **chuyển tiền** của Sacombank Pay, có gắn sản phẩm bảo hiểm ở các điểm chạm. Khách hàng và số liệu là giả định.

Ở bản này, màn xác nhận giao dịch bật sẵn Bảo hiểm An toàn giao dịch và không có ô tích đồng ý điều khoản: khách bấm Xác nhận là tham gia. Khách vẫn tắt được bằng công tắc trên thẻ bảo hiểm.

1. **Trang chủ**: banner sản phẩm
2. **Màn xác nhận**: bảo hiểm bật sẵn trong giao dịch, tặng tháng đầu
3. **Màn thành công**: gợi ý sản phẩm sau giao dịch
4. **Mua 1 chạm**: chọn gói, thông tin tự điền từ hồ sơ ngân hàng, xác thực, nhận Giấy chứng nhận điện tử

## Chạy

```bash
python3 -m http.server 5174
```

Rồi mở http://localhost:5174, hoặc mở thẳng file `index.html` bằng trình duyệt.

- **P**: bật/tắt chế độ trình chiếu (ẩn bảng điều khiển)
- **Làm mới demo**: đưa số dư và luồng về trạng thái ban đầu

## Cấu trúc

| Tệp | Nội dung |
|---|---|
| `profiles/sacombank.js` | Khách hàng, danh bạ, sản phẩm, điểm chạm. `insurance.placements.confirm.defaultChecked` = bật sẵn bảo hiểm; `consentText` để trống = không hiện ô tích đồng ý |
| `js/app.js` | Luồng demo và các màn hình chung |
| `js/skin-sacombank.js`, `css/skin-sacombank.css` | Bố cục Trang chủ, Chuyển tiền, Xác nhận, Xác thực theo Sacombank Pay |
