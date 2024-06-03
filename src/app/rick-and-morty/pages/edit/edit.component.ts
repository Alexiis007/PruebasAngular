import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Result } from '../../interfaces/characters.interface';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  private RickMortySv = inject(RickAndMortyService); 
  private activateRout = inject(ActivatedRoute) 
  private fb = inject(FormBuilder)

  public formEdit : FormGroup = this.fb.group(
    {
      nombre :['',[Validators.required]],
      estatus :['ALIVE',[Validators.required]],
      raza :['HUMAN',[Validators.required]],
      genero :['MALE',[Validators.required]],
    }
  )

  public data !: Result;

  
  ngOnInit(): void {
    this.activateRout.params
    .pipe(
      switchMap(({id}) => this.RickMortySv.characterById(id))
    )
    .subscribe(
      res =>  {
        this.data = res;
        this.formEdit.reset({'nombre':res.name, 'genero':res.gender, 'estatus':res.status, 'raza':res.species})
      }
      )

  }
}
