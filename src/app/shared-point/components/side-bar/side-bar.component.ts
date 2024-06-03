import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  public items : MenuItem[] = [
    {
      routerLink:'/pokedex',
      label:'Pokedex',
      icon:'pi-star'
    },
    {
      routerLink:'/rickAndMorty',
      label:'Rick & Morty',
      icon:'pi-star'
    },
    {
      routerLink:'/calculadora',
      label:'Calculadora',
      icon:'pi-star'
    },
  ]
}
