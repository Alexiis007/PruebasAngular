import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { AllPokomonsComponent } from './pages/all-pokomons/all-pokomons.component';
import { CardComponent } from './components/card/card.component';
import { PrimeNgModule } from '../PrimeNg/prime-ng/prime-ng.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SharedPointModule } from '../shared-point/shared-point.module';


@NgModule({
  declarations: [
    AllPokomonsComponent,
    CardComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    PrimeNgModule,
    SharedPointModule
  ]
})
export class PokedexModule { }
