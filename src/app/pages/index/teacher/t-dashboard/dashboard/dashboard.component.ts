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
  clas; subject; duration
  currentExam = []
  questionType;
  output = []

  constructor(
    private router: Router,
    private teacherService: TeacherService,
  ) { }

  ngOnInit(): void {
  }

  next() {
    // this.teacherService.getStudent()
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
    if(this.questionType == 'mcq') {
      let question = {'mcq': ev}
      this.currentExam.push(question)
    }
    else if(this.questionType == 'qa') {
      let question = {'qa': ev}
      this.currentExam.push(question)
    }

    let ob = {
      type: this.questionType,
      q: ev
    }
    console.log(ob)
    this.output.push(ob)
  }

  removeQuestion(i) {
    this.currentExam.splice(i, 1)
    this.output.splice(i, 1)
  }

  submitQuiz() {
    this.currentExam.unshift(this.duration)
    this.teacherService.addQuiz(this.clas, this.subject, this.currentExam)
    .then(response=>{
      console.log(response);

    })
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
