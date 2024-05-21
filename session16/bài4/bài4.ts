interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}

class Circle1 implements Geometry {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle1 implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
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
