import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './shared/errors/error.component';
import { ClientsIndexComponent } from './modules/clients/clients-index.component';
import { OrdersIndexComponent } from './modules/orders/orders-index.component';
import { ProductsIndexComponent } from './modules/products/products-index.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ClientsIndexComponent,
    OrdersIndexComponent,
    ProductsIndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
