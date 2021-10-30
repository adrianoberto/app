import { Routes } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component';
import { FiisComponent } from './fiis/fiis.component';
import { TransactionsComponent } from './transactions/transactions.component';

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
  {   
    path: ':id/fiis',
    component: FiisComponent,
    data: {
      title: 'Fundos Imobiliarios', 
      icon: 'account_balance_wallet'
    },
    children: []
  },
  {   
    path: ':id/transactions',
    component: TransactionsComponent,
    data: {
      title: 'Transações', 
      icon: 'account_balance_wallet'
    },
    children: []
  },
  {   
    path: ':id/transactions/:assetName',
    component: TransactionsComponent,
    data: {
      title: 'Transações', 
      icon: 'account_balance_wallet'
    },
    children: []
  },
];