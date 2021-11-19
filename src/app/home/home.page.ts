import { Component, ViewChild } from '@angular/core';
import { InventoryService } from '../inventory-service.service';
import { HistoryService } from '../history.service';
import { Observable, ObservedValueOf } from 'rxjs';
import { Item } from '../Item';
import { SaleLog } from '../SaleLog';
import { NumberInputComponent } from '../number-input/number-input.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  inventory: Item[];
  count: number;
  selectedItem: Item;

  @ViewChild(NumberInputComponent)
  private num_input: NumberInputComponent;
  
  constructor(private inv_serv: InventoryService, private his_serv: HistoryService) {
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

  buyItem(): void {
    if (!this.selectedItem) {
      alert("No item selected");
    } else if (this.selectedItem.quantity < this.count) {
      alert(`Number of ${this.selectedItem.name} selected is more than what is in the inventory.`);
    } else if (this.count > 0) {
      this.selectedItem.quantity -= this.count;
      this.his_serv.addHistory( new SaleLog(this.selectedItem.name, this.count, this.count*this.selectedItem.price) );
    }

    this.clearCount();
    this.num_input.clearDigits();
  }
}
