import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { InventoryService } from '../inventory-service.service';
import { Item } from '../Item';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  errorMsg: string = "";
  displayError: boolean = false;
  error_color: string = "pink";
  constructor(private inv_serv: InventoryService, private location: Location) { }

  ngOnInit() {
  }

  back(): void {
    this.location.back();
  }

  validInt(text: string): boolean {
    if (!text)
      return false;

    let num: number = parseInt(text);

    if (isNaN(num)) {
      return false;
    } else {
      return true;
    }
  }

  validFloat(text: string): boolean {
    if (!text)
      return false;

    let num: number = parseFloat(text);

    if (isNaN(num)) {
      return false;
    } else {
      return true;
    }
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      alert("Invalid Item");
      return;
    }

    let qty = -1;

    if (f.value.qty === '') {
      qty = 0;
    } else if (!this.validInt(f.value.qty)) {
      this.errorMsg = "An improper quantity was entered.";
      this.displayError = true;
      return;
    } else if (parseInt(f.value.qty) < 0) {
      this.errorMsg = "Quantity must be greater than or equal to zero.";
      this.displayError = true;
      return;
    } else {
      this.displayError = false;
      qty = parseInt(f.value.qty);
    }

    let price = -1;

    if (!f.valid || !this.validFloat(f.value.price)) {
      this.errorMsg = "An improper price was entered.";
      this.displayError = true;
      return;
    } else if (f.valid && parseFloat(f.value.price) <= 0) {
      this.errorMsg = "Price must be greater than zero.";
      this.displayError = true;
      return;
    } else {
      this.displayError = false;
      price = parseFloat(f.value.price);
    }

    let isAdded = this.inv_serv.addItem(new Item(this.inv_serv.generateID(), f.value.name, qty, price));

    if (!isAdded) {
      this.errorMsg = "Item with the name " + f.value.name + " already exists.";
      this.displayError = true;
    } else {
      this.displayError = false;
      alert("New product " + f.value.name + " successfully added.");
      this.location.back();
    }
  }

}
