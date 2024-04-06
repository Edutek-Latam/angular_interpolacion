import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-pais',
  templateUrl: './crear-pais.component.html',
  styles: ``
})
export class CrearPaisComponent {

  frmPiases : FormGroup;
  isSubmited: boolean = false;
  params : any;
  constructor(
    private _formBuilder: FormBuilder, 
    private _dataService:DataService,
    private _router: Router,
    private _activeRouter: ActivatedRoute
    ) {


        this.params = this._activeRouter.snapshot.paramMap;
        console.log(this.params)
      this.frmPiases = this._formBuilder.group({
        paises:this._formBuilder.array([])
      })
  }


  get paises(): FormArray{
    return this.frmPiases.get('paises') as FormArray
  }

  newPais(){
    const frmPais = this._formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(3)]],
      capital:['',[Validators.required, Validators.minLength(3)]],
      Moneda:['',[Validators.required, Validators.minLength(3)]],
      independencia:['',[Validators.required, Validators.minLength(3)]],
    });

    return frmPais;
  }

  addPais(){
    this.paises.push(this.newPais());
  }

  removePais(index: number){
    this.paises.removeAt(index);
  }

  onSubmit(){
    if(this.isSubmited) return

    if(this.frmPiases.valid){
      this.isSubmited = true;
        setTimeout(() => {
            const paises = this.frmPiases.value;
            console.log(paises);
          this._dataService.addPaises(paises.paises);
          console.log(this._dataService.paises);
            this.isSubmited = false;
            this._router.navigate(['/paises'])
        }, 1000);
    }
  }
}
