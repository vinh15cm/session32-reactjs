"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed -= amount;
    }
    speedUp(amount) {
        this.speed += amount;
    }
    showSpeed() {
        console.log("Current speed:", this.speed);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    // Tăng tốc độ của xe đạp
    speedUp(amount) {
        // Xe đạp không thể tăng tốc quá mức 30
        const newSpeed = this.speed + amount;
        this.speed = Math.min(newSpeed, 30);
    }
    // Giảm tốc độ của xe đạp
    slowDown(amount) {
        // Xe đạp không thể giảm tốc dưới 0
        const newSpeed = this.speed - amount;
        this.speed = Math.max(newSpeed, 0);
    }
}
// Tạo ra một thực thể từ lớp Bicycle
const myBicycle = new Bicycle("Giant", 20, "B123", 5);
// In thông tin về tốc độ ban đầu
myBicycle.showSpeed();
// Tăng tốc độ và in lại thông tin
myBicycle.speedUp(10);
myBicycle.showSpeed();
// Giảm tốc độ và in lại thông tin
myBicycle.slowDown(5);
myBicycle.showSpeed();
