import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PrimeNgModule } from '../PrimeNg/prime-ng/prime-ng.module';



@NgModule({
  declarations: [
     SideBarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports:[
    SideBarComponent,
  ]
})
export class SharedPointModule { }
