import { Component, OnInit } from '@angular/core';
import { EstaLogeadoService } from 'src/app/servicios/guard/esta-logeado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {

  nombre : string = '';
  parametros ;
  ruta = ['/home']

  constructor(private readonly _authService:EstaLogeadoService,
    private readonly _router: Router) { }

  ngOnInit() {
  }

  login(){
    this.parametros = {
      queryParams:{
      'nombre':this.nombre
      }
    }   
    this._router.navigate(this.ruta,this.parametros)
    console.log(this.nombre)
    this._authService.login(this.nombre)
  }

}
