import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokedexService } from '../../services/pokedex.service';
import { PokemonData } from '../../interfaces/PokemonData.interface';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './pokemon-by-name.component.html',
  styleUrl: './pokemon-by-name.component.css'
})
export class PokemonByNameComponent implements OnDestroy, OnInit{
  private fb = inject(FormBuilder);
  private SvPokedex = inject(PokedexService);

  public form : FormGroup = this.fb.group(
    { search:['',[Validators.required]] }
  );
  public data ?: PokemonData;
  //Variable Suscription para cerrar la subscripcion
  public pokemonDataByName ?: Subscription;

  public buscar(){
    this.form.markAsTouched();
    //Se verifica que no existan errores en el input de busqueda
    if(this.form.valid == false) {return}
    //Si no existieron errores continuamos con la peticion
    this.pokemonDataByName = this.SvPokedex.pokemonDataByName(this.form.get('search')?.value.toLowerCase())
    .subscribe({
      next:(res => {this.data = res; localStorage.setItem('pokemon',JSON.stringify(res))}),
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
    //se cierra la subscripcion
    this.pokemonDataByName?.unsubscribe()
  }
  ngOnInit(): void {
    if(localStorage.getItem('pokemon')){
      this.data = JSON.parse(localStorage.getItem('pokemon')!)
    }
  }
}
