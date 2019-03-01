import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-professor-courses',
  templateUrl: './professor-courses.component.html',
  styleUrls: ['./professor-courses.component.css']
})
export class ProfessorCoursesComponent implements OnInit {

  data = "";

  constructor(private router: Router, private dataService: DataService) { }

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

  showNotes() {
    this.router.navigateByUrl('/showNotes');
  }

  uploadNotes() {
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
