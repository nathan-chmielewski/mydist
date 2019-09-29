import { Message } from './message.model';
import { User } from './user.model';


export class Messages {
    public id: string;
    public messages: Message[];
    public users: User[];

    constructor(id: string) {
        this.messages = [];
        this.id = id;
        this.users = [];

    }

    addMessage(message: Message) {
        this.messages.push(message);
    }
}
