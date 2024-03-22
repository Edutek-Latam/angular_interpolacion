import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from './pages/paises/paises.component';
import { UsurioTamplateComponent } from './pages/usurio-tamplate/usurio-tamplate.component';
import { UsurioReactivoComponent } from './pages/usurio-reactivo/usurio-reactivo.component';

const routes: Routes = [
  {path:'paises',component:PaisesComponent},
  {path:'user_template',component:UsurioTamplateComponent},
  {path:'user_rectivo',component:UsurioReactivoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
