import { Component } from '@angular/core';
import { EnradaService } from 'src/app/Servicios/Entrada/Entrada.Service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styles: [
  ]
})
export class EntradaComponent {
 constructor (private _entradaservice:EnradaService){

 }
 getentrada(){
    this._entradaservice.getentrada()
    .subscribe(entrada=>{
      console.log(entrada);
    });
 }
}
