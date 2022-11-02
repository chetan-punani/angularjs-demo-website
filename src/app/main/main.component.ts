import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  value: string = 'name';
  showSecOne = false;
  showSecTwo = false;

  onTypeHandler() {
    console.log(this.value);
  }
}
