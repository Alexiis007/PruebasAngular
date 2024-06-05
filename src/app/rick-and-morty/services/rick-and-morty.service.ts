import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters, Result } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private http = inject(HttpClient);

  //Primeros 20 caracteres de la serie con sus respectivos datos
  public characters():Observable<Characters>{
    return this.http.get<Characters>(`https://rickandmortyapi.com/api/character`)
  }

  //Siguientes 20 caracteres o 20 anteriores dependiendo de el url
  //(este url esta en la primera llamada como nextPage y prevPage)
  public charactersNext(url : string):Observable<Characters>{
    return this.http.get<Characters>(url)
  }

  //Datos de 1 solo caracter
  public characterById(id : string):Observable<Result>{
    console.log(id);
    return this.http.get<Result>(`https://rickandmortyapi.com/api/character/${id}`)
  }
}
