import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '@app/shared/components/components.module';
import { WalletsModule } from '@app/views/wallets/wallets.module';
import { WalletsComponent } from './views/wallets/wallets.component';


@NgModule({
  declarations: [
    AppComponent,
    WalletsComponent,    
  ],
  imports: [
    ComponentsModule,
    WalletsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
