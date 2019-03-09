import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  displayCreation = false;
  displayCourses = false;
  name = "";
  professor: String = this.dataService.serviceData;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  viewAllCourses() {
    this.dataService.professorName = String(this.professor);
    this.router.navigateByUrl('/professorCourses');
    // this.displayCourses = true;
  }

  createCourse() {
    this.router.navigateByUrl('/createCourse');
    // this.displayCreation = true;
  }

}
