"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log("Name:", this.name);
        console.log("Price:", this.price);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    printInfo() {
        super.getDescription();
        console.log("Brand:", this.brand);
    }
}
// Tạo ra một thực thể từ lớp Electronics và in ra thông tin
const myElectronics = new Electronics("Smartphone", 500, "Samsung");
myElectronics.printInfo();
