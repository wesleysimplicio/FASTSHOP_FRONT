import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from './models/client.model';

@Component({
    selector: 'app-clients-form',
    templateUrl: './clients-form.component.html',
    styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

    client: Client;
    headers: HttpHeaders;
    alert: any;
    routeId: any;
    clientForm: FormGroup;
    submitted = false;
    clientApiUrl = 'http://localhost:5406/clients';

    constructor(
        private router: Router,
        private httpClient: HttpClient,
        private formBuilder: FormBuilder,
        public route: ActivatedRoute
    ) {
        this.client = new Client();
        this.headers = new HttpHeaders();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Allow-Origin', '*');
    }

    ngOnInit() {
        this.buildForm();
        this.routeId = this.route.snapshot.params.id;
        if (this.routeId) {
            this.httpClient.get(this.clientApiUrl + '/' + this.routeId, { headers: this.headers })
                .subscribe(
                    (res: any) => {
                        this.client = res;
                        this.buildForm();
                        console.log('this.client', this.client);
                    },
                    (error) => {
                        this.client = new Client();
                    }
                );
        }

    }

    buildForm() {
        this.clientForm = this.formBuilder.group({
            name: [this.client.name, Validators.required],
            document: [this.client.document, Validators.required],
            email: [this.client.email, Validators.required]
        });
    }

    get f() { return this.clientForm.controls; }


    onSubmit() {
        this.submitted = true;

        if (!this.clientForm.valid) {
            window.alert('Formulário inválido');
            return;
        }

        this.client.name = this.clientForm.get('name').value;
        this.client.document = this.clientForm.get('document').value;
        this.client.email = this.clientForm.get('email').value;

        let result;
        if (this.routeId) {
            result = this.httpClient.put(this.clientApiUrl + '/' + this.routeId, JSON.parse(JSON.stringify(this.client)), { headers: this.headers })
        } else {
            result = this.httpClient.post(this.clientApiUrl, JSON.parse(JSON.stringify(this.client)), { headers: this.headers })
        }

        result.subscribe(
            (res) => {
                this.alert = res;
                this.router.navigate(['clients']);
            },
            (error) => {
                this.alert = null;
            }
        );
    }

    onCancel() {
        this.submitted = false;
        this.clientForm.reset();
        this.router.navigate(['clients']);
    }
}