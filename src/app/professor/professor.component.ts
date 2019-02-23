import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professor: String = "pro";
  displayCreation = false;
  displayCourses = false;

  constructor() { }

  ngOnInit() {
  }

  viewAllCourses() {
    this.displayCourses = true;
  }

  createCourse() {
    this.displayCreation = true;
  }

  /**
   * insert course into db
   */
  create() {

  }

}
