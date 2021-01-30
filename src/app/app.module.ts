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

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    ContactComponent,
    StaffComponent,
    TeacherComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
