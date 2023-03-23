import { Component } from '@angular/core';
import {ApiServiceService} from 'src/app/servicios/api/api-service.service';
import { Router } from '@angular/router';
import { listaProductosI } from 'src/app/modelos/listaProductos.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  constructor(private api:ApiServiceService, private router:Router){}
  productos:listaProductosI[] =[];
  ngOnInit():void{
    this.api.obtenerProductos().subscribe(data =>{
      console.log(data);
      this.productos = data;
    });
    
  }
  editarProducto(id:number){
    console.log(id)
    this.router.navigate(['realizarPedido']);
  }
  nuevoCliente(){
    this.router.navigate(['clientes']);
  }
  nuevoPedido(){
    this.router.navigate(['realizarPedido']);
  }
}