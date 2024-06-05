import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Result } from '../../interfaces/characters.interface';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit, OnDestroy{
  private RickMortySv = inject(RickAndMortyService);
  public data !: Result[];
  public nextUrl !: string | null;
  public prevUrl !: string | null;

  private charactersNext ?: Subscription;
  private characters ?: Subscription;

  public pagination(url : string | null){
    if(url == null) return;
    this.charactersNext = this.RickMortySv.charactersNext(url).subscribe(
      res => {
        next:{
          this.data = res.results;
          this.nextUrl = res.info.next; 
          this.prevUrl = res.info.prev; }
        error:()=>{console.log('error ');
        }
      }
    )
  }
  ngOnInit(): void {
    this.characters = this.RickMortySv.characters().subscribe(
      res => {
        this.data = res.results;
        this.nextUrl = res.info.next; 
        this.prevUrl = res.info.prev;
      }
    )
  }
  ngOnDestroy(): void {
    this.charactersNext?.unsubscribe();
    this.characters?.unsubscribe();
  }
}
