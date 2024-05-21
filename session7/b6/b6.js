"use strict";
function sayHello() {
    console.log("Hello!");
}
// Hàm này không trả về giá trị nào, chỉ làm thay đổi trạng thái của ứng dụng
sayHello();
function throwError(message) {
    throw new Error(message);
}
// Hàm này luôn ném ra một ngoại lệ và không trả về bất kỳ giá trị nào
throwError("Something went wrong!");
