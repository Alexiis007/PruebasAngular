import { Component, Input } from '@angular/core';
import { PokemonData } from '../../interfaces/PokemonData.interface';

@Component({
  selector: 'pokedex-component-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  data ?: PokemonData;
}
