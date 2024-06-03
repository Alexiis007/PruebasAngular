import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters, Result } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private http = inject(HttpClient);

  public characters():Observable<Characters>{
    return this.http.get<Characters>(`https://rickandmortyapi.com/api/character`)
  }
  public charactersNext(url : string):Observable<Characters>{
    return this.http.get<Characters>(url)
  }
  public characterById(id : string):Observable<Result>{
    console.log(id);
    return this.http.get<Result>(`https://rickandmortyapi.com/api/character/${id}`)
  }
}
