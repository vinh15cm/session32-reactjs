class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class CartProduct extends Product {
    quantity: number;

    constructor(id: number, name: string, price: number, quantity: number) {
        super(id, name, price);
        this.quantity = quantity;
    }

    calculatePrice(): number {
        return this.price * this.quantity;
    }

    increaseQuantity(): void {
        this.quantity++;
    }

    decreaseQuantity(): void {
        if (this.quantity > 0) {
            this.quantity--;
        }
    }
}

class ShopProduct extends Product {
    stock: number;

    constructor(id: number, name: string, price: number, stock: number) {
        super(id, name, price);
        this.stock = stock;
    }
}

class Cart {
    items: CartProduct[];

    constructor() {
        this.items = [];
    }

    addItem(shopProduct: ShopProduct, quantity: number): void {
        if (quantity <= shopProduct.stock) {
            const cartProduct = new CartProduct(shopProduct.id, shopProduct.name, shopProduct.price, quantity);
            this.items.push(cartProduct);
            shopProduct.stock -= quantity;
        } else {
            console.log(`Not enough stock for ${shopProduct.name}`);
        }
    }

    removeItem(cartProduct: CartProduct): void {
        const index = this.items.indexOf(cartProduct);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    getTotal(): number {
        let total = 0;
        this.items.forEach(item => {
            total += item.calculatePrice();
        });
        return total;
    }
}
