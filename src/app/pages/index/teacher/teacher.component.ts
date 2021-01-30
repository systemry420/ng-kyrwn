import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  email; password; error
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.teacherLogin(this.email, this.password)
    .subscribe(response => {
      if(response.registered) {
        this.router.navigate(['tdashboard'])
      }
    }, error=> {
      this.error = error
    })
  }

}
