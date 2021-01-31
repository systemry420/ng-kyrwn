import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IndexComponent } from './pages/index/index.component';
import { StaffComponent } from './pages/staff/staff.component';
import { TeacherComponent } from './pages/index/teacher/teacher.component';
import { StudentComponent } from './pages/index/student/student.component';
import { TDashboardComponent } from './pages/index/teacher/t-dashboard/t-dashboard.component';
import { QuizComponent } from './pages/index/teacher/t-dashboard/quiz/quiz.component';
import { QuestionComponent } from './pages/index/teacher/t-dashboard/question/question.component';
import { DashboardComponent } from './pages/index/teacher/t-dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tdashboard/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'index/teacher',
    component: TeacherComponent
  },
  {
    path: 'tdashboard',
    component: TDashboardComponent
  },
  {
    path: 'tdashboard/dashboard',
    component: DashboardComponent
  },
  // {
  //   path: 'tdashboard/quiz',
  //   component: QuizComponent
  // },
  // {
  //   path: 'tdashboard/question',
  //   component: QuestionComponent
  // },
  {
    path: 'index/student',
    component: StudentComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
