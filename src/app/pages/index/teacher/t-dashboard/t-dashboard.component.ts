import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-t-dashboard',
  templateUrl: './t-dashboard.component.html',
  styleUrls: ['./t-dashboard.component.css']
})
export class TDashboardComponent implements OnInit {
  level; clas; subject

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  next() {
    if(this.level && this.clas && this.subject){
      this.router.navigate(['tdashboard/dashboard'])
    }
  }

}
