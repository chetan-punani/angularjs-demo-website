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
  ]
}
