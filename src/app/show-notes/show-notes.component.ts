import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.css']
})
export class ShowNotesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
