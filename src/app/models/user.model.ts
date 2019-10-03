import { IUser } from './user.interface';

export class User implements IUser {
    private id: string;
    private name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    getID() {
        return this.id;
    }

    getName() {
        return this.name;
    }

}
