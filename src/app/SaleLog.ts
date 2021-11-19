export class SaleLog {
    name: string;
    quantity: number;
    total_cost: number;
    date: Date;
    constructor (name: string, qty: number, total: number) {
        this.name = name;
        this.quantity = qty;
        this.total_cost = total;
        this.date = new Date();
    }
}