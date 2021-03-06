import { HttpSailsPrincipal } from './http-sails-principal';
import { Usuario } from 'src/app/dto/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class UsuarioHttpService extends HttpSailsPrincipal<Usuario>{
    constructor(private readonly _htttpClient : HttpClient){
        super(_htttpClient, environment.url,'/Usuario')
    }
}