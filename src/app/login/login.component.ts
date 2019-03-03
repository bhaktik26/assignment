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
  name: String = "";
  body = {};
  title = 'VirtEdu';
  showMessage = false;
  headers: Headers;
  course = {};
  options: RequestOptions

  constructor(private http: RestService, private router: Router, private dataService: DataService) { }
  // private httpService: EducationDataService,
  ngOnInit() {
  }

  login() {
    console.log(this.username);
    console.log(this.password);
    console.log(this.role);
    console.log(this.name);
    this.dataService.serviceData = this.name;
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
      console.log(stat);
    });
    
    //this.httpService.post('localhost:8080/token/generate-token', this.body, { headers: this.headers }).subscribe((response) => {console.log(response)});
    if (this.role == 'student')
      this.router.navigateByUrl('/loginToStudent');
    else
      this.router.navigateByUrl('/loginToProfessor')
  }

  register() {
    //console.log(this.username);
    //console.log(this.password);
    // console.log(this.role);
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
    //console.log(this.course);

  }

  setHeaders() {
    this.headers = new Headers({ 'Content-type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

}
