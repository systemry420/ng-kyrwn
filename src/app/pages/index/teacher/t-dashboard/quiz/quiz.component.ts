import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  subject; question; option1; option2; option3; correct

  arrayOfQuestion = []

  constructor() { }

  ngOnInit(): void {
  }

  addQuestion() {
    this.arrayOfQuestion.push(
      { 'question': this.question,
        'op1': this.option1,
        'op2': this.option2,
        'op3': this.option3,
        'correct': this.correct
      }
    )

    this.question = ''
    this.option1 = ''
    this.option2 = ''
    this.option3 = ''
    this.correct = ''

    console.log(this.arrayOfQuestion);
  }

}
