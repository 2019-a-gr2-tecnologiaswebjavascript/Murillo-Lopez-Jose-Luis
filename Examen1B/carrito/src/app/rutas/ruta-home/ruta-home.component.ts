import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.css']
})
export class RutaHomeComponent implements OnInit {

  constructor(private readonly _activatedRoute:ActivatedRoute,
    private readonly _router: Router) { }

  nombreUsuario = ''

  ngOnInit() {
    const parametros$ = this._activatedRoute.queryParams
    parametros$.subscribe(
      (parametros)=>{
        this.nombreUsuario = parametros.nombre
      }
    )
  }

  irAComprar(){
    var parametros={
      queryParams:{
        'nombreUsuario':this.nombreUsuario
      }
    }
    this._router.navigate(['cajero'],parametros)
  }

}
