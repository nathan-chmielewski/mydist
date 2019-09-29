export class Message {
    public timestamp: Date;
    public text: string;

    constructor(timestamp: Date, text: string) {
        this.timestamp = timestamp;
        this.text = text;
    }
}