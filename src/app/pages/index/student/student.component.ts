import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  email; password; error
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let valid = this.authService.studentLogin(this.email, this.password)
    // if(valid) {
    //   window.location.href = 'https://kayrawan-quiz.web.app/'
    // }
    // else {
    //   this.error = 'Wrong email or password'
    // }
  }

}
