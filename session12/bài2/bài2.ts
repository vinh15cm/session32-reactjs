abstract class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract displayInfo(): void;
}

class Student extends Person {
    private id: number;

    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }

    displayInfo(): void {
        console.log("Student ID:", this.id);
        console.log("Student Name:", this.name);
    }
}

class Teacher extends Person {
    private subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    displayInfo(): void {
        console.log("Teacher Name:", this.name);
        console.log("Subject:", this.subject);
    }
}

// Tạo đối tượng từ lớp Student và in ra thông tin sinh viên
const student1 = new Student("John Doe", 12345);
student1.displayInfo();

console.log();

// Tạo đối tượng từ lớp Teacher và in ra thông tin giáo viên
const teacher1 = new Teacher("Alice Smith", "Mathematics");
teacher1.displayInfo();
