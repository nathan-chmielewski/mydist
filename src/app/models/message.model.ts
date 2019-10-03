import { IMessage } from './message.interface';

export class Message implements IMessage {

    private timestamp: Date;
    private text: string;

    constructor(timestamp: Date, text: string) {
        this.timestamp = timestamp;
        this.text = text;
    }

    getMessageText() {
        return this.text;
    }

    getMessageTimeStamp() {
        return this.timestamp;
    }
}
