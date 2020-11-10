import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindnumberPageRoutingModule } from './findnumber-routing.module';

import { FindnumberPage } from './findnumber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindnumberPageRoutingModule
  ],
  declarations: [FindnumberPage]
})
export class FindnumberPageModule {}
