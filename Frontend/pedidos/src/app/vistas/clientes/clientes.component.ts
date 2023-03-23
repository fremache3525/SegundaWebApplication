import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { clienteI } from 'src/app/modelos/clientes.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import {ApiServiceService} from 'src/app/servicios/api/api-service.service';
import { Map,tileLayer } from 'leaflet';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']

})
export class ClientesComponent {

  ngAfterViewInit():void{
    const map = new Map('map').setView([51.505, -0.09], 13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


  }
  productoid:any =0;
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiServiceService){
  }

  nuevoForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    ruc: new FormControl(''),
    telefono: new FormControl(''),
    direccion: new FormControl(''),
    latitud: new FormControl(''),
    longitud: new FormControl('')
  });
  ngOnInit():void{
    let token = this.getToken();
   
     //console.log(this.editarForm.value);
  
  }
postForm(){
  this.api.crearCliente(this.nuevoForm.value).subscribe(data =>{
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
