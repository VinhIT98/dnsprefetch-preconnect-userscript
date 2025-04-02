# Tool cache sẵn kết nối tăng tốc lướt web - dùng dnsprefetch, prefetch & preconnect

## Mô tả
Script này giúp cải thiện hiệu suất duyệt web bằng cách sử dụng các kỹ thuật **preconnect**, **dns-prefetch**, và **prefetch**. Nó sẽ tự động tải trước các URL hiện tại và các tên miền bên ngoài (external domains) trong trang web, giúp giảm thiểu thời gian tải khi bạn truy cập vào các tài nguyên từ các tên miền này.

### Các tính năng chính:
- **Preconnect và DNS Prefetch cho các trang ngoài**: Script sẽ tự động áp dụng `preconnect` và `dns-prefetch` cho các tên miền bên ngoài (external domains) trong trang web. Điều này giúp giảm thời gian kết nối khi truy cập tài nguyên từ các tên miền bên ngoài mà không làm tăng tải tài nguyên của trang web.
- **Prefetch và Preconnect cho trang hiện tại**: Script sẽ áp dụng `prefetch` và `preconnect` cho các tài nguyên trong trang hiện tại, giúp tải trước các tài nguyên cần thiết khi người dùng duyệt trang con mà không cần phải đợi lâu.
- **Chỉ cache trang hiện tại**: Các tài nguyên của trang hiện tại sẽ được cache sẵn (prefetch), giúp giảm độ trễ khi duyệt trang tiếp theo. Trong khi đó, các tài nguyên từ trang ngoài chỉ dựng kết nối trước (preconnect) và lấy địa chỉ phân giải từ dns (dns-prefetch) mà không cache, nhằm tránh làm nặng tài nguyên của tab hiện tại.

Tất cả các tính năng này giúp tăng tốc độ tải trang và cải thiện trải nghiệm duyệt web mượt mà hơn mà không làm nặng tài nguyên trình duyệt.

## Cách cài đặt

1. Cài đặt [Tampermonkey](https://www.tampermonkey.net/) hoặc [Greasemonkey](https://www.greasespot.net/) vào trình duyệt của bạn.
2. Tạo một userscript mới trong Tampermonkey và dán mã của script này vào, hoặc sử dụng công cụ tích hợp sẵn để nhập file `.userscript.js`.
3. Lưu lại và refresh lại trang web để bắt đầu sử dụng.

## Cải tiến hiệu suất
Script sẽ tự động áp dụng:
- **Preconnect và DNS Prefetch** cho các tài nguyên từ các trang ngoài (external links), chỉ dựng kết nối mà không cache để không làm nặng tài nguyên.
- **Prefetch và Preconnect** cho các tài nguyên trong trang hiện tại, giúp tải trước các tài nguyên cần thiết, giảm độ trễ khi duyệt trang.

Nhờ đó, việc tải trang và truy cập tài nguyên sẽ nhanh hơn, mang đến trải nghiệm duyệt web mượt mà hơn.

## Lưu ý
- Đảm bảo rằng Tampermonkey hoặc Greasemonkey đã được cài đặt và kích hoạt đúng cách trong trình duyệt.
- Script có thể không hoạt động chính xác trên một số trang web nếu chúng có cơ chế chặn hoặc hạn chế kết nối ngoài.

## Giấy phép
Script này được phát hành theo Giấy phép [MIT](https://opensource.org/licenses/MIT).
