import { Component, OnInit } from '@angular/core';
import { LibrosServiceService } from 'src/app/servicios/libros/libros-service.service';
import { CarritoComprasService } from 'src/app/servicios/carrito-compras/carrito-compras.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ruta-cajero',
  templateUrl: './ruta-cajero.component.html',
  styleUrls: ['./ruta-cajero.component.css']
})
export class RutaCajeroComponent implements OnInit {

  nombre
  ci
  direccion
  telefono
  correo

  nombreUsuario

  carrito = this._carrito.detalleCarrito
  productos = this._libros.libros
 
  costoTotal = this._carrito.costoTotal[0]

  constructor(private readonly _libros : LibrosServiceService,
  private readonly _carrito : CarritoComprasService,
  private readonly _activatedRoute: ActivatedRoute,
  private readonly _location: Location) { }

  ngOnInit() {
    const parametros$ = this._activatedRoute.queryParams
    parametros$.subscribe(
      (parametros)=>{
        this.nombreUsuario = parametros.nombreUsuario
      }
    )
  }

  agregarAlCarrito(producto){
    this._carrito.insertarAlCarrito(producto)
  }

  quitarDelCarrito(producto){
    this._carrito.quitarCarrito(producto)
  }

  finalizarCompra(){
    var cliente = [{
      'nombre':this.nombre,
      'ci':this.ci,
      'direccion':this.direccion,
      'telefono':this.telefono,
      'correo':this.correo
    }]
    this._carrito.finalizarCompra(cliente, this.nombreUsuario)
    this._location.back()
  }


}
