interface ChangeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}

class Vehicle implements ChangeSpeed {
    private speed: number;

    constructor() {
        this.speed = 0;
    }

    speedUp(): void {
        this.speed += 10;
        console.log("Speeding up. Current speed:", this.speed);
    }

    slowDown(): void {
        if (this.speed > 0) {
            this.speed -= 10;
            console.log("Slowing down. Current speed:", this.speed);
        } else {
            console.log("Vehicle has stopped. Current speed:", this.speed);
        }
    }

    stop(): void {
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
