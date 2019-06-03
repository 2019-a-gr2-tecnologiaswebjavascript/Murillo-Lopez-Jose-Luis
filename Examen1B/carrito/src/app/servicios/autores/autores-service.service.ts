import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoresServiceService {

  autores = [
    {
      nombre: 'Jose',
      apellido: 'Murillo',
      fechaNac: '07/01/98',
      libros: 2,
      ecuatoriano: true
    },
    {
      nombre: 'Juan',
      apellido: 'Sulca',
      fechaNac: '27/06/97',
      libros: 4,
      ecuatoriano: false
    },
    {
      nombre: 'Diego',
      apellido: 'Portero',
      fechaNac: '22/11/97',
      libros: 3,
      ecuatoriano: false
    },
    {
      nombre: 'Carolina',
      apellido: 'Cerezo',
      fechaNac: '01/10/97',
      libros: 3,
      ecuatoriano: true
    }
  ]

  constructor() { }
}
