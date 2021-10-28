import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FiisComponent } from './fiis.component';
import { CustomPipesModule } from '@app/shared/pipes/pipes.module';
import { ComponentsModule } from '@app/shared/components/components.module';
import { EntryRegisterModule } from '../entry-register/entry-register.module';

@NgModule({
  declarations: [    
    FiisComponent
  ],
  imports: [
    EntryRegisterModule,
    ComponentsModule,
    CustomPipesModule,
    CommonModule
  ],
  providers: [],
})
export class FiisModule { }
