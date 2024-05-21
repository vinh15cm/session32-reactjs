"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle1 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
// Example usage:
const circle = new Circle(5);
console.log("Circle area:", circle.calculateArea()); // Output: 78.54
console.log("Circle perimeter:", circle.calculatePerimeter()); // Output: 31.42
const rectangle1 = new Rectangle1(4, 6);
console.log("Rectangle area:", rectangle1.calculateArea()); // Output: 24
console.log("Rectangle perimeter:", rectangle1.calculatePerimeter()); // Output: 20
