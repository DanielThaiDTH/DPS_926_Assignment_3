import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { InventoryService } from '../inventory-service.service';
import { NgForm } from '@angular/forms';
import { Item } from '../Item';

/**
 * Class for the restock page.
 */
@Component({
  selector: 'app-restock',
  templateUrl: './restock.page.html',
  styleUrls: ['./restock.page.scss'],
})
export class RestockPage implements OnInit {

  inventory: Item[];
  selectedItem: Item;
  errorMsg: string = ""; //Error msg for invalid input
  displayError: boolean = false; //Only display error msg if true
  error_color: string = "pink";
  constructor(private inv_serv: InventoryService, private location: Location) { }

  ngOnInit() {
    this.selectedItem = null;
    let inv_observable = this.inv_serv.getInventory();
    inv_observable.subscribe(inv => {
      this.inventory = inv;
    });
  }

  /**
   * Sets the selected item as the one that was clicked.
   */
  itemClicked(item: Item) {
    this.selectedItem = item;
  }

  validNumber(text: string): boolean {
    if (!text)
      return false;

    let num: number = parseInt(text);

    return !isNaN(num);
  }

  /**
   * Validates the update stock form. Checks if an item is selected and 
   * if the given quantity is a number. Displays an error message on 
   * screen if not. Adds to the quantity of the selected item if 
   * successful.
   */
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

  /**
   * Navigate back to the Manager page using Location
   */
  back(): void {
    this.location.back();
  }
}
