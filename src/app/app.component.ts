import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;

}

export const ROUTES: RouteInfo[] = [
  { path: '', title: '.Category' },
  { path: '', title: '.Home' },
  { path: '', title: '.Contact us ' },
  { path: '', title: '.Faq' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'landingpage';
  menuItems!: any[]
  ngOnInit(): void {
    this.menuItems = ROUTES
  }
}
