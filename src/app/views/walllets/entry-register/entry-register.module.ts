import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomPipesModule } from '@app/shared/pipes/pipes.module';
import { ComponentsModule } from '@app/shared/components/components.module';
import { EntryRegisterComponent } from './entry-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EntryRegisterComponent
  ],
  imports: [
    ComponentsModule,
    CustomPipesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EntryRegisterComponent
  ],
  providers: [],
})
export class EntryRegisterModule { }
