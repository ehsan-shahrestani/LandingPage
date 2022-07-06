import { Component, OnInit } from '@angular/core';


declare interface Itags {
  icon: string,
  text: string
}

export const tags: Itags[] = [
  { text: 'Fotball', icon: 'fa-futbol' },
  { text: 'Covid-19', icon: 'fa-virus-covid' },
  { text: 'Mask', icon: 'fa-mask-face' },
  { text: 'Iran', icon: 'fa-trophy' },
  { text: 'World', icon: 'fa-earth-americas' }
]




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'landingpage';
  tags: any
  ngOnInit(): void {
    this.tags = tags
  }
}
