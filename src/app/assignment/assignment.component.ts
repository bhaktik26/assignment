import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  assignment_name:String;
  ansTextual: String;
  ansMCQ: String;
  ans: String;
  assignment = [
    {
      "question":"What is ur name?",
      "answer_type":"MCQ",
      "answer":[
      "Shreyas",
      "Bhakti",
      "Ferrari",
      "Lammy"
      ]
      },
      {
      "question":"What is ur fav car?",
      "answer_type":"Textual",
      "answer":[
      ]
      }
  ];

  answers =[];
  

  constructor(private dataService: DataService) { 
    this.assignment_name = this.dataService.serviceData;
  }

  ngOnInit() {
  }

  save(question, answer_type) {
    if(answer_type == 'MCQ') {
    var add = {
      question: question,
      answer : this.ansMCQ
    }
  }
  if(answer_type == 'Textual') {
    var add = {
      question: question,
      answer : this.ansTextual
    }
  }

    this.answers.push(add);
    console.log(this.answers);
  }

  submitAssgt() {
// what to include in body - assgt name, answers
    var body = {
      assignment_name: this.assignment_name,
      answers: this.answers
    }
    // post call 
  }

}
