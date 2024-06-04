import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokedexService } from '../../services/pokedex.service';
import { PokemonData } from '../../interfaces/PokemonData.interface';
import { LowerCasePipe } from '@angular/common';

@Component({
  templateUrl: './pokemon-by-name.component.html',
  styleUrl: './pokemon-by-name.component.css'
})
export class PokemonByNameComponent {
  private fb = inject(FormBuilder);
  private SvPokedex = inject(PokedexService);

  public data ?: PokemonData;
  
  public messageAlert : string = "Busca Un Pokemon Por su nombre..."

  public form : FormGroup = this.fb.group(
    { search:['',[Validators.required]] }
  );

  public buscar(){
    if(!this.form.get('search')?.value.trim())
    {
      this.messageAlert = "Antes de buscar escribe el nombre del pokemon"
      return
    }
    this.SvPokedex.pokemonDataByName(this.form.get('search')?.value.toLowerCase())
    .subscribe({
      next:(res => {this.data = res; }),
      error:(()=> this.messageAlert="Lo siento no pudimos encontrar ese pokemon, trata de ingresarlo sin acentos")
    })
  }
}
