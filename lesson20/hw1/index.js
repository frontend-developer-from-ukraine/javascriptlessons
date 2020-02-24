export class Order {
    constructor(price, city, type) {
        this.id = (Math.random()).toString();
        this.price = price;
        this.dateCreated = new Date();
        this.dateConfirmed = 0;
        this.isConfirmed = false;
        this.city = city;
        this.type = type;
    }

    checkPrice() {}
    confirmOrder() {
        if (!this.isConfirmed) {
            this.isConfirmed = true;
        }

    }
    isValidType() {
        return (this.type === 'Buy' || this.type === 'Sell');
    }
}
const newBuy = new Order(100000, 'Odessa', 'Buy');
console.log(newBuy);