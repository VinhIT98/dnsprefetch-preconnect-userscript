# Tất cả trang - dùng dnsprefetch & preconnect

## Mô tả
Script này giúp cải thiện hiệu suất lướt web bằng cách sử dụng các kỹ thuật **preconnect** và **dns-prefetch**. Nó sẽ tải trước các URL hiện tại và các tên miền bên ngoài (external domains) trong trang, giúp giảm thiểu thời gian tải khi bạn truy cập vào các tài nguyên từ các tên miền này.

### Các tính năng:
- **Preconnect**: Mở kết nối trước với các máy chủ bên ngoài (external servers), giúp giảm thời gian kết nối.
- **DNS Prefetch**: Tải trước thông tin DNS của các tên miền để cải thiện tốc độ truy cập.
- Tăng tốc độ tải trang và trải nghiệm duyệt web mượt mà hơn.

## Cách cài đặt

1. Cài đặt [Tampermonkey](https://www.tampermonkey.net/) hoặc [Greasemonkey](https://www.greasespot.net/) vào trình duyệt của bạn.
2. Tạo một userscript mới trong Tampermonkey và dán mã của script này vào.
3. Lưu lại và refresh lại trang web để bắt đầu sử dụng.

## Cải tiến hiệu suất
Script sẽ tự động áp dụng `dns-prefetch` và `preconnect` cho các URL trong trang hiện tại cũng như các liên kết bên ngoài (external links), giúp giảm thời gian tải và cải thiện trải nghiệm duyệt web.

## Lưu ý
- Đảm bảo rằng Tampermonkey hoặc Greasemonkey đã được cài đặt và kích hoạt đúng cách trong trình duyệt.
- Script này có thể không hoạt động với một số trang web nếu chúng có cơ chế chặn hoặc hạn chế các kết nối ngoài.

## Giấy phép
Script này được phát hành theo Giấy phép [MIT](https://opensource.org/licenses/MIT).
