import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Http } from '@angular/http';
import 'core-js/es7/reflect';

@Injectable({
  providedIn: 'root'
})
export class EducationDataService extends RestService {
  
  constructor(protected http: Http) { super(http); }
  public getData(url, options: any) {
    return this.get(url, options);
  }
  public postData(url, data, options: any) {
    return this.post(url, data, options);
  }
}
