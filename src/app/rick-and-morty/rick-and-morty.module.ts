import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickAndMortyRoutingModule } from './rick-and-morty-routing.module';
import { CardComponent } from './components/card/card.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { PrimeNgModule } from '../PrimeNg/prime-ng/prime-ng.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SharedPointModule } from '../shared-point/shared-point.module';
import { TraduccionPipe } from './pipes/traduccion.pipe';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { EditComponent } from './pages/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardComponent,
    CharactersComponent,
    LayoutPageComponent,
    TraduccionPipe,
    CharacterDetailsComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    RickAndMortyRoutingModule,
    PrimeNgModule,
    SharedPointModule,
    ReactiveFormsModule,
  ]
})
export class RickAndMortyModule { }
