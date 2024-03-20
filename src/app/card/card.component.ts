import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent implements OnInit {
  @Input() paises : any;
  @Output() eventoClick = new EventEmitter();
  ngOnInit(): void {
   console.log(this.paises)
 }

 onClick(){
  this.eventoClick.emit('componente hijo');
  console.log('evento click');

 }

}
