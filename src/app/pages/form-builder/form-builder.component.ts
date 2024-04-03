import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styles: ``
})
export class FormBuilderComponent {
  frmUser: FormGroup;
  isSubmited: boolean = false;

  constructor(private _formBuilder: FormBuilder){
    this.frmUser = this._formBuilder.group({
      primer_nombre:['',[Validators.required,Validators.minLength(3)]],
      segundo_nombre:['',[Validators.required, Validators.minLength(3)]],
      primer_apellido:['',[Validators.required,Validators.minLength(3)]],
      segundo_apellido:['',[Validators.required,Validators.minLength(3)]],
      correo:['',[Validators.required, Validators.email]],
      celular:['',[Validators.required]]
    })
  }

  onSubmit(){
    if(this.isSubmited) return;
    if(this.frmUser.valid){
      this.isSubmited = true;
      setTimeout(() => {
        console.log(this.frmUser.value);
        this.isSubmited = false;
      }, 1000);
    }
    
  }
}
