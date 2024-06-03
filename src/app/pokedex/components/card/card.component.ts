import { Component, Input } from '@angular/core';
import { DataPokemon } from '../../interfaces/DataPokemon.interface';

@Component({
  selector: 'pokedex-component-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  data ?: string;
  
}
