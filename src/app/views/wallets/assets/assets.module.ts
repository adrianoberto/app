import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StocksComponent } from '../stocks/stocks.component';
import { CustomPipesModule } from '@app/shared/pipes/pipes.module';
import { ComponentsModule } from '@app/shared/components/components.module';
import { EntryRegisterModule } from '../entry-register/entry-register.module';
import { ResumeTransactionsComponent } from '../stocks/resume-transactions/resume-transactions.component';
import { AssetsComponent } from './assets.component';

@NgModule({
  declarations: [
    AssetsComponent,
    //ResumeTransactionsComponent
  ],
  imports: [
    EntryRegisterModule,
    ComponentsModule,
    CustomPipesModule,
    CommonModule
  ],
  providers: [CustomPipesModule],
})
export class AssetsModule { }