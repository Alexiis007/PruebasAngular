import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {path:'characters', component:CharactersComponent},
      {path:'character/:id', component:CharacterDetailsComponent},
      {path:'editar/:id', component:EditComponent},
      {path:'**', redirectTo:'characters'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RickAndMortyRoutingModule { }
