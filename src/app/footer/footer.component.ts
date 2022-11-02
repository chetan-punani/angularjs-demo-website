import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  address: string = '15-16, Times Corporation,Theltej-Silaj Road, Ahemdabad';
  number: number = +1234567890;
  email: string = 'support@bacancy.com';
}
