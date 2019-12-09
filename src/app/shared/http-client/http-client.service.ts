import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClientService {

  //CONSTRUCTOR
  constructor(private http: Http ) {
    this.http = http;
  }

  /***************************************************
  PARSE
  ***************************************************/
  private isJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  /***************************************************
  METHODS POST, GET, PUT, DELETE
  ***************************************************/
  get(url) {
    let headers = new Headers();
    return this.http.get(url, { headers: headers });
  }

  post(url, data, responseBlob?: boolean) {
    let headers = new Headers();
    this.appendContentJsonHeader(headers);
    return this.http.post(url, data, { headers: headers });
  }

  put(url, data) {
    let headers = new Headers();
    this.appendContentJsonHeader(headers);
    return this.http.put(url, data, { headers: headers, withCredentials: true });
  }

  delete(url) {
    let headers = new Headers();
    return this.http.delete(url, { headers: headers, withCredentials: true });
  }
  head(url) {
    let headers = new Headers();
    return this.http.head(url, { headers: headers, withCredentials: true });
  }

  /********************************************************
  HEADERS
  ********************************************************/

  private appendContentJsonHeader(headers: Headers) {
    if (headers)
      headers.append('Content-Type', 'application/json');
  }

}