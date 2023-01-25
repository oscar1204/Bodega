import { Component } from '@angular/core';
import { StockService } from 'src/app/Servicios/Stock/Stock.Service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {
constructor(private _stockservice:StockService){


}
getstock(){
  this._stockservice.getstock()
  .subscribe(stock=>{
    console.log(stock)
  })
}
}
