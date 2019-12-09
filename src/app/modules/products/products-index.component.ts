import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-index',
  templateUrl: './products-index.component.html',
  styleUrls: ['./products-index.component.sass']
})
export class ProductsIndexComponent implements OnInit {

  constructor(private router: Router) {

  }
  
  ngOnInit() {
  }

}
