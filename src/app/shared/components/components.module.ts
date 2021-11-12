import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component'; 
import { RouterModule } from '@angular/router';
import { PopupBottomComponent } from './popup-bottom/popup-bottom.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';

@NgModule({
  declarations: [ 
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PopupBottomComponent,
    CustomModalComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PopupBottomComponent,
    CustomModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
