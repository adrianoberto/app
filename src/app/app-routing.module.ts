import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksComponent } from './views/walllets/stocks/stocks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'wallets/fyudsifuyfs/fiis',
    pathMatch: 'full'
  },
  {  
    path: 'wallets', 
    loadChildren: () => import('./views/walllets/wallets.module').then(m => m.WalletsModule),
    data: { title: 'Wallets' } 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
