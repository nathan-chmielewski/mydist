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
  // service: MyServiceService;

  constructor(public myService: MyServiceService) {
    this.isLiked = false;
    // this.service = new MyServiceService();
   }

  ngOnInit() {
  }

  onClick() {
    this.isLiked = this.myService.likeImage(this.isLiked);
  }

}
