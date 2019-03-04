import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { RestService } from '../rest.service';
import { RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-upload-notes',
  templateUrl: './upload-notes.component.html',
  styleUrls: ['./upload-notes.component.css']
})
export class UploadNotesComponent implements OnInit {

  name: string;
  chapter_name : string;
  file : File;
  // try MultiPart file
  token : String = this.dataService.token;
  courseName = this.dataService.serviceData;
  headers: Headers;
  options: RequestOptions;
  professorName: string = this.dataService.professorName;

  constructor(private http: RestService, private dataService: DataService) { }

  ngOnInit() {
  }

  uploadNote() {
    this.headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    this.options = new RequestOptions({ headers: this.headers });
    var fd = new FormData();
    fd.append('name', this.name);
    fd.append('chapterName', this.chapter_name);
    fd.append('courseName', this.courseName);
    fd.append('notes_file', this.file);
    console.log(fd);

    var body = {
      name: this.name,
      chapterName: this.chapter_name,
      courseName: this.courseName,
      professorName : this.professorName,
      notes_file : fd
    }
    console.log(body);
    console.log(this.options);
    // post call
    var data = this.http.post('http://localhost:8080/notes', fd, this.options);
    data.subscribe(res => console.log(res));
  }

}
