import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private httpService : HttpClient, private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.username);
    console.log(this.password);
    console.log(this.role);
    console.log(this.name);
    this.dataService.serviceData = this.name;
    //this.httpService.post('', this.body).subscribe((response) => {console.log(response)});
    if(this.role == 'student')
    this.router.navigateByUrl('/loginToStudent');
    else
    this.router.navigateByUrl('/loginToProfessor')
  }

  register() {
    console.log(this.username);
    console.log(this.password);
    console.log(this.role);
   // this.httpService.post('', this.body).subscribe((response) => {console.log(response)});
   this.showMessage = true;
  }

}
