import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EstaLogeadoService } from '../guard/esta-logeado.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements CanActivate {
   
    canActivate(route : ActivatedRouteSnapshot,
        state: RouterStateSnapshot) : boolean{
            if(this._estalog.estaLogeado){
                return true
            }else{
                this._router.navigate['/login']
                return false;
            }
    }

    constructor(private readonly _estalog:EstaLogeadoService,
        private readonly _router:Router){

    }
    
}


