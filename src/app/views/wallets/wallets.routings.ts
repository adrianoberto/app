import { Routes } from '@angular/router';
import { StocksComponent } from '../wallets/stocks/stocks.component';
import { FiisComponent } from '../wallets/fiis/fiis.component';
import { TransactionsComponent } from '../wallets/transactions/transactions.component';
import { WalletsComponent } from './wallets.component';
import { AssetsComponent } from './assets/assets.component';

export const WalletsRoutes: Routes = [
  {
    path: 'wallets',
    component: WalletsComponent,
    data: {
      title: 'Carteira', 
      icon: 'account_balance_wallet'
    },
    children: []
  },
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
    path: 'fiis',
    component: FiisComponent,
    data: {
      title: 'Fundos Imobiliarios', 
      icon: 'account_balance_wallet',
      type: 'fiis'
    },
    children: []
  },
  {   
    path: 'transactions',
    component: TransactionsComponent,
    data: {
      title: 'Transações', 
      icon: 'account_balance_wallet'
    },
    children: []
  },
  {   
    path: 'transactions/:assetName',
    component: TransactionsComponent,
    data: {
      title: 'Transações', 
      icon: 'account_balance_wallet'
    },
    children: []
  },
];