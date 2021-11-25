import { Injectable } from '@angular/core';
import { Item } from './Item';
import { create } from './InventorySource';
import { Observable, of } from 'rxjs';

/**
 * Provides the inventory to the pages.
 */
@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventory : Item[] = [];
  max_id: number = -1;
  
  constructor() { 
    this.inventory = create();
    //Get the highest item id
    this.inventory.forEach(e => {
      if (e._id > this.max_id)
        this.max_id = e._id;
    });
  }

  getInventory() : Observable<Item[]> {
    const inv = of(this.inventory);
    return inv;
  }

  /**
   * Attempts to add a new item to the inventory. 
   * Will fail if the inventory already contains an
   * existing item with the same name. 
   * 
   * Returns the add item success state.
   */
  addItem(newItem: Item) : boolean {
    if (this.inventory.some(it => it.name === newItem.name))
      return false;
    else
      this.inventory.push(newItem);

    this.max_id++;
    return true;
  }

  /**
   * Provides a valid id for a new item.
   */
  generateID(): number {
    return this.max_id+1;
  }
}
