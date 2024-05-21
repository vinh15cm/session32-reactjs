"use strict";
// Khai báo một biến có kiểu dữ liệu là mảng các số
let numberArray1 = [1, 2, 3, 4, 5, 6];
// Duyệt qua mảng và in ra các số lớn hơn 2 và nhỏ hơn 5
console.log("Các số lớn hơn 2 và nhỏ hơn 5:");
for (let i = 0; i < numberArray1.length; i++) {
    if (numberArray1[i] > 2 && numberArray1[i] < 5) {
        console.log(numberArray1[i]);
    }
}
