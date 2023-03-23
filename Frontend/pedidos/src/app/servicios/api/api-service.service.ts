import { Injectable } from '@angular/core';
import {loginI} from '../../modelos/login.interface'
import {clienteI} from '../../modelos/clientes.interface'
import {ResponseI} from '../../modelos/response.interface'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {listaPedidosI} from 'src/app/modelos/listaPedidos.interface';
import { listaProductosI } from 'src/app/modelos/listaProductos.interface';
import { listaClienteI } from 'src/app/modelos/listaClientes.interface';
import { ProductosI } from 'src/app/modelos/producto.interface';
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
  crearPedido(form:any):Observable<ResponseI>{
    let direccion = this.url+"Pedidos";
    return this.http.post<ResponseI>(direccion,form);
  }
  obtenerPedidos():Observable<listaPedidosI[]>{
    let direccion = this.url+"Pedidos";

    return this.http.get<listaPedidosI[]>(direccion);
  }
  obtenerProductos():Observable<listaProductosI[]>{
    let direccion = this.url+"Productos";

    return this.http.get<listaProductosI[]>(direccion);
  }
  obtenerUnProducto(id:any){
    let direccion = this.url+"Productos/"+id;
    return this.http.get<ProductosI>(direccion);
  }
  obtenerClientes():Observable<listaClienteI[]>{
    let direccion = this.url+"Clientes";

    return this.http.get<listaClienteI[]>(direccion);
  }
}
