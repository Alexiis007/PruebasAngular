import { Component, OnInit, inject } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Result } from '../../interfaces/characters.interface';

@Component({
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit{
  private RickMortySv = inject(RickAndMortyService);
  public data !: Result[];
  public nextUrl !: string | null;
  public prevUrl !: string | null;

  public next(url : string | null){
    if(url == null) return;
    this.RickMortySv.charactersNext(url).subscribe(
      res => {
        this.data = res.results;
        this.nextUrl = res.info.next; 
        this.prevUrl = res.info.prev; }
    )
  }
  public prev(url : string | null){
    if(url == null) return;
    this.RickMortySv.charactersNext(url).subscribe(
      res => {
        this.data = res.results;
        this.nextUrl = res.info.next; 
        this.prevUrl = res.info.prev; }
    )
  }
  ngOnInit(): void {
    this.RickMortySv.characters().subscribe(
      res => {
        this.data = res.results;
        this.nextUrl = res.info.next; 
        this.prevUrl = res.info.prev;
      }
    )
  }
}
