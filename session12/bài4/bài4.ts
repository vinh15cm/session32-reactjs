class Product {
    protected name: string;
    protected id: string;

    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
    }

    public printInfo(): void {
        console.log("Name:", this.name);
        console.log("ID:", this.id);
    }
}

class Electronic extends Product {
    private brand: string;

    constructor(name: string, id: string, brand: string) {
        super(name, id);
        this.brand = brand;
    }

    public printInfo(): void {
        super.printInfo();
        console.log("Brand:", this.brand);
    }
}

class Book extends Product {
    private author: string;

    constructor(name: string, id: string, author: string) {
        super(name, id);
        this.author = author;
    }

    public printInfo(): void {
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
