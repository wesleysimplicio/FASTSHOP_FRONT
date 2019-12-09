import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './shared/errors/error.component';
import { ClientsIndexComponent } from './modules/clients/clients-index.component';
import { ProductsIndexComponent } from './modules/products/products-index.component';
import { OrdersIndexComponent } from './modules/orders/orders-index.component';


const routes: Routes = [
  { path: "clients", component: ClientsIndexComponent },
  { path: "products", component: ProductsIndexComponent },
  { path: "orders", component: OrdersIndexComponent },
  { path: "error/:type", component: ErrorComponent },
  { path: "**", redirectTo: "error/notfound" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
