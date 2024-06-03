import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    CardModule,
    ButtonModule,
  ]
})
export class PrimeNgModule { }
