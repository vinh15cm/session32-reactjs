"use strict";
class Vehicle {
    constructor() {
        this.speed = 0;
    }
    speedUp() {
        this.speed += 10;
        console.log("Speeding up. Current speed:", this.speed);
    }
    slowDown() {
        if (this.speed > 0) {
            this.speed -= 10;
            console.log("Slowing down. Current speed:", this.speed);
        }
        else {
            console.log("Vehicle has stopped. Current speed:", this.speed);
        }
    }
    stop() {
        this.speed = 0;
        console.log("Vehicle has stopped. Current speed:", this.speed);
    }
}
// Tạo ra một thực thể từ lớp Vehicle
const myVehicle = new Vehicle();
// Gọi các phương thức và in thông tin để kiểm tra kết quả
myVehicle.speedUp();
myVehicle.speedUp();
myVehicle.slowDown();
myVehicle.stop();
