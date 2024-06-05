import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokedexService } from '../../services/pokedex.service';
import { PokemonData } from '../../interfaces/PokemonData.interface';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './pokemon-by-name.component.html',
  styleUrl: './pokemon-by-name.component.css'
})
export class PokemonByNameComponent{
  private fb = inject(FormBuilder);
  private SvPokedex = inject(PokedexService);

  public data ?: PokemonData;

  public form : FormGroup = this.fb.group(
    { search:['',[Validators.required]] }
  );

  public buscar(){
    this.form.markAsTouched();
    //Se verifica que no existan errores en el input de busqueda
    if(this.form.valid == false) {return}
    //Si no existieron errores continuamos con la peticion
    this.SvPokedex.pokemonDataByName(this.form.get('search')?.value.toLowerCase())
    .subscribe({
      next:(res => {this.data = res; }),
      error:(()=> {
        Swal.fire({
          icon: "error",
          title: "Parese que algo no salio bien 😢",
          text: "Trata de escribir bien el nombre del pokemon y sin acentos!",
        });
      })
    })
  }
  ngOnDestroy(): void {

  }

}
