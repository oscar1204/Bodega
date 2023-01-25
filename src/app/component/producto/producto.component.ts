import { Component } from '@angular/core';
import {ProductoService} from '../../Servicios/Producto/Producto.service'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: [
  ]
})
export class ProductoComponent {
Nombre=""
Cantidad=""
constructor(private _productoservice:ProductoService){

}
getproducto(){
this._productoservice.getproducto()
  .subscribe(producto=>{
    console.log(producto);
  });


  }
}
