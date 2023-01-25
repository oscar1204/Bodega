import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnradaService {
  constructor(private httpclent:HttpClient){


  }
  getentrada(){
    const path=''
    return this.httpclent.get<EnradaService[]>(path);
  }
}
