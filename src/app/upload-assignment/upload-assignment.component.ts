import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

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
  assignments = [];

  constructor(private dataService: DataService, private httpService : HttpClient) { }

  ngOnInit() {

  }

  createAssignment() {
    this.assignments.push({
      assignment_name: this.assignment_name,
      assignment: this.assignment
    });
    console.log(this.assignments);
    //need to construct payload n then post
    this.body = {
      course: this.dataService.serviceData,
      assignments: this.assignments
    }
    console.log(this.body);
    this.assignment = [];
    // post call
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
