import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChecklottoPageRoutingModule } from './checklotto-routing.module';

import { ChecklottoPage } from './checklotto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecklottoPageRoutingModule
  ],
  declarations: [ChecklottoPage]
})
export class ChecklottoPageModule {}
