import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {
  list = [
    { name: 'Jane Doe', position: 'Web Designer' },
    { name: 'Jane Doe', position: 'Web Designer' },
    { name: 'Jane Doe', position: 'Web Designer' }
  ];
  sectionOneImg: string = 'https://c0.wallpaperflare.com/preview/222/411/586/chart-trading-courses-forex.jpg';
  cardImg: string = 'https://static.remove.bg/remove-bg-web/ea3c274e1b7f6fbbfe93fad8b2b13d7ef352f09c/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg'
}
