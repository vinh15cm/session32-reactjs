"use strict";
function parseInput(input) {
    switch (input) {
        case "number":
            return 10; // Giá trị số bất kỳ
        case "boolean":
            return true; // Giá trị boolean bất kỳ
        case "string":
            return "Hello"; // Chuỗi bất kỳ
        case "null":
            return null; // Giá trị null
        case "undefined":
            return undefined; // Giá trị undefined
        default:
            throw new Error("Invalid input");
    }
}
// Sử dụng hàm parseInput
console.log(parseInput("number")); // 10
console.log(parseInput("boolean")); // true
console.log(parseInput("string")); // "Hello"
console.log(parseInput("null")); // null
console.log(parseInput("undefined")); // undefined
