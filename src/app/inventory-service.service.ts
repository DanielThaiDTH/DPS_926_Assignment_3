import { Injectable } from '@angular/core';
import { Item } from './Item';
import { create } from './InventorySource';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventory : Item[] = [];
  max_id: number = -1;
  
  constructor() { 
    this.inventory = create();
    this.inventory.forEach(e => {
      if (e._id > this.max_id)
        this.max_id = e._id;
    });
  }

  getInventory() : Observable<Item[]> {
    const inv = of(this.inventory);
    return inv;
  }

  addItem(newItem: Item) : boolean {
    if (this.inventory.some(it => it.name === newItem.name))
      return false;
    else
      this.inventory.push(newItem);

    this.max_id++;
    return true;
  }

  generateID(): number {
    return this.max_id+1;
  }
}
