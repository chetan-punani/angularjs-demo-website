import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  value: string = 'name';
  isShowSectionOne = false;
  isShowSectionTwo = false;

  onTypeHandler() {
    console.log(this.value);
  }
}
