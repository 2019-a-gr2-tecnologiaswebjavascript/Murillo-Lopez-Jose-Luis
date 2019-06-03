import { Component, OnInit } from '@angular/core';
import { AutoresServiceService } from 'src/app/servicios/autores/autores-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-grupos-nuevo',
  templateUrl: './ruta-grupos-nuevo.component.html',
  styleUrls: ['./ruta-grupos-nuevo.component.css']
})
export class RutaGruposNuevoComponent implements OnInit {

  nombre
  apellido
  fecha
  numero
  ecuatoriano


  constructor(private readonly _autores : AutoresServiceService,
    private readonly _router : Router) { }

  ngOnInit() {
  }

  register(){
    var autor = {
      nombre: this.nombre,
      apellido: this.apellido,
      fechaNac: this.fecha,
      libros: this.numero,
      ecuatoriano: this.ecuatoriano
    } 
    this._autores.autores.push(autor)
    alert('Autor registrado')
    this._router.navigate(['grupos'])
  }

}
