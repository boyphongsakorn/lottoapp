import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'checklotto',
    loadChildren: () => import('./checklotto/checklotto.module').then( m => m.ChecklottoPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'sharenumber',
    loadChildren: () => import('./sharenumber/sharenumber.module').then( m => m.SharenumberPageModule)
  },
  {
    path: 'numbertopfour',
    loadChildren: () => import('./numbertopfour/numbertopfour.module').then( m => m.NumbertopfourPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'findnumber',
    loadChildren: () => import('./findnumber/findnumber.module').then( m => m.FindnumberPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
