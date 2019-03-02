import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.css']
})
export class StudentCoursesComponent implements OnInit {

  headers : HttpHeaders;
  token: String;

  constructor(private httpService : HttpClient) { }

  ngOnInit() {
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token); 
    // this.httpService.get('localhost:8080/courses',{headers:this.headers});
  }

  courses = [
    {
      'name': 'Java 8',
      'description': 'Java 8 description'
    },
    {
      'name': 'Java 7',
      'description': 'Java 7 description'
    }
  ]

  enroll() {
    var body = {

    }
    console.log(body);
    // post call
  }

}
