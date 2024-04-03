import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { UsurioTamplateComponent } from './pages/usurio-tamplate/usurio-tamplate.component';
import { UsurioReactivoComponent } from './pages/usurio-reactivo/usurio-reactivo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './components/input-text/input-text.component';
import { FormBuilderComponent } from './pages/form-builder/form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PaisesComponent,
    UsurioTamplateComponent,
    UsurioReactivoComponent,
    NavbarComponent,
    InputTextComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
