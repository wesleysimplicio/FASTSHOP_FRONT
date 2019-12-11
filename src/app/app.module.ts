import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './shared/errors/error.component';
import { ClientsIndexComponent } from './modules/clients/clients-index.component';
import { OrdersIndexComponent } from './modules/orders/orders-index.component';
import { ProductsIndexComponent } from './modules/products/products-index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClientsFormComponent } from './modules/clients/clients-form.component';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { OrdersFormComponent } from './modules/orders/orders-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ClientsIndexComponent,
    ClientsFormComponent,
    OrdersIndexComponent,
    ProductsIndexComponent,
    OrdersFormComponent,
  ],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
