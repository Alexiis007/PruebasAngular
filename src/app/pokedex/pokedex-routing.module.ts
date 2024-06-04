import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPokomonsComponent } from './pages/all-pokomons/all-pokomons.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PokemonByNameComponent } from './pages/pokemon-by-name/pokemon-by-name.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {path:'Pokemons', component:AllPokomonsComponent},
      {path:'PokemonByName', component:PokemonByNameComponent},
      {path:'**', redirectTo:'PokemonByName'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
