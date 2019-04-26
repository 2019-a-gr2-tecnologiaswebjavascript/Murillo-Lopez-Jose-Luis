import { Injectable } from '@angular/core';
import { ItemCarritoCompras } from '../../interfaces/item-carrito-compras';

@Injectable()
export class CarritoService {
    carritoCompras:ItemCarritoCompras[] = [];
    
    agregarCarritoDeCompras(itemCarrito:ItemCarritoCompras):ItemCarritoCompras[]{
        const identificador = itemCarrito.valor;
        const tienda = itemCarrito.nombreTienda;
        let indiceItem = -1;
        const existeElItem = this.carritoCompras.some((item:ItemCarritoCompras,indice)=>{
            if(item.valor==identificador && item.nombreTienda==tienda){
                indiceItem = indice;
                return true;
            }else{
                return false;
            }
        });
        if(existeElItem){
            this.aumentarElContador(indiceItem);
        }else{
            this.anadirAlCarrito(itemCarrito);
        }
        console.log("Se añadió al carrito", itemCarrito);
        return this.carritoCompras;
    }

    private aumentarElContador(indice:number){
        this.carritoCompras[indice].cantidad ++;
    }

    private anadirAlCarrito(item:ItemCarritoCompras){
        item.cantidad = 1;
        this.carritoCompras.splice(0, 0, item);
    }

}

// const respuesta = [1,2,3,4].every(
//     (valor:number) => {
//         return valor > 0;
//     }
// );
// console.log(respuesta)

/*
function busqueda(valor, indice, arreglo){
    console.log(valor);
    if(valor == 1){
        console.log('Te encontre 1!!!');
    }
}
*/