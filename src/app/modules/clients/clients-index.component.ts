import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from './models/client.model';
import { AppConfig } from 'src/app/app.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clients-index',
  templateUrl: './clients-index.component.html',
  styleUrls: ['./clients-index.component.css']
})
export class ClientsIndexComponent implements OnInit {

  clientName: string;
  clientDocument: number;
  clientList: any;
  searchForm: FormGroup;
  //clientApiUrl: string = (AppConfig.settings.apiUrl + '/clients/');
  clientApiUrl = 'http://localhost:5406/clients';

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.clientName = '';
    this.clientDocument = null;
  }

  ngOnInit() {
    this.buildForm();
    this.getList();
  }

  buildForm() {
    this.searchForm = this.formBuilder.group({ 'Name': '', 'Document': '' });
  }

  resetForm(){
    this.searchForm.get('Name').setValue('');
    this.searchForm.get('Document').setValue('');
    this.searchForm.markAsDirty();
    this.getList();
  }

  getList() {
    let queryString = '?';
    queryString += (this.searchForm.get('Name').value != '' ? 'Name=' + this.searchForm.get('Name').value : '');
    queryString += (this.searchForm.get('Document').value != '' ? '&Document=' + this.searchForm.get('Document').value : '');
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    this.httpClient.get(this.clientApiUrl + queryString, { headers: headers })
      .subscribe(
        (res) => {
          this.clientList = res;
        },
        (error) => {
          this.clientList = null;
        }
      );
  }
}