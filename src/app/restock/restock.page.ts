import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { InventoryService } from '../inventory-service.service';
import { NgForm } from '@angular/forms';
import { Item } from '../Item';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.page.html',
  styleUrls: ['./restock.page.scss'],
})
export class RestockPage implements OnInit {

  inventory: Item[];
  selectedItem: Item;
  errorMsg: string = "";
  displayError: boolean = false;
  error_color: string = "pink";
  constructor(private inv_serv: InventoryService, private location: Location) { }

  ngOnInit() {
    this.selectedItem = null;
    let inv_observable = this.inv_serv.getInventory();
    inv_observable.subscribe(inv => {
      this.inventory = inv;
    });
  }

  itemClicked(item: Item) {
    this.selectedItem = item;
  }

  validNumber(text: string): boolean {
    if (!text)
      return false;

    let num: number = parseInt(text);

    if (isNaN(num)) {
      return false;
    } else {
      return true;
    }
  }

  updateStock(f: NgForm): void {
    if (!this.selectedItem) {
      alert("An item must be selected.");
      return;
    }

    if ( !f.valid || !this.validNumber(f.value.add_qty) ) {
      this.errorMsg = "An improper quantity was entered.";
      this.displayError = true;
      return;
    } else if (f.valid && parseInt(f.value.add_qty) <= 0) {
      this.errorMsg = "Restock quantity must be greater than zero.";
      this.displayError = true;
      return;
    } else {
      this.displayError = false;
      this.selectedItem.quantity += parseInt(f.value.add_qty);
    }
  }

  back(): void {
    this.location.back();
  }
}
