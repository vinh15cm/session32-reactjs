"use strict";
function validatePerson1(obj) {
    // Kiểm tra xem obj có phải là một đối tượng Person hợp lệ hay không
    return (typeof obj === "object" &&
        typeof obj.name === "string" &&
        typeof obj.age === "number" &&
        typeof obj.address === "object");
}
// Ví dụ sử dụng
const person1 = { name: "Alice", age: 30, address: { city: "New York", country: "USA" } };
const person2 = { name: "Bob", age: 25 }; // Thiếu thuộc tính address
console.log(validatePerson(person1)); // true
console.log(validatePerson(person2)); // false
