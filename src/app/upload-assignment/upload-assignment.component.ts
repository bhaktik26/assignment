import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-assignment',
  templateUrl: './upload-assignment.component.html',
  styleUrls: ['./upload-assignment.component.css']
})
export class UploadAssignmentComponent implements OnInit {

  question: String;
  answer_type: String;
  assignment = [];
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  body = {};
  course = "";
  assignment_name = "";
  
  constructor(private dataService: DataService, private httpService : HttpClient, private router: Router) { }

  ngOnInit() {

  }

  createAssignment() {

    //need to construct payload n then post
    this.body = {
      course: this.dataService.serviceData,
      assignment_name: this.assignment_name,
      assignment : this.assignment
    }
    console.log(this.body);
    this.assignment = [];
    // post call
    this.router.navigateByUrl('/professorCourses');
  }

  storeQuestion() {
    if (this.answer_type == 'MCQ') {
      var add = {
        question: this.question,
        answer_type: this.answer_type,
        answer: [
          this.option1, this.option2, this.option3, this.option4
        ]
      }
    }
    if (this.answer_type == 'Textual') {
      var add = {
        question: this.question,
        answer_type: this.answer_type,
        answer: ["", "", "", ""]
      }
    }
    console.log(add);
    this.assignment.push(add);
  }

}
