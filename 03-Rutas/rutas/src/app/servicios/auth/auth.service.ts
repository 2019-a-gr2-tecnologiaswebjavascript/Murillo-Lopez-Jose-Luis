import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaLogeado : boolean = false;
  constructor() { }

  login(credenciales:string, usuario:string){
    if(credenciales=='1234' && usuario=='jose'){
      this.estaLogeado = true;
      return true;
    }else{
      return false;
    }
  }

  logout(){
    this.estaLogeado = false;
  }
}
