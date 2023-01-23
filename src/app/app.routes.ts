import  {Routes, RouterModule} from '@angular/router';
import { EntradaComponent} from './component/entrada/entrada.component';
import { SalidaComponent } from './component/salida/salida.component';
import { EstadoComponent } from './component/estado/estado.component';
import { StockComponent } from './component/stock/stock.component';



const APP_ROUTES:Routes=[
{path:'Entrada', component: EntradaComponent },
{path:'Salida', component:SalidaComponent},
{path:'Estado', component:EstadoComponent},
{path:'Stock', component:StockComponent},


]
export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES)
