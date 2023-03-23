import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductosI } from 'src/app/modelos/producto.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import {ApiServiceService} from 'src/app/servicios/api/api-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { listaClienteI } from 'src/app/modelos/listaClientes.interface';

@Component({
  selector: 'app-realizar-pedido',
  templateUrl: './realizar-pedido.component.html',
  styleUrls: ['./realizar-pedido.component.css']
})
export class RealizarPedidoComponent {
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiServiceService){
  }

  productoid:any =0;
 //datosProducto: ProductoI;
  editarForm = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl(''),
    precio: new FormControl()
  });
  nuevoForm = new FormGroup({
    usuario: new FormControl()
  });
  clientes:listaClienteI[] =[];



  usuarioObtenido:string="";
 
  public getInputValue(inputValue:string){
    console.log(inputValue);
    this.usuarioObtenido=inputValue;
  }
  ngOnInit():void{
    this.productoid = this.activerouter.snapshot.paramMap.get('id');
    let token = this.getToken();
    this.api.obtenerUnProducto(this.productoid).subscribe(data =>{
      //console.log(data);
      this.editarForm.setValue({
        'id': data.id,
        'nombre': data.nombre,
        'precio': data.precio
      })
     
     //console.log(this.editarForm.value);

     ///////////////
     this.api.obtenerClientes().subscribe(data =>{
      console.log(data);
      this.clientes = data;
    });
    
    })

  }
  postForm(){
    this.nuevoForm.setValue({
      'usuario':this.usuarioObtenido
      })
    this.api.crearPedido(this.nuevoForm.value).subscribe(data =>{
      //console.log(data);
      //let respuesta:ResponseI = data;
      /*if(respuesta.result == 1){
        this.alertas.showSucces('Datos Modificados','Hecho');
      
      }else{
        this.alertas.showError(respuesta.message,'Error')
      }*/
      this.router.navigate(['pedidos']);
    })
    //console.log(this.editarForm.value);
  }
  salir(){
      this.router.navigate(['pedidos']);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
