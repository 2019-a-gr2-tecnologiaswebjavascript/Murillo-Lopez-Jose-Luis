import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaTendenciasComponent } from './rutas/ruta-tendencias/ruta-tendencias.component';
import { RutaSuscripcionesComponent } from './rutas/ruta-suscripciones/ruta-suscripciones.component';

const routes: Routes = [
  {
    path: 'home',
    component: RutaHomeComponent
  },
  {
    path: 'trending',
    component: RutaTendenciasComponent
  },
  {
    path: 'subscriptions',
    component: RutaSuscripcionesComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
