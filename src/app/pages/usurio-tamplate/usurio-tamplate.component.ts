import { Component } from '@angular/core';
import { IUsuario } from '../../interfaces/usuario.interfaces';

@Component({
  selector: 'app-usurio-tamplate',
  templateUrl: './usurio-tamplate.component.html',
  styles: ``
})
export class UsurioTamplateComponent {
  public usuario : IUsuario;
  public nombre: string = 'Sherwin'
  constructor(){
    this.usuario = {
      nombre:'',
      apellido:'',
      edad:0,
      correo:''
    }
  }

  onSubmit(){
    console.log(this.usuario)
  }
}
