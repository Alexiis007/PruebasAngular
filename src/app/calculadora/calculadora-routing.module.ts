import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {path:'calculadora', component:CalculadoraComponent},
      {path:'**', redirectTo:'calculadora'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculadoraRoutingModule { }
