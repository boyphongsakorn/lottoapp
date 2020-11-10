import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharenumberPage } from './sharenumber.page';

const routes: Routes = [
  {
    path: '',
    component: SharenumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharenumberPageRoutingModule {}
