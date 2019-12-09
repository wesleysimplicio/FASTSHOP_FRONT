import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-index',
  templateUrl: './orders-index.component.html',
  styleUrls: ['./orders-index.component.sass']
})
export class OrdersIndexComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

}
