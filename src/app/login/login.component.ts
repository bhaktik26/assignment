import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { EducationDataService } from '../education-data.service';
import { RequestOptions, Headers } from '@angular/http';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  role: String = "";
  username: String = "";
  password: String = "";
  name: string = "";
  body = {};
  title = 'VirtEdu';
  showMessage = false;
  headers: Headers;
  course = {};
  options: RequestOptions
  token: String;
  professorName: string;
  error = false;

  constructor(private http: RestService, private router: Router, private dataService: DataService) { }
  // private httpService: EducationDataService,
  ngOnInit() {
  }

  login() {
    console.log(this.username);
    console.log(this.password);
    console.log(this.role);
    console.log(this.name);
    this.dataService.serviceData = this.username;
    this.body = {
      username: this.username,
      password: this.password,
      role: this.role
    };
    console.log(this.body);
    this.setHeaders();
    var stat;
    var data = this.http.post('http://localhost:8080/token/generate-token', this.body, this.options);
    data.subscribe(res => {
      console.log(res);
      stat = res.status;
      this.token = res._body.token;
      this.professorName = res._body.username;
      console.log(stat);
      console.log(res._body);
      var bodydata = JSON.parse(res._body);
      console.log(bodydata.token);
      this.token = bodydata.token;
      this.professorName = bodydata.username;
      // set token and professor name in data service
      this.dataService.token = this.token;
      this.dataService.professorName = this.professorName;
      if (this.role == 'student' && stat == 200)
      this.router.navigateByUrl('/loginToStudent');
    else if (this.role == 'professor' && stat == 200)
      this.router.navigateByUrl('/loginToProfessor')
      if(stat == 401)
      this.error = true;
    });
    //this.httpService.post('localhost:8080/token/generate-token', this.body, { headers: this.headers }).subscribe((response) => {console.log(response)});
  }

  register() {
    this.body = {
      username: this.username,
      password: this.password,
      confirmPassword: this.password,
      role: this.role
    };
    this.setHeaders();
    console.log(this.body);
    console.log(this.headers);
    // this.httpService.post('localhost:8080/template/products', this.body, { headers: this.headers }).subscribe((response) => {console.log(response)});
    //var data = this.httpService.getData('localhost:8080/template/products', this.options);
    var data = this.http.post('http://localhost:8080/register', this.body, this.options);
    data.subscribe(res => console.log(res));
    this.showMessage = true;
  }

  setHeaders() {
    this.headers = new Headers({ 'Content-type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

}
