export class Item {
    _id: number;
    name: string;
    quantity: number;
    price: number;

    constructor(id: number, name: string, price: number, qty: number) {
        this._id = id;
        this.name = name;
        this.quantity = qty;
        this.price = price;
    }
}