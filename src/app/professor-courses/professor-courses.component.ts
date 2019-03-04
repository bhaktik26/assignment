import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-professor-courses',
  templateUrl: './professor-courses.component.html',
  styleUrls: ['./professor-courses.component.css']
})
export class ProfessorCoursesComponent implements OnInit {

  data = "";
  headers : HttpHeaders;
  token : String;
  //courses = [];
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token); 
    // this.httpService.get('localhost:8080/courses',{headers:this.headers});
  }

  // need to get all courses by get call
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
