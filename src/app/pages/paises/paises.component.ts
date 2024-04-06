import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { IPais } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styles: ``
})
export class PaisesComponent implements OnInit, OnChanges {
  title = 'intro02';
  public nombre : string;
  public urlImage = 'https://bulma.io/images/placeholders/96x96.png';
  public dataJson : IPais[];


  constructor(private _router: Router, private _dataService: DataService){
    this.nombre = 'Sherwin'
    this.dataJson = this._dataService.paises;
    //console.log(this.nombre)
  }
  ngOnChanges(): void {
    //console.log(changes);
    //throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    console.log('evento ngOnInit')
    //throw new Error('Method not implemented.');
  }

  OnClick(evento: any){
    console.log(evento)
  }

  nuevo(){
    this._router.navigate(['nuevo_pais',{id:23}])
  }

}
