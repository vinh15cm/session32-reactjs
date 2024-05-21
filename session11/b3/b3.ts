class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public displayInfo(): void {
        console.log("Name:", this.name);
    }
}

class Student1 extends Person {
    private id: number;

    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }

    public displayInfo(): void {
        super.displayInfo();
        console.log("ID:", this.id);
    }
}

// Khởi tạo đối tượng từ lớp Student và sử dụng phương thức displayInfo để in thông tin
const student1 = new Student("John Doe",);
student1.displayInfo();
