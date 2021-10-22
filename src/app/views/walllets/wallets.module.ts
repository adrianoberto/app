import { StocksModule } from './stocks/stocks.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WalletsRoutes } from './wallets.routings';
import { CustomCurrencyPipe } from '@app/shared';

@NgModule({
  declarations: [
  ],
  imports: [    
    CommonModule,
    StocksModule,
    RouterModule.forChild(WalletsRoutes)
  ],
  providers: [],
})
export class WalletsModule { }
