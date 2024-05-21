/*
Abstract Class:
Abstract class là một lớp mà không thể tạo ra các đối tượng từ nó, nhưng có thể được kế thừa bởi các lớp con.
Abstract class có thể chứa cả phương thức abstract và non-abstract (có thân hàm).
Lớp con phải triển khai (implement) tất cả các phương thức abstract của lớp cha.
Abstract class thường được sử dụng khi chúng ta muốn chia sẻ logic giữa các lớp con và cung cấp một hợp đồng cụ thể cho các lớp con. */
abstract class Animal1 {
    abstract makeSound(): void;

    move(): void {
        console.log("Moving...");
    }
}

class Dog1 extends Animal {
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

const myDog1 = new Dog1();
myDog1.makeSound(); // Output: Woof! Woof!
/*
Interface:
Interface là một tập hợp các phương thức và thuộc tính mà các lớp có thể triển khai.
Interface chỉ chứa các phương thức abstract và không có thân hàm.
Các lớp implement interface phải cung cấp triển khai cho tất cả các phương thức của interface đó.
Interface thường được sử dụng khi chúng ta muốn định nghĩa các hợp đồng cho các lớp không liên quan về mặt di truyền.
 */
interface Shape {
    calculateArea(): number;
    calculatePerimeter(): number;
}

class Circle implements Shape {
    radius: number;
    name:string;

    constructor(radius: number) {
        this.radius = radius;
       
    }
    
    getName(): string {
        throw new Error("Method not implemented.");
    }
    getSize(): void {
        throw new Error("Method not implemented.");
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

const myCircle = new Circle(5);
console.log("Circle area:", myCircle.calculateArea());
console.log("Circle perimeter:", myCircle.calculatePerimeter());

