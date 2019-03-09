import { Component, OnInit } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { RestService } from '../rest.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.css']
})
export class StudentCoursesComponent implements OnInit {

  headers: Headers;
  token: String = this.serviceData.token;
  options: RequestOptions
  courses = [];
  errorMessage = false;
  constructor(private http: RestService, private serviceData: DataService) { }

  ngOnInit() {
    this.headers = new Headers({ 'Authorization': 'Bearer ' + this.token,'Content-type' : 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
    var data = this.http.get('http://localhost:8080/courses', this.options);
    data.subscribe(res => {
      console.log(res);
      this.courses = JSON.parse(res._body);
      console.log(this.courses);
    });
  }

  /* courses = [
    {
      'name': 'Java 8',
      'description': 'Java 8 description'
    },
    {
      'name': 'Java 7',
      'description': 'Java 7 description'
    }
  ] */

  enroll(courseName) {
    var body = {
      courseName: courseName
    };
    console.log(body);
    var data = this.http.post('http://localhost:8080/enroll/course', body, this.options);
    // post call
    data.subscribe(res => {
      console.log(res);
      if(res.status==500)
      this.errorMessage = true;
    });
  }

}
