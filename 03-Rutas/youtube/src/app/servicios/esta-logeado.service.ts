import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstaLogeadoService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) :boolean {
    const estaLogeado = this._authService.estaLogeado
    if(estaLogeado){
      return true
    }else{
      const url = ['/home']
      this._router.navigate(url)
      alert('Inicie Sesión!')
      return false
    }
  }

  constructor(private readonly _authService:AuthService,
              private readonly _router:Router) { }
}
