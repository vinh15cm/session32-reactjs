"use strict";
// Private Access Modifier:
// Thuộc tính hoặc phương thức được đánh dấu là private chỉ có thể được truy cập bên trong cùng một lớp mà nó được định nghĩa.
// Bất kỳ lớp nào kế thừa từ lớp chứa thuộc tính hoặc phương thức private cũng không thể truy cập được vào chúng.
class Example {
    constructor() {
        this.secretValue = 42;
    }
    getSecretValue() {
        return this.secretValue; // Có thể truy cập được ở bên trong cùng một lớp
    }
}
const example = new Example();
console.log(example.secretValue); // Lỗi! Không thể truy cập được từ bên ngoài lớp
// Protected Access Modifier:
// Thuộc tính hoặc phương thức được đánh dấu là protected có thể được truy cập bởi các lớp con (subclasses) kế thừa từ lớp chứa chúng.
// Tuy nhiên, chúng không thể truy cập từ bên ngoài của lớp cha hoặc các lớp không phải là lớp con của lớp cha đó.
class Parent {
    constructor() {
        this.protectedValue = "Hello, protected!";
    }
}
class Child extends Parent {
    getProtectedValue() {
        return this.protectedValue; // Có thể truy cập được ở lớp con kế thừa
    }
}
const child = new Child();
console.log(child.protectedValue); // Lỗi! Không thể truy cập được từ bên ngoài lớp con
