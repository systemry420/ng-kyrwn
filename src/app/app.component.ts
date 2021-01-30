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
      icon: "fas fa-home fa-2x"
    },
    {
      url: "about",
      text: "",
      icon: "fas fa-university fa-2x"
    },
    {
      url: "contact",
      text: "",
      icon: "fas fa-mobile-alt fa-2x"
    },
    {
      url: "staff",
      text: "",
      icon: "fa fa-address-card fa-2x"
    },
  ]

  public footer = [
    {
      url: "index",
      text: "الرئيسية",
    },
    {
      url: "about",
      text: "عن المعهد",
    },
    {
      url: "contact",
      text: "اتصل بنا",
    },
    {
      url: "staff",
      text: "من نحن",
    },

  ]
}
