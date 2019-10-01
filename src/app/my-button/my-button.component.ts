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

  constructor() {
    this.isLiked = false;
    this.service = new MyServiceService();
   }

  ngOnInit() {
  }

  onClick() {
    this.isLiked = this.service.likeImage(this.isLiked);
  }

}
