import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChecklottoPage } from './checklotto.page';

const routes: Routes = [
  {
    path: '',
    component: ChecklottoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChecklottoPageRoutingModule {}
