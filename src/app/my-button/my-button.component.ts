import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {
  // properties
  isLiked: boolean;
  service: MyServiceService;
  message: string;

  constructor() {
    this.isLiked = false;
    this.service = new MyServiceService();
    this.message = '';
   }

  ngOnInit() {
  }

  onClick() {
    this.isLiked = this.service.likeImage(this.isLiked);
    this.message = 'Button clicked';
    console.log('button clicked');
  }

}
