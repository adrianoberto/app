import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StocksComponent } from './stocks.component';

import { CustomCurrencyPipe } from '@app/shared';

@NgModule({
  declarations: [
    StocksComponent,
    CustomCurrencyPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [],
})
export class StocksModule { }
