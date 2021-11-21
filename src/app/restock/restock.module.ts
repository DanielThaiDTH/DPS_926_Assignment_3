import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestockPageRoutingModule } from './restock-routing.module';

import { RestockPage } from './restock.page';
import { ItemNamePipe } from '../item-name.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestockPageRoutingModule
  ],
  declarations: [RestockPage, ItemNamePipe]
})
export class RestockPageModule {}
