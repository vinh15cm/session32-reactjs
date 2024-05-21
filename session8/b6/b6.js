"use strict";
function processInput(input) {
    if (typeof input === "string") {
        // Nếu input là một chuỗi, in ra nó
        console.log(input);
    }
    else if (Array.isArray(input)) {
        // Nếu input là một mảng, in ra từng phần tử của mảng đó
        input.forEach(item => console.log(item));
    }
    else {
        // Nếu input không phải là chuỗi hoặc mảng, ném ra một lỗi
        throw new Error("Invalid input. Expected a string or an array of strings.");
    }
}
// Ví dụ sử dụng
processInput("Hello"); // In ra: Hello
processInput(["Apple", "Banana", "Orange"]); // In ra từng phần tử của mảng
