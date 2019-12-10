import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-products-index',
  templateUrl: './products-index.component.html',
  styleUrls: ['./products-index.component.css']
})
export class ProductsIndexComponent implements OnInit {

  productList: any;
  searchForm: FormGroup;
  productApiUrl = 'http://localhost:5406/products';

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    this.httpClient.get(this.productApiUrl, { headers: headers })
      .subscribe(
        (res) => {
          this.productList = res;
        },
        (error) => {
          this.productList = null;
        }
      );
  }

}
