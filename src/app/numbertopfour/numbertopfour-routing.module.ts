import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumbertopfourPage } from './numbertopfour.page';

const routes: Routes = [
  {
    path: '',
    component: NumbertopfourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumbertopfourPageRoutingModule {}
