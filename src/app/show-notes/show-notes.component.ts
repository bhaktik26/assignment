import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.css']
})
export class ShowNotesComponent implements OnInit {

  constructor(private httpService: HttpClient, private dataService: DataService) { }

  headers: HttpHeaders;
  token: String;
  course_name = this.dataService.serviceData;

  ngOnInit() {
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    // this.httpService.get('localhost:8080/notes/' + this.course_name,{headers:this.headers});
  }

  // get call under a course
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

  downloadPDF(note_name) {
    console.log(note_name);
    this.httpService.get('localhost:8080/download/notes/' + note_name, { headers: this.headers });
    // send note name in get call
  }

}
