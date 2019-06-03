import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosServiceService } from 'src/app/servicios/libros/libros-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ruta-productos-nuevo',
  templateUrl: './ruta-productos-nuevo.component.html',
  styleUrls: ['./ruta-productos-nuevo.component.css']
})
export class RutaProductosNuevoComponent implements OnInit {

  constructor(private readonly _activatedRoute: ActivatedRoute,
    private readonly _libros : LibrosServiceService,
    private readonly _router: Router,
    private readonly _location: Location) { }

  icbn
  nombre
  numero
  edicion
  fecha
  editorial
  idAutor

  ngOnInit() {
    var parametros$ = this._activatedRoute.queryParams
    parametros$.subscribe(
      (parametros) => {
        this.idAutor =parametros.idAutor
      }
    )
  }

  register(){
    var libro = {
      icbn: this.icbn,
      nombre: this.nombre,
      numero: this.numero,
      edicion: this.edicion,
      fecha: this.fecha,
      editorial: this.editorial,
      idAutor: this.idAutor
    }
    this._libros.libros.push(libro)
    this._location.back()
  }

}
