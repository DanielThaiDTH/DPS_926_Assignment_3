/**
 * Logs a purchase, storing item name , qty and total price. New id generated for each purchase. 
 * The date is the created at the time of construction.
 */
export class SaleLog {
    private static id_gen: number = 0;
    id: number;
    name: string;
    quantity: number;
    total_cost: number;
    date: Date;
    constructor (name: string, qty: number, total: number) {
        this.id = SaleLog.id_gen++;
        this.name = name;
        this.quantity = qty;
        this.total_cost = total;
        this.date = new Date();
    }
}