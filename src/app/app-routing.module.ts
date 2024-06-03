import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'rickAndMorty', 
    loadChildren: () => import('./rick-and-morty/rick-and-morty.module').then(m => m.RickAndMortyModule)
  },
  {
    path: 'pokedex', 
    loadChildren: () => import('./pokedex/pokedex.module').then(m => m.PokedexModule)
  },  
  {
    path:'',
    redirectTo:'rickAndMorty', 
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
