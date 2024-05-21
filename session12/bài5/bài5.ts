abstract class Quadrangle {
    protected width: number;
    protected height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    abstract calculatePerimeter(): number;
}

class Rectangle extends Quadrangle {
    constructor(width: number, height: number) {
        super(width, height);
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Square extends Quadrangle {
    constructor(sideLength: number) {
        super(sideLength, sideLength);
    }

    calculatePerimeter(): number {
        return 4 * this.width;
    }
}

// Tạo thực thể từ lớp Rectangle và tính chu vi
const rectangle = new Rectangle(5, 10);
console.log("Rectangle Perimeter:", rectangle.calculatePerimeter());

// Tạo thực thể từ lớp Square và tính chu vi
const square = new Square(6);
console.log("Square Perimeter:", square.calculatePerimeter());
