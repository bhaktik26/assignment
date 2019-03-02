import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-notes',
  templateUrl: './upload-notes.component.html',
  styleUrls: ['./upload-notes.component.css']
})
export class UploadNotesComponent implements OnInit {

  name: String;
  chapter_name : String;
  file : File

  constructor() { }

  ngOnInit() {
  }

  uploadNote() {
    var fd = new FormData();
    fd.append('file', this.file);
    var body = {
      name: this.name,
      chapter_name: this.chapter_name,
      file : fd
    }
    console.log(body);
    // post call
  }

}
