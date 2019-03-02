import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-answered-assignment',
  templateUrl: './answered-assignment.component.html',
  styleUrls: ['./answered-assignment.component.css']
})
export class AnsweredAssignmentComponent implements OnInit {

  // get call 
  answers = [
    {
      question:"What is ur name?",
      answer: "Shreyas"
    },
    {
      question:"What is ur fav car?",
      answer: "Lammy"
    },
  ];
  assignment_name:String;

  constructor(private dataService: DataService) {
    this.assignment_name = this.dataService.serviceData;
   }

  ngOnInit() {
  }

}
