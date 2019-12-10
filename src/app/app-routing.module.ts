import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './shared/errors/error.component';
import { ClientsIndexComponent } from './modules/clients/clients-index.component';
import { ProductsIndexComponent } from './modules/products/products-index.component';
import { OrdersIndexComponent } from './modules/orders/orders-index.component';
import { ClientsFormComponent } from './modules/clients/clients-form.component';


const routes: Routes = [
  { path: "clients", component: ClientsIndexComponent },
  { path: "clients/new", component: ClientsFormComponent },
  { path: "clients/edit/:id", component: ClientsFormComponent },
  { path: "products", component: ProductsIndexComponent },
  { path: "orders", component: OrdersIndexComponent },
  { path: "error/:type", component: ErrorComponent },
  { path: "**", redirectTo: "error/notfound" },
  { path: "", redirectTo: "clients", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
