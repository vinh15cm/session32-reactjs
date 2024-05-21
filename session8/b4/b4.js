"use strict";
function square(input) {
    if (typeof input === "number") {
        // Nếu input là số, trả về bình phương của số đó
        return input * input;
    }
    else if (Array.isArray(input)) {
        // Nếu input là mảng, trả về mảng mới chứa bình phương của từng phần tử
        return input.map(num => num * num);
    }
    else {
        // Nếu input không phải số hoặc mảng, ném ra một lỗi
        throw new Error("Invalid input. Expected a number or an array of numbers.");
    }
}
// Ví dụ sử dụng
console.log(square(5)); // 25
console.log(square([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
