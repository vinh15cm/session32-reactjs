abstract class Employee {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    //khai báo phương thức
    // getFullName(){
    //     return this.name;
    // }
    abstract getFullName(): void;
    abstract getAge(): void;
    // đói với phương thức trong abstract thì chỉ tên phương thức , kiểu dữ liệu

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
    private age: number;
    constructor(age: number, name: string) {
        super(name)
        this.age = age;
        this.name = name;
    }
    getFullName(): void {

    }
    getAge(): void {

    }
}
class Person {
    name: string;
    constructor(name: string) {
        this.name = name
    }
}
class Person1 extends Person {
    // nếu triển khai phương thức class cha thì gọi và overriding (ghi đè phương thức)
}