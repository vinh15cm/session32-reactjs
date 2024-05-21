"use strict";
/*
Abstract Class:
Abstract class là một lớp mà không thể tạo ra các đối tượng từ nó, nhưng có thể được kế thừa bởi các lớp con.
Abstract class có thể chứa cả phương thức abstract và non-abstract (có thân hàm).
Lớp con phải triển khai (implement) tất cả các phương thức abstract của lớp cha.
Abstract class thường được sử dụng khi chúng ta muốn chia sẻ logic giữa các lớp con và cung cấp một hợp đồng cụ thể cho các lớp con. */
class Animal1 {
    move() {
        console.log("Moving...");
    }
}
class Dog1 extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}
const myDog1 = new Dog1();
myDog1.makeSound(); // Output: Woof! Woof!
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getName() {
        throw new Error("Method not implemented.");
    }
    getSize() {
        throw new Error("Method not implemented.");
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
const myCircle = new Circle(5);
console.log("Circle area:", myCircle.calculateArea());
console.log("Circle perimeter:", myCircle.calculatePerimeter());
