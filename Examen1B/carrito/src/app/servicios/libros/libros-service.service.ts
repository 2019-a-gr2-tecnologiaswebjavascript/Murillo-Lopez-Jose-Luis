import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosServiceService {

  libros = [
    {
      icbn: 1,
      nombre: 'Cien años de soledad',
      numero: 500,
      edicion: 2,
      fecha: '02/06/1967',
      editorial: 'Santillana',
      idAutor: 0
    },
    {
      icbn: 2,
      nombre: 'Don Quijote de la Mancha',
      numero: 300,
      edicion: 1,
      fecha: '02/06/1600',
      editorial: 'Santillana',
      idAutor: 0
    },
    {
      icbn: 3,
      nombre: 'Hamlet',
      numero: 400,
      edicion: 5,
      fecha: '02/06/1609',
      editorial: 'Santillana',
      idAutor: 1
    },
    {
      icbn: 4,
      nombre: 'El Principito',
      numero: 100,
      edicion: 3,
      fecha: '02/06/1943',
      editorial: 'Paneta',
      idAutor: 2
    },
    {
      icbn: 5,
      nombre: 'Orgullo y Prejuicio',
      numero: 350,
      edicion: 2,
      fecha: '02/06/1909',
      editorial: 'Paneta',
      idAutor: 3
    }, 
    {
      icbn: 6,
      nombre: 'La Odisea',
      numero: 390,
      edicion: 1,
      fecha: '02/06/1603',
      editorial: 'Paneta',
      idAutor: 4
    },
    {
      icbn: 7,
      nombre: 'El retrato de Dorian Grey',
      numero: 400,
      edicion: 1,
      fecha: '02/06/1863',
      editorial: 'Santillana',
      idAutor: 4
    }
  ]

  constructor() { }
}
