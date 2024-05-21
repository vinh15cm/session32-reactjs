"use strict";
let variable1 = 10;
let variable2 = "Hello";
// Có thể gán bất kỳ giá trị nào cho biến
variable1 = "World";
variable2 = true;
// TypeScript không cảnh báo về việc gán các kiểu dữ liệu khác nhau
console.log(variable1.toUpperCase()); // Không có lỗi biên dịch
console.log(variable2.length); // Không có lỗi biên dịch
