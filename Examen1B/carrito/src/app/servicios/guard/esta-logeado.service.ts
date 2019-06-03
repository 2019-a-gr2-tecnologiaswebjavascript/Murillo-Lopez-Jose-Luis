import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstaLogeadoService {

  estaLogeado = false;
  nombreUsuario = '';

  constructor() { }

  login(usuario:string) : boolean{
    this.nombreUsuario = usuario;
    if(this.nombreUsuario != ''){
      this.estaLogeado = true
    }else{
      this.estaLogeado = false
    }
    return this.estaLogeado
  }

}
