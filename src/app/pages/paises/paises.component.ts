import { Component, OnChanges, OnInit } from '@angular/core';
import data from '../../../assets/data.json';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styles: ``
})
export class PaisesComponent implements OnInit, OnChanges {
  title = 'intro02';
  public nombre : string;
  public urlImage = 'https://bulma.io/images/placeholders/96x96.png';
  public dataJson = data;


  constructor(){
    this.nombre = 'Sherwin'
    console.log(this.nombre)
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

}
