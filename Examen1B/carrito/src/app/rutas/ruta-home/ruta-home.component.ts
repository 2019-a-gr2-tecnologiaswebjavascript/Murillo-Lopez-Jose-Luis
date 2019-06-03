import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.css']
})
export class RutaHomeComponent implements OnInit {

  constructor(private readonly _activatedRoute:ActivatedRoute) { }

  nombreUsuario = ''

  ngOnInit() {
    const parametros$ = this._activatedRoute.queryParams
    parametros$.subscribe(
      (parametros)=>{
        this.nombreUsuario = parametros.nombreUsuario
      }
    )
  }

}
