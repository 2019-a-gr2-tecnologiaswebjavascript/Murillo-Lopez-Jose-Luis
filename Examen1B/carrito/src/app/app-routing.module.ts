import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaGruposComponent } from './rutas/ruta-grupos/ruta-grupos.component';
import { RutaProductosComponent } from './rutas/ruta-productos/ruta-productos.component';
import { RutaCajeroComponent } from './rutas/ruta-cajero/ruta-cajero.component';
import { RutaComprasComponent } from './rutas/ruta-compras/ruta-compras.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { AuthService } from './servicios/auth/auth.service';
import { RutaGruposNuevoComponent } from './rutas/ruta-grupos-nuevo/ruta-grupos-nuevo.component';
import { RutaProductosNuevoComponent } from './rutas/ruta-productos-nuevo/ruta-productos-nuevo.component';

const routes: Routes = [
  {
    path: 'home',
    component: RutaHomeComponent,
    canActivate:[
      AuthService
    ]
  },
  {
    path: 'grupos',
    component: RutaGruposComponent,
  },
  {
    path: 'productos',
    component: RutaProductosComponent
  },
  {
    path: 'nuevo-grupo',
    component: RutaGruposNuevoComponent
  },
  {
    path: 'nuevo-producto',
    component: RutaProductosNuevoComponent
  },
  {
    path: 'cajero',
    component: RutaCajeroComponent
  },
  {
    path: 'compras',
    component: RutaComprasComponent,
    canActivate:[
      AuthService
    ]
  },
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
