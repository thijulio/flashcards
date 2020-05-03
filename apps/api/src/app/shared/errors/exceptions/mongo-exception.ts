import { MongoError } from 'mongodb';

export class MongoException extends MongoError {
    constructor(public name: string, public errors: string[], public code?: number) {
        super(name);
    }
}
