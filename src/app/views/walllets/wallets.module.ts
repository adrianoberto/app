import { FiisModule } from './fiis/fiis.module';
import { StocksModule } from './stocks/stocks.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WalletsRoutes } from './wallets.routings';
import { EntryRegisterModule } from './entry-register/entry-register.module';


@NgModule({
  declarations: [
  ],
  exports: [
    StocksModule,
    FiisModule,
    EntryRegisterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(WalletsRoutes)
  ],
  providers: [],
})
export class WalletsModule { }
