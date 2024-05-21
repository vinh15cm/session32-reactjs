// Abstract Class:
// Abstract class là một lớp mà không thể tạo ra các đối tượng (instances) trực tiếp từ nó. Thay vào đó, abstract class được sử dụng để định nghĩa một bộ các thuộc tính và phương thức chung mà các lớp con có thể kế thừa và triển khai.
// Abstract class thường chứa ít nhất một phương thức abstract, mà các lớp con phải triển khai (override).
// Abstract class không thể được khởi tạo trực tiếp, mà chỉ có thể được kế thừa.
abstract class Shape {
    abstract calculateArea(): number;
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(5); // Lỗi! Không thể tạo đối tượng từ abstract class
// Class:
// Class là một mô hình hoặc một khuôn mẫu để tạo ra các đối tượng. Các đối tượng (instances) được tạo ra từ class có thể được sử dụng trong ứng dụng.
// Class có thể có thuộc tính, phương thức, constructor, getter, setter và nhiều tính năng khác.
// Class có thể được sử dụng để tạo ra các đối tượng mới bằng cách sử dụng từ khoá new.
class Car {
    private brand: string;
    private model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    public drive(): void {
        console.log("Driving", this.brand, this.model);
    }
}

const myCar = new Car("Toyota", "Camry");
myCar.drive(); // Output: Driving Toyota Camry
