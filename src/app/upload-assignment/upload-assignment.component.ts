import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-upload-assignment',
  templateUrl: './upload-assignment.component.html',
  styleUrls: ['./upload-assignment.component.css']
})
export class UploadAssignmentComponent implements OnInit {

  question: String;
  type: String;
  assignment = [];
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  body = {};
  course="";

  constructor(private dataService: DataService) { }

  ngOnInit() {
    
  }

  createAssignment() {
//need to construct payload n then post
    this.body = {
      course: this.dataService.serviceData,
      assignment : this.assignment
    }
    console.log(this.body);
  }

 

  storeQuestion() {
    if(this.type=='MCQ') {
    var add = {
      question: this.question,
      answer_type: this.type,
      answer: [
        this.option1, this.option2, this.option3, this.option4
      ]
    }
  }
  if(this.type=='Textual') {
    var add = {
      question: this.question,
      answer_type: this.type,
      answer: ["", "", "",""]
    }
  }
    console.log(add);
    this.assignment.push(add);
  }

}
