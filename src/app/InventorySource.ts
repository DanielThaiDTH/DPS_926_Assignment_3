import { Item } from './Item';

export function create() : Item[] {
    let inventory : Item[] = [];
    inventory.push( new Item(1, "Pants", 55.50, 20));
    inventory.push( new Item(2, "Shoes", 80.99, 20));
    inventory.push( new Item(4, "Glasses", 230.30, 5));
    inventory.push( new Item(5, "T-Shirt", 50, 40));
    inventory.push( new Item(6, "Jacket", 179.99, 20));
    inventory.push( new Item(7, "Scarf", 25.50, 50));
    inventory.push( new Item(8, "Baseball Cap", 49.97, 50));

    return inventory;
}

