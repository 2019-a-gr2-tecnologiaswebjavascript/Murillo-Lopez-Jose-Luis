import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaGruposComponent } from './rutas/ruta-grupos/ruta-grupos.component';
import { RutaProductosComponent } from './rutas/ruta-productos/ruta-productos.component';
import { RutaCajeroComponent } from './rutas/ruta-cajero/ruta-cajero.component';
import { RutaComprasComponent } from './rutas/ruta-compras/ruta-compras.component';
import { AuthService } from './servicios/auth/auth.service';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { EstaLogeadoService } from './servicios/guard/esta-logeado.service';
import { AutoresServiceService } from './servicios/autores/autores-service.service';
import { LibrosServiceService } from './servicios/libros/libros-service.service';
import { RutaGruposNuevoComponent } from './rutas/ruta-grupos-nuevo/ruta-grupos-nuevo.component';
import { RutaProductosNuevoComponent } from './rutas/ruta-productos-nuevo/ruta-productos-nuevo.component';
import { CarritoComprasService } from './servicios/carrito-compras/carrito-compras.service';

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaGruposComponent,
    RutaProductosComponent,
    RutaCajeroComponent,
    RutaComprasComponent,
    RutaLoginComponent,
    RutaGruposNuevoComponent,
    RutaProductosNuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    EstaLogeadoService,
    AutoresServiceService,
    LibrosServiceService,
    CarritoComprasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
