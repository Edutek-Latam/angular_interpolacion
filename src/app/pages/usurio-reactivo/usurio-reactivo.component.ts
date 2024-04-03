import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const valores = {
  nombre: 'Sherwin',
  apellido: 'Gonzalez',
  edad:26,
  correo:'paintsis@gmail.com' 
}

@Component({
  selector: 'app-usurio-reactivo',
  templateUrl: './usurio-reactivo.component.html',
  styles: ``
})
export class UsurioReactivoComponent implements OnInit {
  frmUsuario: FormGroup;
  isSubmited: boolean = false;
  constructor(){
    this.frmUsuario = new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('',[Validators.required]),
      edad: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.required]),
      //telefono: new FormControl('',[Validators.required])
    })
  }
  ngOnInit(): void {
    this.setValidator();
  }

  setValidator(){
    this.frmUsuario.controls['correo'].setValidators([]);
    this.frmUsuario.controls['correo'].updateValueAndValidity()
  }

  setValue(){
    for(let item in valores){
      this.frmUsuario.controls[item].setValue(valores[item as keyof typeof valores]);
    }
  }
  
  patchValue(){
    this.frmUsuario.patchValue(valores);
  }

  onSubmit(){
    if(this.isSubmited) return;

   if(this.frmUsuario.valid){
    this.isSubmited = true;
    setTimeout(() => {
      console.log(this.frmUsuario.value);
      //limpiar nuestro formulario
      this.frmUsuario.reset();
      this.isSubmited = false;

    }, 1000);
   }
  }


  isValidControl(control: string){
    return this.frmUsuario.controls[control].getError('required') && this.frmUsuario.controls[control].touched
  }
}
