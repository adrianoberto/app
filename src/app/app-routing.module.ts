import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksComponent } from './views/wallets/stocks/stocks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'wallets',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   redirectTo: 'wallets/fyudsifuyfs/fiis',
  //   pathMatch: 'full'
  // },
  {  
    path: 'wallets', 
    loadChildren: () => import('./views/wallets/wallets.module').then(m => m.WalletsModule),
    data: { title: 'Wallets' } 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
