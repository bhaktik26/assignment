import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
//import { delay } from 'rxjs/operators';

//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/delay';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  private headers = new Headers({ 'Content-type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(protected http: Http) { }

  public get(url, options?: any) {
    return this.http.get(url, options || this.options).pipe(map(res => {
      var serverResp = null;
      try {
        serverResp = res;
      }
      catch (ex) {
        serverResp = res;
      }
      return serverResp;
    }));
  }

  public post(url, data, options?: any) {
    var body: any;
    var postOptions: any;

    if (data instanceof FormData) {
      body = data;
      postOptions = options || null;
    }
    else {
      body = JSON.stringify(data);
      postOptions = options || this.options;
    }

    return this.http.post(url, body, postOptions)
    .pipe(map(res => {
      var serverResp = null;
      try {
        serverResp = res;
      }
      catch(ex) {
        serverResp = res;
      }
      return serverResp;
    }));
  }

}
