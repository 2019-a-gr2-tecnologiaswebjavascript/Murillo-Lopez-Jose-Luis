import { Component, OnInit } from '@angular/core';
import { VentasService } from 'src/app/servicios/ventas.service';

@Component({
  selector: 'app-ruta-compras',
  templateUrl: './ruta-compras.component.html',
  styleUrls: ['./ruta-compras.component.css']
})
export class RutaComprasComponent implements OnInit {

  ventas = this._ventas.ventas[0]

  constructor(private readonly _ventas:VentasService) { }

  ngOnInit() {
  }

  search(){
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue, td2, txtValue2;
    input = document.getElementById("busqueda");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabla");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      td2 = tr[i].getElementsByTagName("td")[5];
      if (td || td2) {
        txtValue = td.textContent || td.innerText;
        txtValue2 = td2.textContent || td2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  
  }

}
