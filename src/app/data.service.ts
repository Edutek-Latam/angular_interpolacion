import { Injectable } from '@angular/core';
import { IPais } from './interfaces/pais.interfaces';
import data from '../assets/data.json';


@Injectable({
  providedIn: 'root'
})
export class DataService {
    private _paises!:IPais[];
  constructor() {
    this._paises = data as IPais[]
   }

  set paises(paises: IPais[]){
    this._paises=paises;
  }

  get paises(){
    return this._paises;
  }

  addPaises(paises: IPais[]){
    console.log(paises);
    this._paises=  this._paises.concat(paises)
  }
}
