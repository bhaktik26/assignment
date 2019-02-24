import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professor: String = "pro";
  displayCreation = false;
  displayCourses = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewAllCourses() {
    this.router.navigateByUrl('/professorCourses');
    // this.displayCourses = true;
  }

  createCourse() {
    this.router.navigateByUrl('/createCourse');
    // this.displayCreation = true;
  }

}
