/*
OOP lập trình hướng đối tượng
là môn hình dựa vào các đối tượng thực tế
đối tượng con mèo , đối tượng ô tô , đối tượng cái bàn, đối tượng máy tính ,...
ví dụ đối tượng con mèo
thuộc tính : màu lông, màu mắt , nặng ,...
phương thức : bắt chuột , chạy , nhảy,...
đối tượng cái xe ô tô
thuộc tính: trọng lượng , màu , đời xe ,...
phương thức:chạy , nuốt xăng,

cách khởi tạo đối tượng
1, dùng let,const,var 
let student={

}
2, dùng new Object ()
3, dùng hàm tạo constuctor ==> dùng từ khóa new
4,dùng từ khóa class
*/
//yêu cầu tạo 1 đối tượng student
class Student {
    // khai báo các thuộc tính
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    //khai báo các phương thức
    getName(): string {
        console.log(`xin chào ${this.name}`);
        return this.name
    }
    getAge(): void {
        console.log("");
    }
}
//tạo đối tượng dùng từ khóa new
let std1 = new Student("minh thu", 5);//instance
console.log("11111", std1)
//lấy thuộc tính
//đối tượng.thuộc tính
console.log("đối tượng std1 có thuộc tính name có giá trị là", std1.name)
//lấy phương thức
//đối tượng.phương thức
console.log("gọi phương thức getName", std1.getName());
/*
các tính chất của lập trình hướng đối tượng
4 tính chất
1, đóng gói: encapsulation
2, kế thừa : inheritance
3,đa hình : polymorshysm
4,tính trừu tượng : abstraction
*/