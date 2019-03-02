import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  name: String ="";
  description: String = "";

  constructor(private httpService : HttpClient) { }

  ngOnInit() {
  }

  /**
   * insert course into db
   */
  create() {
    var body = {
      name: this.name,
      description: this.description
    }
    console.log(body);
    console.log("Course created");
  }

}
