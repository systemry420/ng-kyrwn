import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question
  @Output() nextEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  nextQuestion() {
    // emit question to parent
    this.nextEvent.emit(this.question)
    console.log(this.question);

  }

}
