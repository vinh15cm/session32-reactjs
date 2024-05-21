"use strict";
class Employee {
    constructor(name) {
        this.name = name;
    }
}
// cách khởi tạo đối tượng abstraction
// thêm từ khóa abstract vào đầu class
// intance:
// let emp1 = new Employee("trang");
//emp1 được gọi là 1 instance của class employee
// đối vứi abstraction thì không cho phép khởi tạo đối tượng (instance)
/*
tạo 1 class con kế thừa employee
implement:triển khai
bắt buộc
*/
class Student extends Employee {
    constructor(age, name) {
        super(name);
        this.age = age;
        this.name = name;
    }
    getFullName() {
    }
    getAge() {
    }
}
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Person1 extends Person {
}
