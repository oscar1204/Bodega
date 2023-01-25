import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import {EstadoService} from '../../Servicios/Estado/Estados.service';
@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styles: [
  ]
})
export class EstadoComponent {
 estado1= 'optimo'
 estado2= 'Defectoso'
 constructor(private _estadoService:EstadoService){



 }
 getestado(){
  this._estadoService.getestado()
  .subscribe(estado=>{
    console.log(estado);

  });

 }
}
