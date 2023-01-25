import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SalidaComponent } from 'src/app/component/salida/salida.component';

@Injectable({
  providedIn: 'root'
})
export class SalidaService {
  constructor(private httpclient:HttpClient){

  }
  getsalida(){
    const path=''
     return this.httpclient.get<SalidaComponent>(path);
  }
}
