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
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor() { }
  menuItems!: any[]

  ngOnInit(): void {
    this.menuItems = ROUTES
  }

}
