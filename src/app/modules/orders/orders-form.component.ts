import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from './models/order.model';
import { formatDate } from '@angular/common';

@Component({
    selector: 'app-orders-form',
    templateUrl: './orders-form.component.html',
    styleUrls: ['./orders-form.component.css']
})
export class OrdersFormComponent implements OnInit {

    order: Order;
    headers: HttpHeaders;
    routeId: any;
    orderForm: FormGroup;
    submitted = false;
    orderApiUrl = 'http://localhost:5406/orders';
    dateCreate: string;
    constructor(
        private router: Router,
        private httpClient: HttpClient,
        private formBuilder: FormBuilder,
        public route: ActivatedRoute
    ) {
        this.dateCreate = '';
        this.order = new Order();
        this.headers = new HttpHeaders();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Allow-Origin', '*');
    }

    ngOnInit() {

        this.routeId = this.route.snapshot.params.id;
        if (this.routeId) {
            this.httpClient.get(this.orderApiUrl + '/' + this.routeId, { headers: this.headers })
                .subscribe(
                    (res: any) => {
                        this.order = res;
                        this.dateCreate = formatDate(res.createAt, 'dd/MM/yyyy', 'en-US');
                        this.buildForm();
                    },
                    (error) => {
                        this.order = new Order();
                    }
                );
        } else {
            this.buildForm();
        }

    }

    buildForm() {
        this.orderForm = this.formBuilder.group({
            client: [this.order.client, Validators.required],
            createAt: [this.dateCreate, Validators.required],
            status: [this.order.status.toString(), Validators.required]
        });
    }

    get f() { return this.orderForm.controls; }


    onSubmit() {
        this.submitted = true;

        if (!this.orderForm.valid) {
            window.alert('Formulário inválido');
            return;
        }

        this.order.status = this.orderForm.get('status').value;

        let result;
        if (this.routeId) {
            result = this.httpClient.put(this.orderApiUrl + '/' + this.routeId, JSON.parse(JSON.stringify(this.order)), { headers: this.headers })
        } else {
            result = this.httpClient.post(this.orderApiUrl, JSON.parse(JSON.stringify(this.order)), { headers: this.headers })
        }

        result.subscribe(
            (res) => {
                this.router.navigate(['orders']);
                window.alert('Salvo com sucesso');
            },
            (error) => {
                window.alert('Houve um erro na requisição');
            }
        );
    }

    onCancel() {
        this.submitted = false;
        this.orderForm.reset();
        this.router.navigate(['orders']);
    }
}