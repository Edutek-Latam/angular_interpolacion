import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usurio-reactivo',
  templateUrl: './usurio-reactivo.component.html',
  styles: ``
})
export class UsurioReactivoComponent {
  frmUsuario: FormGroup;
  constructor(){
    this.frmUsuario = new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('',[Validators.required]),
      edad: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.required])
    })
  }

  onSubmit(){
   if(this.frmUsuario.valid){

   }
  }
}
