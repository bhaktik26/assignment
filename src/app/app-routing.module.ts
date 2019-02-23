import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudentComponent } from './student/student.component';
import { combineLatest } from 'rxjs';

const routes: Routes = [
{
  path:'',
  component:LoginComponent
},
{
  path:'loginToStudent',
  component:StudentComponent
},
{
  path:'loginToProfessor',
  component:ProfessorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
