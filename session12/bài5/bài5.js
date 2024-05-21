"use strict";
class Quadrangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
class Rectangle extends Quadrangle {
    constructor(width, height) {
        super(width, height);
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Square extends Quadrangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
    calculatePerimeter() {
        return 4 * this.width;
    }
}
// Tạo thực thể từ lớp Rectangle và tính chu vi
const rectangle = new Rectangle(5, 10);
console.log("Rectangle Perimeter:", rectangle.calculatePerimeter());
// Tạo thực thể từ lớp Square và tính chu vi
const square = new Square(6);
console.log("Square Perimeter:", square.calculatePerimeter());
