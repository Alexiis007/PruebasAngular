import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Result } from '../../interfaces/characters.interface';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';

@Component({
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent implements OnInit, OnDestroy{
  private RickMortySv = inject(RickAndMortyService); 
  private activateRout = inject(ActivatedRoute) 

  public data !: Result;

  private characterById ?: Subscription;
  
  
  ngOnInit(): void {
    this.characterById = this.activateRout.params
    .pipe(
      switchMap(({id}) => this.RickMortySv.characterById(id))
    )
    .subscribe(res => this.data = res )
  }
  ngOnDestroy(): void {
    this.characterById?.unsubscribe();
  }
}
