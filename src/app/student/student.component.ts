import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: String = "bhakti";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewAllCourses() {
    this.router.navigateByUrl('/studentCourses');
  }

  viewEnrolledCourses() {
    this.router.navigateByUrl('/viewEnrolledCourses');
  }

  viewResults() {
    this.router.navigateByUrl('/viewResults');
  }

}
