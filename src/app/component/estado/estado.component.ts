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
 constructor(){



 }
}
