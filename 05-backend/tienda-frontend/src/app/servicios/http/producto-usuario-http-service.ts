import { HttpSailsPrincipal } from './http-sails-principal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';
import { productoUsuario } from '../../dto/productoUsuario';

@Injectable()
export class ProductoUsuarioHttpService extends HttpSailsPrincipal<productoUsuario>{
    constructor(private readonly _htttpClient : HttpClient){
        super(_htttpClient, environment.url,'/ProductoUsuario')
    }
}