import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WalletsModule } from './views/walllets/wallets.module';

import { 
  HeaderComponent,
  FooterComponent,
  CustomCurrencyPipe
} from '@app/shared';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent    
  ],
  imports: [
    WalletsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
