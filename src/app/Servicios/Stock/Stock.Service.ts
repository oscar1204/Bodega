import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  constructor(private httpclient:HttpClient){


  }
  getstock(){
    const path=''
    return this.httpclient.get<StockService>(path);
  }
}
