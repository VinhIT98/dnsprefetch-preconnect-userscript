// ==UserScript==
// @name          Tất cả trang - dùng dnsprefetch&preconnect: Tải trước URL hiện tại & Các tên miền bên ngoài
// @namespace     http://tampermonkey.net/
// @version       2025-04-01
// @description   Prefetch current URL and all external domains found in the page
// @author        Vinh
// @match         *://*/*
// @icon          none
// @grant         none
// ==/UserScript==

(function() {
    'use strict';

    // Lấy domain hiện tại
    const currentDomain = window.location.origin;

    // Tạo dns-prefetch cho domain khác
    function addDNSPrefetch(domain) {
        let link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
    }
    // Tạo prefetch cho domain hiện tại
    function addPrefetch(domain) {
        let link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = domain;
        document.head.appendChild(link);
    }

    // Tạo preconnect
    function addPreconnect(domain) {
        let link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        document.head.appendChild(link);
    }

    addPreconnect(currentDomain);
    addPrefetch(currentDomain);

    // Tập hợp để lưu các domain đã xử lý
    let externalDomains = new Set();

    // Hàm lấy domain từ URL
    function getDomain(url) {
        try {
            let hostname = new URL(url, window.location.origin).origin;
            return hostname;
        } catch (e) {
            return null;
        }
    }

    // Kiểm tra xem URL có chứa "null" hoặc các phần không hợp lệ
    function isValidUrl(url) {
        // Kiểm tra nếu URL chứa "/null" hoặc các đoạn không hợp lệ
        return !url.includes('/null') && !url.match(/^(javascript|data):/i);
    }

    // Tìm tất cả các phần tử có URL
    let elements = document.querySelectorAll('a[href],script[src], link[rel="stylesheet"][href], img[src], iframe[src], video[src], audio[src]');

    elements.forEach(el => {
        // Chỉ xử lý phần tử có href hoặc src hợp lệ
        let url = el.href || el.src;
        if (!url || !isValidUrl(url)) return; // Bỏ qua các phần tử không có href hoặc src hợp lệ hoặc có "/null"

        let domain = getDomain(url);

        // Nếu domain hợp lệ, khác domain hiện tại và chưa xử lý thì thêm vào danh sách
        if (domain && domain !== currentDomain && !externalDomains.has(domain)) {
            externalDomains.add(domain);
            addPreconnect(domain);
            addDNSPrefetch(domain);
        }
    });

    console.log("🔍 Prefetched Domains:", Array.from(externalDomains));
})();
