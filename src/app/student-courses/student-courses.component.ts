import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.css']
})
export class StudentCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
