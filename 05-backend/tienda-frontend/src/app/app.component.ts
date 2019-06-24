import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioHttpService } from './servicios/http/usuario-http-service';
import { ProductoHttpService } from './servicios/http/producto-http-service';
import { ProductoUsuarioHttpService } from './servicios/http/producto-usuario-http-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'tienda-frontend';

  constructor(private readonly _httpClient : HttpClient,
    private readonly _usuarioHttpService : UsuarioHttpService,
    private readonly _productoHttpService : ProductoHttpService,
    private readonly _productoUsuarioHttpService : ProductoUsuarioHttpService){

  }

  ngOnInit(){
    const usuarioCrear$ = this._usuarioHttpService
      .crear({
      nombre:"Felipe",
      apellido:"Caicedo",
      cedula:'1718137159',
      correo:'eadepto@hotmail.com',
      estaCasado: false,
      username:'adrianeguez',
      sueldo: 120,
      tipoUsuario: 'normal'
      })

    usuarioCrear$.subscribe(
      (nuevoUsuario)=>{
        console.log(nuevoUsuario)
      },
      (error) => {
        console.log(error)
      }
    )
    const productoCrear$ = this._productoHttpService.crear(
      {
        nombre:"José",
        codigo : 'C72ys'
      })
    productoCrear$.subscribe(
      (nuevoUsuario)=>{
        console.log(nuevoUsuario)
      },
      (error) => {
        console.log(error)
      }
    )
    const productoUsuarioCrear$ = this._productoUsuarioHttpService.crear(
      {
        cantidad : 2,
        fkUsuario : 1,
        fkProducto : 1
      })
    productoUsuarioCrear$.subscribe(
      (nuevoUsuario)=>{
        console.log(nuevoUsuario)
      },
      (error) => {
        console.log(error)
      }
    )
    // const usuarioEliminar$ = this._usuarioHttpService.borrar(3)
    // usuarioEliminar$.subscribe(
    //   (nuevoUsuario)=>{
    //     console.log(nuevoUsuario)
    //   },
    //   (error) => {
    //     console.log(error)
    //   }
    // )
  }

}
