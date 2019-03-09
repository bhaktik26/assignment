import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Headers, RequestOptions } from '@angular/http';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-professor-courses',
  templateUrl: './professor-courses.component.html',
  styleUrls: ['./professor-courses.component.css']
})
export class ProfessorCoursesComponent implements OnInit {

  data = "";
  headers : Headers;
  token : String = this.dataService.token;
  options : RequestOptions
  name: String = this.dataService.professorName;
  courses = [];
  constructor(private router: Router, private dataService: DataService, private http:RestService) { }

  ngOnInit() {
    this.headers = new Headers({ 'Authorization': 'Bearer ' + this.token,'Content-type' : 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
    var data = this.http.get('http://localhost:8080/courses/?professorName=' + this.name , this.options);
    data.subscribe(res => {
      console.log(res);
      this.courses = JSON.parse(res._body);
      console.log(this.courses);
    });
  }

  // need to get all courses by get call
  /* courses = [
    {
      'name': 'Java 8',
      'description': 'Java 8 description'
    },
    {
      'name': 'Java 7',
      'description': 'Java 7 description'
    }
  ] */

  showNotes(courseName) {
    this.dataService.serviceData = courseName;
    this.router.navigateByUrl('/showNotes');
  }

  uploadNotes(courseName) {
    this.dataService.serviceData = courseName;
    this.router.navigateByUrl('/uploadNotes');
  }

  uploadAssignment(courseName) {
    this.data = courseName;
    this.dataService.serviceData = this.data;
    this.router.navigateByUrl('/uploadAssignment');
  }

  evaluateAssignment() {
    this.router.navigateByUrl('/evaluateAssignment');
  }

}
