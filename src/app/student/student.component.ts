import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: String = "bhakti";
  
  constructor() { }

  ngOnInit() {
  }

  viewAllCourses() {

  }

  viewEnrolledCourses() {

  }

  viewResults() {
    
  }

}
