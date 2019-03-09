import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestOptions, Headers } from '@angular/http';
import { RestService } from '../rest.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.css']
})
export class EnrolledCoursesComponent implements OnInit {

  headers: Headers;
  options: RequestOptions;
  token : String = this.serviceData.token;
  enrolledCourses = [];

  constructor(private router: Router, private http: RestService, private serviceData : DataService ) { }

  ngOnInit() {
    this.headers = new Headers({'Authorization': 'Bearer ' + this.token}); 
    this.options = new RequestOptions({ headers: this.headers });
    var data = this.http.get('http://localhost:8080/enrolled/course/', this.options);
    data.subscribe(res => {
      console.log(res);
      this.enrolledCourses = JSON.parse(res._body);
    });
  }

  // get call
  /* enrolledCourses = [
    {
      'name': 'Java 8',
      'description': 'Java 8 description'
    },
    {
      'name': 'Java 7',
      'description': 'Java 7 description'
    }
  ] */

  viewNotes() {
    this.router.navigateByUrl('/showNotes');
  }

  completeAssignment() {
    this.router.navigateByUrl('/completeAssignment');
  }

}
