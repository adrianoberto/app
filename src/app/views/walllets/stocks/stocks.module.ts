import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StocksComponent } from './stocks.component';
import { CustomPipesModule } from '@app/shared/pipes/pipes.module';
import { ComponentsModule } from '@app/shared/components/components.module';
import { EntryRegisterComponent } from '../entry-register/entry-register.component';
import { EntryRegisterModule } from '../entry-register/entry-register.module';

@NgModule({
  declarations: [
    StocksComponent
  ],
  imports: [
    EntryRegisterModule,
    ComponentsModule,
    CustomPipesModule,
    CommonModule
  ],
  providers: [],
})
export class StocksModule { }
