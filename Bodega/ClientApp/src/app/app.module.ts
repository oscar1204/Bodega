import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { Entradacomponent } from './Entrada/Entrada.component';
import { SalidaComponent } from './Salida/Salida.component';
import { Stockcomponent } from './Stock/Stock.component';
import { Productocomponent } from './Producto/Producto.component';
import { Estadocomponent } from './Estado/Estado.component'
 

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    Entradacomponent,
    SalidaComponent,
    Stockcomponent,
    Productocomponent,
    Estadocomponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'Entrada', component: Entradacomponent },
      { path: 'Salida', component: SalidaComponent },
      { path: 'Stock', component: Stockcomponent },
      { path: 'Estado', component: Estadocomponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
