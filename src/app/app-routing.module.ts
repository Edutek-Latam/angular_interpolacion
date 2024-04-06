import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from './pages/paises/paises.component';
import { UsurioTamplateComponent } from './pages/usurio-tamplate/usurio-tamplate.component';
import { UsurioReactivoComponent } from './pages/usurio-reactivo/usurio-reactivo.component';
import { FormBuilderComponent } from './pages/form-builder/form-builder.component';
import { CrearPaisComponent } from './pages/crear-pais/crear-pais.component';

const routes: Routes = [
  {path:'paises',component:PaisesComponent},
  {path:'user_template',component:UsurioTamplateComponent},
  {path:'user_reactivo',component:UsurioReactivoComponent},
  {path:'form_builder', component: FormBuilderComponent},
  {path:'nuevo_pais',component:CrearPaisComponent},
  {path:'nuevo_pais/:id',component:CrearPaisComponent},
  {path:'**', component:PaisesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
