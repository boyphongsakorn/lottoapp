import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumbertopfourPageRoutingModule } from './numbertopfour-routing.module';

import { NumbertopfourPage } from './numbertopfour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumbertopfourPageRoutingModule
  ],
  declarations: [NumbertopfourPage]
})
export class NumbertopfourPageModule {}
