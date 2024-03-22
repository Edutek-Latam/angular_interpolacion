import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styles: ``
})
export class InputTextComponent implements OnChanges{
  @Input() valor!: string | number; 
  @Output() sendValor = new EventEmitter<string>()

  public data : string;
  constructor(){
    this.data = ''
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data)
    //throw new Error('Method not implemented.');
  }

  setValor(){
    this.valor = this.data;
    this.sendValor.emit(this.valor);
    console.log(this.valor)
  }
}
