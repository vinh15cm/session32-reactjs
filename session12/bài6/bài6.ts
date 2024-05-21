class Employee {
    protected name: string;
    protected role: string;

    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }

    calculateSalary(): number {
        return 0; // Mặc định, lớp cha không có công thức tính lương
    }
}

class InternEmployee extends Employee {
    private workHour: number;

    constructor(name: string, workHour: number) {
        super(name, "Intern");
        this.workHour = workHour;
    }

    calculateSalary(): number {
        return 30000 * this.workHour;
    }
}

class OfficialEmployee extends Employee {
    private overtimeWage: number;

    constructor(name: string, overtimeWage: number) {
        super(name, "Official");
        this.overtimeWage = overtimeWage;
    }

    calculateSalary(): number {
        return 20000000 + this.overtimeWage;
    }
}

// Khởi tạo đối tượng từ lớp InternEmployee và tính lương
const intern = new InternEmployee("John", 40);
console.log("Intern Salary:", intern.calculateSalary());

// Khởi tạo đối tượng từ lớp OfficialEmployee và tính lương
const official = new OfficialEmployee("Alice", 500000);
console.log("Official Salary:", official.calculateSalary());
