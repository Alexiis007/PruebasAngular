import { Component, Input } from '@angular/core';

@Component({
  selector: 'rick-and-morty-component-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  titulo !: string;
  @Input()
  imagen !: string;
  @Input()
  especie !: string;
  @Input()
  genero !: string;
  @Input()
  estatus !: string;
}
