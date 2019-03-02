import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.css']
})
export class EnrolledCoursesComponent implements OnInit {

  headers: HttpHeaders;
  token : String;

  constructor(private router: Router, private httpService: HttpClient) { }

  ngOnInit() {
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token); 
    //this.httpService.get('localhost:8080/enrolled/course/', {headers:this.headers});
  }

  // get call
  enrolledCourses = [
    {
      'name': 'Java 8',
      'description': 'Java 8 description'
    },
    {
      'name': 'Java 7',
      'description': 'Java 7 description'
    }
  ]

  viewNotes() {
    this.router.navigateByUrl('/showNotes');
  }

  completeAssignment() {
    this.router.navigateByUrl('/completeAssignment');
  }

}
