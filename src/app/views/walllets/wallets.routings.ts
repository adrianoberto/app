import { Routes } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component';

export const WalletsRoutes: Routes = [
  {   
    path: ':id/stocks',
    component: StocksComponent,
    data: {
      title: 'Ações', 
      icon: 'account_balance_wallet'
    },
    children: []
  },
];