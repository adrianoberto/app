import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomPipesModule } from '@app/shared/pipes/pipes.module';
import { ComponentsModule } from '@app/shared/components/components.module';
import { EntryRegisterModule } from '../entry-register/entry-register.module';
import { TransactionsComponent } from './transactions.component';

@NgModule({
  declarations: [
    TransactionsComponent,
  ],
  imports: [
    EntryRegisterModule,
    ComponentsModule,
    CustomPipesModule,
    CommonModule
  ],
  providers: [CustomPipesModule],
})
export class TransactionsModule { }