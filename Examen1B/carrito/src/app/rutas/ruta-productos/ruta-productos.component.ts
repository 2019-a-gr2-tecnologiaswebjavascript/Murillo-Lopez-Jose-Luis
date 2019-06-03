import { Component, OnInit } from '@angular/core';
import { LibrosServiceService } from 'src/app/servicios/libros/libros-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ruta-productos',
  templateUrl: './ruta-productos.component.html',
  styleUrls: ['./ruta-productos.component.css']
})
export class RutaProductosComponent implements OnInit {

  idAutor
  libros 

  constructor(private readonly _libros:LibrosServiceService,
    private readonly _activatedRoute : ActivatedRoute,
    private readonly _router : Router) { }

  ngOnInit() {
    var param$ = this._activatedRoute.queryParams
    param$.subscribe(
      (parametros) =>{
        this.idAutor = parametros.idAutor
      }
    )
    this.libros = this._libros.libros.filter(libro => libro.idAutor == this.idAutor)
  }

  eliminarLibro(a){

  }

  irAInsertar(){
    var parametros = {
      queryParams:{
        'idAutor': this.idAutor
      }
    }
    this._router.navigate(['nuevo-producto'],parametros)
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
      td = tr[i].getElementsByTagName("td")[1];
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
