import { IMessages } from './messages.interface';
import { Message } from './message.model';

export class Messages implements IMessages {
    private messages: Message[];

    constructor() {
        this.messages = [];
    }

    addMessage(message: Message) {
        this.messages.push(message);
    }
}
