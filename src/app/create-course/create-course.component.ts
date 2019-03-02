import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  name: String = "";
  description: String = "";
  token: String;

  constructor(private httpService: HttpClient, private router: Router) { }

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
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.token);
    console.log(headers);
    // post call
    this.httpService.post('localhost:8080/course', body, {headers: headers });
    console.log("Course created");
    this.router.navigateByUrl("/loginToProfessor")
  }

}
