class Product {
    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getDescription(): void {
        console.log("Name:", this.name);
        console.log("Price:", this.price);
    }
}

class Electronics extends Product {
    private brand: string;

    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this.brand = brand;
    }

    public printInfo(): void {
        super.getDescription();
        console.log("Brand:", this.brand);
    }
}

// Tạo ra một thực thể từ lớp Electronics và in ra thông tin
const myElectronics = new Electronics("Smartphone", 500, "Samsung");
myElectronics.printInfo();
