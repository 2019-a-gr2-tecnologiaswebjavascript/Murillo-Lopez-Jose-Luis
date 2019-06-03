import { Injectable } from '@angular/core';
import { VentasService } from '../ventas.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  detalleCarrito = []

  constructor(private readonly _ventas:VentasService) { }

  costoTotal = [{
    'carrito': this.detalleCarrito,
    'precioTotal': 0
  }] 

  insertarAlCarrito(producto){
    var indiceItem = -1
    const existeEnElCarrito = this.detalleCarrito.some((item,indice)=>{
      if(item.producto == producto){
        indiceItem = indice
        return true
      }else{
        return false
      }
    })
    if(existeEnElCarrito){
      this.aumentarContador(indiceItem)
    }else{
      this.agregarAlCarrito(producto)
    }
    this.calcularTotal()
    return this.detalleCarrito
  }

  private aumentarContador(indice){
    this.detalleCarrito[indice].cantidad ++
  }

  private agregarAlCarrito(producto){
    var toInsert = {
      'producto': producto,
      'cantidad': 1
    }
    this.detalleCarrito.push(toInsert)
  }

  quitarCarrito(producto){
    var indiceItem = -1
    var cantidad = 0 
    this.detalleCarrito.forEach((item,indice)=>{
      if(item.producto == producto){
        indiceItem = indice
        cantidad = item.cantidad
      }
    })
    if(cantidad == 1){
      this.eliminarDelCarrito(indiceItem)
    }else{
      this.reducirCantidad(indiceItem)
    }
    this.calcularTotal()
    return this.detalleCarrito
  }

  private eliminarDelCarrito(indice){
    this.detalleCarrito.splice(indice,1)
  }

  private reducirCantidad(indice){
    this.detalleCarrito[indice].cantidad --
  }

  private calcularTotal(){
    var costo = 0
    this.detalleCarrito.forEach((item)=>{
      costo += (item.cantidad * 50)
    })
    console.log('Total ',this.costoTotal[0])
    this.costoTotal[0].precioTotal = costo
  }

  finalizarCompra(cliente, cajero){
    var venta = [
      {
        'cliente':cliente,
        'pedido':this.costoTotal,
        'cajero':cajero
      }
    ]
    console.log(venta)
    this._ventas.ventas.push(venta)
  }

}
