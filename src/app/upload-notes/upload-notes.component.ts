import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-upload-notes',
  templateUrl: './upload-notes.component.html',
  styleUrls: ['./upload-notes.component.css']
})
export class UploadNotesComponent implements OnInit {

  name: String;
  chapter_name : String;
  file : File;
  headers : HttpHeaders;
  token : String;
  courseName = this.dataService.serviceData;

  constructor(private httpService : HttpClient, private dataService: DataService) { }

  ngOnInit() {
  }

  uploadNote() {
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token); 
    var fd = new FormData();
    fd.append('file', this.file);
    var body = {
      name: this.name,
      chapterName: this.chapter_name,
      courseName: this.courseName,
      notes_file : fd
    }
    console.log(body);
    // post call
    this.httpService.post('localhost:8080/notes', body, {headers:this.headers});
  }

}
