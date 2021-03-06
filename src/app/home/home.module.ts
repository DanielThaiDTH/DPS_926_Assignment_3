import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { ItemInfoComponent } from '../item-info/item-info.component';
import { NumberInputComponent } from '../number-input/number-input.component';
import { ItemNamePipe } from '../item-name.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ItemInfoComponent, NumberInputComponent, ItemNamePipe]
})
export class HomePageModule {}
