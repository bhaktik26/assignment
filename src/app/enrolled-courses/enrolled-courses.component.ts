import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.css']
})
export class EnrolledCoursesComponent implements OnInit {

  constructor(private router: Router, private httpService: HttpClient) { }

  ngOnInit() {
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
