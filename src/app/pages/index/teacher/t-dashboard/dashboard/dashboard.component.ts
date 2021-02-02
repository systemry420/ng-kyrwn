import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  step1 = false
  level; clas; subject

  questionType;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  changeType(event) {
    if(event.target.value == 'mcq') {
      this.questionType = 'mcq'
    }
    else {
      this.questionType = 'qa'
    }
  }

  next() {
    if(this.level && this.clas && this.subject){
      this.step1 = true;
    }
  }

}
