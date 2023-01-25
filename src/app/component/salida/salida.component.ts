import { Component } from '@angular/core';
import { SalidaService } from 'src/app/Servicios/Salida/Salida.Service';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styles: [
  ]
})
export class SalidaComponent {
 constructor(private _salidaservice:SalidaService){


 }
 getsalida(){

  this._salidaservice.getsalida()
  .subscribe(salida=>{
    console.log(salida)
  })
 }
}
