import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component'; //
import { ProductosComponent } from './vistas/productos/productos.component';
import { PedidosComponent } from './vistas/pedidos/pedidos.component';
import { ClientesComponent } from './vistas/clientes/clientes.component';
import { UsuariosComponent } from './vistas/usuarios/usuarios.component';
import { RealizarPedidoComponent } from './vistas/realizar-pedido/realizar-pedido.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},//
  {path:'login',component:LoginComponent},//
  {path:'productos',component:ProductosComponent},//
  {path:'pedidos',component:PedidosComponent},//
  {path:'clientes',component:ClientesComponent},//
  {path:'usuarios',component:UsuariosComponent},//
  {path:'realizarPedido',component:RealizarPedidoComponent},//

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent]//
