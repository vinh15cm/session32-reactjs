let variable1: any = 10;
let variable2: any = "Hello";

// Có thể gán bất kỳ giá trị nào cho biến
variable1 = "World";
variable2 = true;

// TypeScript không cảnh báo về việc gán các kiểu dữ liệu khác nhau
console.log(variable1.toUpperCase()); // Không có lỗi biên dịch
console.log(variable2.length); // Không có lỗi biên dịch
