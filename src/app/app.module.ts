import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StaffComponent } from './pages/staff/staff.component';
import { TeacherComponent } from './pages/index/teacher/teacher.component';
import { StudentComponent } from './pages/index/student/student.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { TDashboardComponent } from './pages/index/teacher/t-dashboard/t-dashboard.component';
import { QuizComponent } from './pages/index/teacher/t-dashboard/quiz/quiz.component';
import { QuestionComponent } from './pages/index/teacher/t-dashboard/question/question.component'
import {
  AngularFirestoreProject1,
  AngularFirestoreProject2,
} from './firebase.factory';
import { PLATFORM_ID, NgZone } from '@angular/core';
import { environment } from "src/environments/environment";
import { AngularFirestoreModule } from "@angular/fire/firestore";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    ContactComponent,
    StaffComponent,
    TeacherComponent,
    StudentComponent,
    TDashboardComponent,
    QuizComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [
    {
      provide: 'env',
      useValue: environment
    },
    {
      provide: 'kayrawan-proj',
      deps: [PLATFORM_ID, NgZone],
      useFactory: AngularFirestoreProject1
    },
    {
      provide: 'quiz-proj',
      deps: [PLATFORM_ID, NgZone],
      useFactory: AngularFirestoreProject2
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
