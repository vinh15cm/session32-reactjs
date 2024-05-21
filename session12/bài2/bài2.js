"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log("Student ID:", this.id);
        console.log("Student Name:", this.name);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
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
