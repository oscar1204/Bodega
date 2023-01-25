import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoComponent } from 'src/app/component/producto/producto.component';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor (private httpclient:HttpClient){

  }
  getproducto(){
    const path=''
   return this.httpclient.get<ProductoComponent>(path);
  }
}
