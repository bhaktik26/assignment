import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluate-assignment',
  templateUrl: './evaluate-assignment.component.html',
  styleUrls: ['./evaluate-assignment.component.css']
})
export class EvaluateAssignmentComponent implements OnInit {
  // get all answered assgts in a course
  assignments = [
    {
      "assignment_name":"whatever",
      "assignment":
      [
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
      ]
      },
      {
      "assignment_name":"whatever2",
      "assignment":
      [
      {
      "question":"What is ur surname?",
      "answer_type":"MCQ",
      "answer":[
      "Shreyas",
      "Bhakti",
      "Ferrari",
      "Lammy"
      ]
      },
      {
      "question":"What is ur fav supercar?",
      "answer_type":"text",
      "answer":[
      ]
      }
      ]
      }
    ];

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  evaluateAssignment(assignment_name) {
    this.dataService.serviceData = assignment_name;
    this.router.navigateByUrl('/answered-assignment');
  }

}
