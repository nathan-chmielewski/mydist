import { Component } from '@angular/core';
import { MessagesService } from './messages.service';
import { Messages } from './models/messages.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mydist';
  messages: Messages;

  constructor(private messageService: MessagesService ) {
    this.messages = new Messages();
    this.messages = this.messageService.createMessages();
  }
}

