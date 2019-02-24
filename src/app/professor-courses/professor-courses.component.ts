import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-courses',
  templateUrl: './professor-courses.component.html',
  styleUrls: ['./professor-courses.component.css']
})
export class ProfessorCoursesComponent implements OnInit {



  constructor(private router: Router) { }

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

  uploadAssignment() {
    this.router.navigateByUrl('/uploadAssignment');
  }

  evaluateAssignment() {
    this.router.navigateByUrl('/evaluateAssignment');
  }

}
