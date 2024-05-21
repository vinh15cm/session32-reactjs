"use strict";
class Product {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    printInfo() {
        console.log("Name:", this.name);
        console.log("ID:", this.id);
    }
}
class Electronic extends Product {
    constructor(name, id, brand) {
        super(name, id);
        this.brand = brand;
    }
    printInfo() {
        super.printInfo();
        console.log("Brand:", this.brand);
    }
}
class Book extends Product {
    constructor(name, id, author) {
        super(name, id);
        this.author = author;
    }
    printInfo() {
        super.printInfo();
        console.log("Author:", this.author);
    }
}
// Tạo ra thực thể từ lớp Electronic và gọi phương thức printInfo để in ra thông tin
const electronicProduct = new Electronic("Smartphone", "E123", "Samsung");
electronicProduct.printInfo();
console.log();
// Tạo ra thực thể từ lớp Book và gọi phương thức printInfo để in ra thông tin
const bookProduct = new Book("The Great Gatsby", "B456", "F. Scott Fitzgerald");
bookProduct.printInfo();
