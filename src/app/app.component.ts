import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges {
  

  constructor(){
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
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
