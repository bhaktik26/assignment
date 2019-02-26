import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-assignment',
  templateUrl: './upload-assignment.component.html',
  styleUrls: ['./upload-assignment.component.css']
})
export class UploadAssignmentComponent implements OnInit {

  create = false;

  constructor() { }

  ngOnInit() {
  }

  createAssignment() {
    this.create = true;
  }

}
