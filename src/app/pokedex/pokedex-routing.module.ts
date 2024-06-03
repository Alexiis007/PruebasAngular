import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPokomonsComponent } from './pages/all-pokomons/all-pokomons.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'Pokemons', component:AllPokomonsComponent},
      {path:'**', redirectTo:'Pokemons'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }