import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FiisComponent } from './fiis.component';
import { CustomPipesModule } from '@app/shared/pipes/pipes.module';
import { ComponentsModule } from '@app/shared/components/components.module';

@NgModule({
  declarations: [    
    FiisComponent
  ],
  imports: [
    ComponentsModule,
    CustomPipesModule,
    CommonModule
  ],
  providers: [],
})
export class FiisModule { }
