class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: string;

    constructor(name: string, speed: number, id: string) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    public slowDown(amount: number): void {
        this.speed -= amount;
    }

    public speedUp(amount: number): void {
        this.speed += amount;
    }

    public showSpeed(): void {
        console.log("Current speed:", this.speed);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: string, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    // Tăng tốc độ của xe đạp
    public speedUp(amount: number): void {
        // Xe đạp không thể tăng tốc quá mức 30
        const newSpeed = this.speed + amount;
        this.speed = Math.min(newSpeed, 30);
    }

    // Giảm tốc độ của xe đạp
    public slowDown(amount: number): void {
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
