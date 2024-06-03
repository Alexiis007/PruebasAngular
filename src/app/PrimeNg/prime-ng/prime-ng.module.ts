import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    CardModule,
    ButtonModule,
    MenubarModule,
    ScrollPanelModule,
  ]
})
export class PrimeNgModule { }
