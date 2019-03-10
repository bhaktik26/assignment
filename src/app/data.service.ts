import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  serviceData : String;
  token : String;
  professorName : String;

  constructor() { }
}
