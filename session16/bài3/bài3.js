"use strict";
/*
Abstract Method:
Abstract method là một phương thức được khai báo trong một lớp abstract mà không có thân hàm (body).
Lớp chứa abstract method phải là một lớp abstract.
Các lớp con phải cung cấp triển khai (implement) cho abstract method bằng cách ghi đè nó.
Abstract method được sử dụng khi chúng ta muốn định nghĩa một hành động cụ thể, nhưng không thể cung cấp một triển khai mặc định trong lớp cha.
*/
class Animal {
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}
const myDog = new Dog();
myDog.makeSound(); // Output: Woof! Woof!
/*
Method:
Method là một phương thức có thân hàm (body) và được triển khai (implement) trong một lớp.
Method được sử dụng khi chúng ta muốn định nghĩa một hành động cụ thể và có thể cung cấp một triển khai mặc định trong lớp.
Method có thể được gọi trực tiếp từ một đối tượng của lớp đó hoặc thông qua kế thừa từ một lớp cha.
 */
class Calculator {
    add(a, b) {
        return a + b;
    }
}
const myCalculator = new Calculator();
console.log(myCalculator.add(5, 3)); // Output: 8
