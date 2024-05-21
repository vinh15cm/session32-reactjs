"use strict";
// Xây dựng hàm
function printTypeOfArgument(argument) {
    console.log(typeof argument);
}
// Sử dụng hàm
printTypeOfArgument("Hello"); // In ra "string"
printTypeOfArgument(123); // In ra "number"
printTypeOfArgument(true); // In ra "boolean"
printTypeOfArgument([1, 2, 3]); // In ra "object"
printTypeOfArgument({}); // In ra "object"
