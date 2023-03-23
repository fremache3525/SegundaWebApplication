import { Injectable } from '@angular/core';
import {loginI} from '../../modelos/login.interface'
import {clienteI} from '../../modelos/clientes.interface'
import {ResponseI} from '../../modelos/response.interface'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url:string = "http://localhost:53874/api/";
  constructor(private http:HttpClient) { }

  loginByUsuario(form:any):Observable<ResponseI>{
    let direccion  = this.url + "Usuarios/Ingresar"
    return this.http.post<ResponseI>(direccion, form);
  }

  crearCliente(form:any):Observable<ResponseI>{
    let direccion = this.url+"Clientes";
    return this.http.post<ResponseI>(direccion,form);
  }
}
