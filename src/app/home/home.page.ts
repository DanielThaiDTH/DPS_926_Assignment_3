import { Component } from '@angular/core';
import { InventoryService } from '../inventory-service.service';
import { Observable, ObservedValueOf } from 'rxjs';
import { Item } from '../Item';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  inventory: Item[];
  count: number;
  selectedItem: Item;
  
  constructor(private inv_serv : InventoryService) {
    this.count = 0;
    this.selectedItem = null;
  }

  ngOnInit(): void {
    let inv: Observable<Item[]> = this.inv_serv.getInventory();
    inv.subscribe(res => this.inventory = res);
  }

  updateCount(num: number) {
    this.count = num;
  }

  clearCount() {
    this.count = 0;
  }

  itemClick(it: Item) {
    this.selectedItem = it;
  }

  buyItem() {
    if (!this.selectedItem) {
      alert("No item selected");
    } else if (this.selectedItem.quantity < this.count) {
      alert(`Number of ${this.selectedItem.name} selected is more than what is in the inventory.`);
    } else if (this.count > 0) {
      this.selectedItem.quantity -= this.count;
    }

    this.clearCount();
    
  }
}
