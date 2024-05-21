"use strict";
class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    calculateSalary() {
        return 0; // Mặc định, lớp cha không có công thức tính lương
    }
}
class InternEmployee extends Employee {
    constructor(name, workHour) {
        super(name, "Intern");
        this.workHour = workHour;
    }
    calculateSalary() {
        return 30000 * this.workHour;
    }
}
class OfficialEmployee extends Employee {
    constructor(name, overtimeWage) {
        super(name, "Official");
        this.overtimeWage = overtimeWage;
    }
    calculateSalary() {
        return 20000000 + this.overtimeWage;
    }
}
// Khởi tạo đối tượng từ lớp InternEmployee và tính lương
const intern = new InternEmployee("John", 40);
console.log("Intern Salary:", intern.calculateSalary());
// Khởi tạo đối tượng từ lớp OfficialEmployee và tính lương
const official = new OfficialEmployee("Alice", 500000);
console.log("Official Salary:", official.calculateSalary());
