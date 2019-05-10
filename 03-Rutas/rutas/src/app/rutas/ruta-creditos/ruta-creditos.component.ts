import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-creditos',
  templateUrl: './ruta-creditos.component.html',
  styleUrls: ['./ruta-creditos.component.css']
})
export class RutaCreditosComponent implements OnInit {

  constructor(private readonly _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const parametros$ = this._activatedRoute.params

    parametros$.subscribe(
      (parametros)=>{
          console.log('parametros:', parametros)
      },
      (error)=>{
        console.log('Error: ',error)
      },
      ()=>{
        console.log("Completo")
      }
    )

    const parametrosConsulta$ = this._activatedRoute.queryParams

    parametrosConsulta$.subscribe(
      (parametrosConsulta) => {
        console.log('Parmetros Consulta: ',parametrosConsulta)
      }
    )

  }

}
