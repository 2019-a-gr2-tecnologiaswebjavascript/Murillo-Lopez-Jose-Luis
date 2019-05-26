import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaTendenciasComponent } from './rutas/ruta-tendencias/ruta-tendencias.component';
import { RutaSuscripcionesComponent } from './rutas/ruta-suscripciones/ruta-suscripciones.component';


@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaTendenciasComponent,
    RutaSuscripcionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
