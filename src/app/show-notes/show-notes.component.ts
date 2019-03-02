import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.css']
})
export class ShowNotesComponent implements OnInit {

  constructor(private httpService : HttpClient) { }

  ngOnInit() {
  }

  // get call
  notes = [
    {
      name: 'Functional interface',
      chaptername: 'Interfaces'
    },
    {
      name: 'Lambdas',
      chaptername: 'Functional programming'
    }
  ];

  downloadPDF() {

  }

}
