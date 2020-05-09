import { Document, Model } from 'mongoose';

export interface User extends Document {
    givenName: string;
    name: string;
    surname: string;
    password: string;
    email: string;
    gender: string;
    token: string;
    tokens: string[];
}

export interface UserModel extends Model<User> {
    findByCredentials(email: string, password: string): Promise<User>;
}
