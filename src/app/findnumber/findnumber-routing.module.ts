import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindnumberPage } from './findnumber.page';

const routes: Routes = [
  {
    path: '',
    component: FindnumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindnumberPageRoutingModule {}
