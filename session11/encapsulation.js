"use strict";
/*
cách tạo class
*/
class Student {
    //mặc định nếu không điền sẽ là public
    // bến ngoài class student có thể truy cập đc
    constructor(name) {
        this.name = name;
    }
    //nơi khai báo các phương thức
    //thầy có phương thức getName
    getName() {
        return this.name;
    }
    //thầy có phương thức đi thay đổi tên người đó 
    set setName(newName) {
        this.name = newName;
    }
}
//instance nghĩa là đi tạo đối tượng từ class
let std1 = new Student("minh thu");
let std2 = new Student("hoa");
//std1.name = "hồng";
std1.setName = "trang";
console.log(11111, std1.getName());
/*
    access modifier:phạm vi truy cập
    3 phạm vi:
    1,public
    thì bên ngoài có thể truy cập đc
    2,private
    chỉ đc truy cập ở bên trong class
    3,protected
    chỉ được truy cập ở bên trong class và subclass(class con-kế thừa)
*/ 
