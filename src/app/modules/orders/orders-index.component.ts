import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-orders-index',
  templateUrl: './orders-index.component.html',
  styleUrls: ['./orders-index.component.css'],
})
export class OrdersIndexComponent implements OnInit {

  orderList: any;
  searchForm: FormGroup;
  clientApiUrl = 'http://localhost:5406/orders';
  headers: HttpHeaders;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  ngOnInit() {
    this.buildForm();
    this.getList();
  }

  buildForm() {
    this.searchForm = this.formBuilder.group({ 'CreateAt': '', 'Client': '', 'Status': '' });
  }

  resetForm() {
    this.searchForm.get('CreateAt').setValue('');
    this.searchForm.get('Client').setValue('');
    this.searchForm.get('Status').setValue('');
    this.searchForm.markAsDirty();
    this.getList();
  }

  edit(code) {
    this.router.navigate(['orders/edit/' + code]);
  }

  getList() {
    let queryString = '?';
    queryString += (this.searchForm.get('CreateAt').value != '' ? 'CreateAt=' + this.searchForm.get('CreateAt').value : '');
    queryString += (this.searchForm.get('Client').value != '' ? '&Client=' + this.searchForm.get('Client').value : '');
    queryString += (this.searchForm.get('Status').value != '' ? '&Status=' + this.searchForm.get('Status').value : '');

    this.httpClient.get(this.clientApiUrl + queryString, { headers: this.headers })
      .subscribe(
        (res) => {
          this.orderList = res;
        },
        (error) => {
          this.orderList = null;
        }
      );
  }

  getStatus(statusCode) {
    var resulStatus = '';
    switch (statusCode) {
      case 6:
        resulStatus = 'Processando';
        break;
      case 5:
        resulStatus = 'Pendente';
        break;
      case 10:
        resulStatus = 'Entregue';
        break;
      case 4:
        resulStatus = 'Completo';
        break;
      case 9:
        resulStatus = 'Cancelado';
        break;

      default:
        resulStatus = 'Processando';
        break;
    }

    return resulStatus;
  }
}