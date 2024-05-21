"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log("Name:", this.name);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("Meo Meo");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("Gau Gau");
    }
}
// Tạo ra đối tượng từ lớp Cat và gọi phương thức printName và makeNoise
const myCat = new Cat("Tom");
myCat.printName();
myCat.makeNoise();
console.log();
// Tạo ra đối tượng từ lớp Dog và gọi phương thức printName và makeNoise
const myDog = new Dog("Max");
myDog.printName();
myDog.makeNoise();
