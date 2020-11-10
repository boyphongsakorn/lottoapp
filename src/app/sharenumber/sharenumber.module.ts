import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharenumberPageRoutingModule } from './sharenumber-routing.module';

import { SharenumberPage } from './sharenumber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharenumberPageRoutingModule
  ],
  declarations: [SharenumberPage]
})
export class SharenumberPageModule {}
