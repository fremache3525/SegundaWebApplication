import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './vistas/usuarios/usuarios.component';
import { ClientesComponent } from './vistas/clientes/clientes.component';
import { PedidosComponent } from './vistas/pedidos/pedidos.component';
import { ProductosComponent } from './vistas/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ClientesComponent,
    PedidosComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
