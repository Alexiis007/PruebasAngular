import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { AllPokomonsComponent } from './pages/all-pokomons/all-pokomons.component';
import { CardComponent } from './components/card/card.component';
import { PrimeNgModule } from '../PrimeNg/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    AllPokomonsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    PrimeNgModule,
  ]
})
export class PokedexModule { }
