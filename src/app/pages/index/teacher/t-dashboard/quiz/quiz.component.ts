import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Data {
  question: string;
  option1: string;
  option2: string;
  option3?: string;
}
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Output() nextEvent = new EventEmitter();

  data = {
    question: '',
    option1: '',
    option2: '',
    option3: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  nextQuestion() {
    // emit data to parent
    this.nextEvent.emit(this.data);

    this.data = {
      question: '',
      option1: '',
      option2: '',
      option3: ''
    }

  }

}
