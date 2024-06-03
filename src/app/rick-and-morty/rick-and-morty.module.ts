import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickAndMortyRoutingModule } from './rick-and-morty-routing.module';
import { CardComponent } from './components/card/card.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { PrimeNgModule } from '../PrimeNg/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    CardComponent,
    CharactersComponent,
  ],
  imports: [
    CommonModule,
    RickAndMortyRoutingModule,
    PrimeNgModule,
  ]
})
export class RickAndMortyModule { }
