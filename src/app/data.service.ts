import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  serviceData : string;
  token : String;
  professorName : string;

  constructor() { }
}
