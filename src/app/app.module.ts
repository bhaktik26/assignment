import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { ProfessorComponent } from './professor/professor.component';
import { ProfessorCoursesComponent } from './professor-courses/professor-courses.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { ShowNotesComponent } from './show-notes/show-notes.component';
import { UploadNotesComponent } from './upload-notes/upload-notes.component';
import { UploadAssignmentComponent } from './upload-assignment/upload-assignment.component';
import { EvaluateAssignmentComponent } from './evaluate-assignment/evaluate-assignment.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { EnrolledCoursesComponent } from './enrolled-courses/enrolled-courses.component';
import { ResultsComponent } from './results/results.component';
import { CompleteAssignmentComponent } from './complete-assignment/complete-assignment.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AnsweredAssignmentComponent } from './answered-assignment/answered-assignment.component';
import { Http, ConnectionBackend, RequestOptions, HttpModule } from '@angular/http';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    ProfessorComponent,
    ProfessorCoursesComponent,
    CreateCourseComponent,
    ShowNotesComponent,
    UploadNotesComponent,
    UploadAssignmentComponent,
    EvaluateAssignmentComponent,
    StudentCoursesComponent,
    EnrolledCoursesComponent,
    ResultsComponent,
    CompleteAssignmentComponent,
    AssignmentComponent,
    AnsweredAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
