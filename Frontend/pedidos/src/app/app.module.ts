import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './vistas/usuarios/usuarios.component';
import { ClientesComponent } from './vistas/clientes/clientes.component';
import { PedidosComponent } from './vistas/pedidos/pedidos.component';
import { ProductosComponent } from './vistas/productos/productos.component';
import { LoginComponent } from './vistas/login/login.component';
import { RealizarPedidoComponent } from './vistas/realizar-pedido/realizar-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ClientesComponent,
    PedidosComponent,
    ProductosComponent,
    LoginComponent,
    RealizarPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
