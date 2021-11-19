import { Injectable } from '@angular/core';
import { Item } from './Item';
import { create } from './InventorySource';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventory : Item[] = [];
  
  constructor() { 
    this.inventory = create();
  }

  getInventory() : Observable<Item[]> {
    const inv = of(this.inventory);
    return inv;
  }
}
