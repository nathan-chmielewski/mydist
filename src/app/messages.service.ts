import { Injectable } from '@angular/core';
import { Message } from './models/message.model';
import { Messages } from './models/messages.model';
import { IMessagesService } from './messages-service.interface';

@Injectable({
  providedIn: 'root'
})
export class MessagesService implements IMessagesService {

  constructor() { }

  createMessages() {
    let m0: Message = new Message(new Date(), 'test message 0');
    let m1: Message = new Message(new Date(), 'test message 1');
    let m2: Message = new Message(new Date(), 'test message 2');
    let m3: Message = new Message(new Date(), 'test message 3');
    // let messages: Messages = new Messages('thread0');
    let messages: Messages = new Messages();

    messages.addMessage(m0);
    messages.addMessage(m1);
    messages.addMessage(m2);
    messages.addMessage(m3);

    return messages;
  }
}
