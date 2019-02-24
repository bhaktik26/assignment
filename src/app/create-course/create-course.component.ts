import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  name: String ="";
  description: String = "";

  constructor() { }

  ngOnInit() {
  }

  /**
   * insert course into db
   */
  create() {
    console.log("Course created");
  }

}
