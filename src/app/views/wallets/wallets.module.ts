import { FiisModule } from './fiis/fiis.module';
import { AssetsModule } from './assets/assets.module';
import { StocksModule } from './stocks/stocks.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WalletsRoutes } from './wallets.routings';
import { EntryRegisterModule } from './entry-register/entry-register.module';
import { TransactionsModule } from './transactions/transactions.module';
import { AssetsComponent } from './assets/assets.component';


@NgModule({
  declarations: [    
  ],
  exports: [
    AssetsModule,
    StocksModule,
    FiisModule,
    TransactionsModule,
    EntryRegisterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(WalletsRoutes)
  ],
  providers: [],
})
export class WalletsModule { }
