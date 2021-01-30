import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public selectedIndex = 0;
  public pages = [
    {
      url: "index",
      text: "",
      icon: "fa fa-home fa-3x"
    },
    {
      url: "about",
      text: "",
      icon: "fa fa-university fa-2x"
    },
    {
      url: "contact",
      text: "",
      icon: "fa fa-mobile fa-3x"
    },
    {
      url: "staff",
      text: "",
      icon: "fa fa-address-card fa-2x"
    },
  ]
}
