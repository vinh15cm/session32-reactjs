class Employee1 {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    public printInfo(): void {
        console.log("Name:", this.name);
        console.log("Company:", this.company);
        console.log("Phone:", this.phone);
    }
}

class Manager1 extends Employee1 {
    public teamSize: number;

    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }

    // Ghi đè phương thức printInfo của lớp cha Employee
    public printInfo(): void {
        super.printInfo(); // Gọi phương thức printInfo của lớp cha
        console.log("Team Size:", this.teamSize);
    }
}

// Tạo một đối tượng Manager và gọi phương thức printInfo để in ra tất cả thông tin
const manager1 = new Manager1("Alice", "XYZ Company", "987654321", 10);
manager1.printInfo();
