import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraRoutingModule } from './calculadora-routing.module';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SharedPointModule } from '../shared-point/shared-point.module';
import { PrimeNgModule } from '../PrimeNg/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    CalculadoraComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule,
    SharedPointModule,
    PrimeNgModule,
  ]
})
export class CalculadoraModule { }
