import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-complete-assignment',
  templateUrl: './complete-assignment.component.html',
  styleUrls: ['./complete-assignment.component.css']
})
export class CompleteAssignmentComponent implements OnInit {
  assignment_name : String;

  // get call for all assgts under a course
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

  attemptAssignment(assignment_name)
  {
    this.dataService.serviceData = assignment_name;
    this.router.navigateByUrl('/assignment');
  }

}
