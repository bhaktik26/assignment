import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

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
  headers : HttpHeaders;

  constructor(private httpService: HttpClient, private router: Router, private dataService: DataService) { }

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
    // this.httpService.post('localhost:8080/register', this.body, { headers: this.headers }).subscribe((response) => {console.log(response)});
    this.showMessage = true;
  }

  setHeaders() {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

}
