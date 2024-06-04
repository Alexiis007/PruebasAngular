import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnInit, Signal, inject, signal } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PokemonData } from '../interfaces/PokemonData.interface';

@Injectable({
  providedIn: 'root'
})
export class PokedexService{

  private http = inject(HttpClient);

  public pokemonDataByName(name : string):Observable<PokemonData>{
    return this.http.get<PokemonData>(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

}
