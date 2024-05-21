"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    //bắt buộc phải triển khai phương thức sale trong interface
    sale() {
        return "sale 5%";
    }
    sale1() {
        return "sale 15%";
    }
}
