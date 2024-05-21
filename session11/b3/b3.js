"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log("Name:", this.name);
    }
}
class Student1 extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        super.displayInfo();
        console.log("ID:", this.id);
    }
}
// Khởi tạo đối tượng từ lớp Student và sử dụng phương thức displayInfo để in thông tin
const student1 = new Student("John Doe");
student1.displayInfo();
