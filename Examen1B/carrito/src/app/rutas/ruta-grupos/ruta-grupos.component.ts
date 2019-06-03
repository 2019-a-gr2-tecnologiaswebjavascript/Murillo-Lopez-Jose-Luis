import { Component, OnInit } from '@angular/core';
import { AutoresServiceService } from 'src/app/servicios/autores/autores-service.service';
import { Router } from '@angular/router';
import { LibrosServiceService } from 'src/app/servicios/libros/libros-service.service';

@Component({
  selector: 'app-ruta-grupos',
  templateUrl: './ruta-grupos.component.html',
  styleUrls: ['./ruta-grupos.component.css']
})
export class RutaGruposComponent implements OnInit {

  constructor(private readonly _autores : AutoresServiceService,
    private readonly _router : Router,
    private readonly _libros : LibrosServiceService) { }

  autores = this._autores.autores

  parametros

  ngOnInit() {
  }

  eliminarAutor(id){
    this._autores.autores.splice(id,1)
    this._libros.libros = this._libros.libros.filter(libro => libro.idAutor != id)
    this._libros.libros.map(
      (libro) => {
        if(libro.idAutor > id){
          libro.idAutor = libro.idAutor - 1
        }
      }
    )
  }

  toProducts(id){
    var parametros = {
      queryParams:{
        'idAutor' : id
      }
    }
    this._router.navigate(['productos'],parametros)
  }

  search(){
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("busqueda");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabla");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  
  }

}
