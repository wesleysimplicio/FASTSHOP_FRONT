import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-index',
  templateUrl: './clients-index.component.html',
  styleUrls: ['./clients-index.component.sass']
})
export class ClientsIndexComponent implements OnInit {

  constructor(private router: Router) {

  }
  
  ngOnInit() {
  }

}