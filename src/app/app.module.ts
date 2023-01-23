import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EntradaComponent } from './component/entrada/entrada.component';
import { SalidaComponent } from './component/salida/salida.component';
import { StockComponent } from './component/stock/stock.component';
import { ProductoComponent } from './component/producto/producto.component';
import { EstadoComponent } from './component/estado/estado.component';
import { NabvarComponent } from './component/nabvar/nabvar.component';
import { APP_ROUTING } from './app.routes';




@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    EntradaComponent,
    SalidaComponent,
    ProductoComponent,
    EstadoComponent,
    NabvarComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
