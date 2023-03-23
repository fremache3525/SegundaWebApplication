import { Component } from '@angular/core';
import {ApiServiceService} from 'src/app/servicios/api/api-service.service';
import { Router } from '@angular/router';
import { listaPedidosI } from 'src/app/modelos/listaPedidos.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  constructor(private api:ApiServiceService, private router:Router){}
  pedidos:listaPedidosI[] =[];
  ngOnInit():void{
    this.api.obtenerPedidos().subscribe(data =>{
      console.log(data);
      this.pedidos = data;
    });
    
  }
  nuevoCliente(){
    this.router.navigate(['clientes']);
  }
  nuevoPedido(){
    this.router.navigate(['productos']);
  }
}
