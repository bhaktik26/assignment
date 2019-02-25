import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: String = this.dataService.serviceData;

  constructor(private router: Router, private dataService: DataService) { }

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
