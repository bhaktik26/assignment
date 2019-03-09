import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { RequestOptions, Headers } from '@angular/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  name: String = "";
  description: String = "";
  token: String = this.dataService.token;
  headers : Headers;
  options : RequestOptions;

  constructor(private http: RestService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  /**
   * insert course into db
   */
  create() {
    var body = {
      name: this.name,
      description: this.description
    }
    console.log(body);
    this.headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
    this.options = new RequestOptions({ headers: this.headers });
    // post call
    var data = this.http.post('http://localhost:8080/course', body, this.options);
    data.subscribe(res => {
      console.log(res);
      console.log("Course created");
    });
    this.router.navigateByUrl("/loginToProfessor")
  }

}
