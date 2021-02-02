import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  step1 = false; subsNames
  clas; subject
  currentExam = []
  questionType;
  constructor(
    private router: Router,
    private teacherService: TeacherService
  ) { }

  ngOnInit(): void {
  }

  next() {
    if(this.clas && this.subject){
      this.step1 = true;
    }
  }

  changeType(event) {
    if(event.target.value == 'mcq') {
      this.questionType = 'mcq'
    }
    else {
      this.questionType = 'qa'
    }
  }

  addQuestion(ev) {
    console.log(ev);
  }

  addQuiz(ev) {

  }

  getSubjects(ev) {
    this.teacherService.getSubjects(ev.target.value)
    .subscribe(data=>{
      this.subsNames = Object.keys(data).map((index)=>{
        let sub = data[index];
        const name = Object.keys(sub).toString()
        const display = Object.values(sub).toString()
        return {'key': name, 'value': display}
      });
      console.log(this.subsNames);
    })
  }

  setSubjects(obj) {

  }


}
