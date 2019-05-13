import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstaLogeadoService implements CanActivate {
  
  constructor(private readonly _authService:AuthService,
              private readonly _router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, 
              state: RouterStateSnapshot):boolean {
    const estaLogeado = this._authService.estaLogeado
    if(estaLogeado){
      console.log("Bienvenido")
      const url = ['/creditos','asdsdas','sadsadsa'] 
      const parametros = {
        queryParams:{
        nombre:'jose',
        apellido: 'murillo'
        }
      }
      this._router.navigate(url,parametros)
      return true
    }else{
      console.log("No tiene permisos")
      return false
    }
  }

}
