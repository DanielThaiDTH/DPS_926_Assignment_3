import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
})
export class NumberInputComponent implements OnInit {
  @Input() count : number;
  digits : Array<number>;
  displayLock : boolean;
  @Output() countChange = new EventEmitter<number>();

  constructor() { 
    this.count = 0;
    this.displayLock = false;
    this.digits = [];
  }

  ngOnInit() {}

  buttonClick(value: number) {
    //Reset digits if count is cleared
    if (this.count == 0)
      this.digits = [];

    if (this.digits.length > 9) {
      alert("Quantity too large");
      return;
    } else if (this.digits.length == 0 && value == 0) {
      return; //Do nothing if 0 is the first digit entered
    }

    this.digits.push(value);
    this.count = 0;
    for (let i = 0; i < this.digits.length; i++) {
      this.count += Math.pow(10, this.digits.length - i - 1) * this.digits[i];
    }
    this.countChange.emit(this.count);
  }
}
