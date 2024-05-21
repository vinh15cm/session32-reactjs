"use strict";
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class CartProduct extends Product {
    constructor(id, name, price, quantity) {
        super(id, name, price);
        this.quantity = quantity;
    }
    calculatePrice() {
        return this.price * this.quantity;
    }
    increaseQuantity() {
        this.quantity++;
    }
    decreaseQuantity() {
        if (this.quantity > 0) {
            this.quantity--;
        }
    }
}
class ShopProduct extends Product {
    constructor(id, name, price, stock) {
        super(id, name, price);
        this.stock = stock;
    }
}
class Cart {
    constructor() {
        this.items = [];
    }
    addItem(shopProduct, quantity) {
        if (quantity <= shopProduct.stock) {
            const cartProduct = new CartProduct(shopProduct.id, shopProduct.name, shopProduct.price, quantity);
            this.items.push(cartProduct);
            shopProduct.stock -= quantity;
        }
        else {
            console.log(`Not enough stock for ${shopProduct.name}`);
        }
    }
    removeItem(cartProduct) {
        const index = this.items.indexOf(cartProduct);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    getTotal() {
        let total = 0;
        this.items.forEach(item => {
            total += item.calculatePrice();
        });
        return total;
    }
}
