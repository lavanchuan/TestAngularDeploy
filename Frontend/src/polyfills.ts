// src/polyfills.ts

/***************************************************************************************************
 * Bắt đầu với các polyfills cho trình duyệt cũ
 **************************************************************************************************/

// Polyfill cho Reflect (thường dùng trong Angular)
import 'core-js/es/reflect';  // Thêm polyfill cho Reflect API

// Polyfill cho các tính năng ES6+
import 'core-js/stable';  // Bao gồm các polyfill cho các tính năng ES6 (ví dụ: Promise, Array.from, Set, Map, etc.)

// Polyfill cho Zone.js (được yêu cầu trong Angular)
import 'zone.js';  // Nguyên nhân Angular cần zone.js để theo dõi các async operations

/***************************************************************************************************
 * Các polyfills cho trình duyệt cũ, đặc biệt là trên các thiết bị iOS (Safari)
 **************************************************************************************************/

// Polyfill cho các tính năng ES6 như Promise, Object.assign
import 'core-js/es/promise';
import 'core-js/es/object';
import 'core-js/es/array';

// Polyfill cho Fetch API (nếu sử dụng Fetch thay cho XMLHttpRequest)
import 'whatwg-fetch';  // Polyfill cho Fetch API

// Polyfill cho các API khác như Intersection Observer, Resize Observer nếu cần
// import 'intersection-observer'; // Uncomment nếu sử dụng IntersectionObserver
// import 'resize-observer-polyfill'; // Uncomment nếu sử dụng ResizeObserver
