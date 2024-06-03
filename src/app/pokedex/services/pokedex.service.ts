import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnInit, Signal, inject, signal } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Chain, PoekmonData, Pokemons, Result } from '../interfaces/pokemons.interface';
import { DataPokemon } from '../interfaces/DataPokemon.interface';
import { Evolutions } from '../interfaces/Evolutions.interface';



@Injectable({
  providedIn: 'root'
})
export class PokedexService{

  private http = inject(HttpClient);

  private data !: Result[];


  public dataEvolutions(){
  }


}
