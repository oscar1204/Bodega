import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadoComponent } from 'src/app/component/estado/estado.component';


@Injectable({providedIn: 'root'})
export class EstadoService {
  constructor(private httpclient:HttpClient) {

  }
  getestado(){
    const path=''
    return this.httpclient.get<EstadoComponent[]>(path);
  }

}
