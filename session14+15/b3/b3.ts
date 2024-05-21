class MenuItem {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Table {
    id: number;
    capacity: number;
    available: boolean;

    constructor(id: number, capacity: number) {
        this.id = id;
        this.capacity = capacity;
        this.available = true;
    }
}

class Reservation {
    id: number;
    customerName: string;
    tableId: number;

    constructor(id: number, customerName: string, tableId: number) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}

class Order {
    id: number;
    tableId: number;
    items: MenuItem[];

    constructor(id: number, tableId: number, items: MenuItem[]) {
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }

    getTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

class Restaurant {
    menu: MenuItem[];
    tables: Table[];
    reservations: Reservation[];
    orders: Order[];

    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }

    addMenuItem(item: MenuItem): void {
        this.menu.push(item);
    }

    addTable(table: Table): void {
        this.tables.push(table);
    }

    makeReservation(reservation: Reservation): void {
        const table = this.tables.find(t => t.id === reservation.tableId);
        if (table) {
            if (table.available) {
                table.available = false;
                this.reservations.push(reservation);
                console.log(`Table ${reservation.tableId} reserved for ${reservation.customerName}`);
            } else {
                console.log(`Table ${reservation.tableId} is already reserved.`);
            }
        } else {
            console.log(`Table ${reservation.tableId} not found.`);
        }
    }

    placeOrder(order: Order): void {
        this.orders.push(order);
    }

    generateBill(tableId: number): void {
        const order = this.orders.find(o => o.tableId === tableId);
        if (order) {
            const total = order.getTotal();
            console.log(`Total bill for Table ${tableId}: $${total}`);
            const table = this.tables.find(t => t.id === tableId);
            if (table) {
                table.available = true;
            }
        } else {
            console.log(`No order found for Table ${tableId}.`);
        }
    }
}

// Example usage
const restaurant = new Restaurant();

const menuItem1 = new MenuItem(1, "Pizza", 10);
const menuItem2 = new MenuItem(2, "Burger", 8);
restaurant.addMenuItem(menuItem1);
restaurant.addMenuItem(menuItem2);

const table1 = new Table(1, 4);
const table2 = new Table(2, 6);
restaurant.addTable(table1);
restaurant.addTable(table2);

const reservation1 = new Reservation(1, "John Doe", 1);
restaurant.makeReservation(reservation1);

const order1 = new Order(1, 1, [menuItem1, menuItem2]);
restaurant.placeOrder(order1);

restaurant.generateBill(1);
