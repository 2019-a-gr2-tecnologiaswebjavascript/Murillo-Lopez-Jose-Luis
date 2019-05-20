import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  estaLogeado : boolean = false

  constructor() { }

  log(){
    if(this.estaLogeado){
      this.estaLogeado = false
    }else{
      this.estaLogeado = true
    }
  }

}
