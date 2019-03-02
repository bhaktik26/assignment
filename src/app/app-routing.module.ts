import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudentComponent } from './student/student.component';

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

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'loginToStudent',
    component: StudentComponent
  },
  {
    path: 'loginToProfessor',
    component: ProfessorComponent
  },
  {
    path: 'professorCourses',
    component: ProfessorCoursesComponent
  },
  {
    path: 'createCourse',
    component: CreateCourseComponent
  },
  {
    path: 'showNotes',
    component: ShowNotesComponent
  },
  {
    path: 'uploadNotes',
    component: UploadNotesComponent
  },
  {
    path: 'uploadAssignment',
    component: UploadAssignmentComponent
  },
  {
    path: 'evaluateAssignment',
    component: EvaluateAssignmentComponent
  },
  {
    path: 'studentCourses',
    component: StudentCoursesComponent
  },
  {
    path: 'viewEnrolledCourses',
    component: EnrolledCoursesComponent
  },
  {
    path: 'viewResults',
    component: ResultsComponent
  },
  {
    path: 'completeAssignment',
    component: CompleteAssignmentComponent
  },
  {
    path: 'assignment',
    component: AssignmentComponent
  },
  {
    path: 'answered-assignment',
    component: AnsweredAssignmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
