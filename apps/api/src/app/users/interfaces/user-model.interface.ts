import { Document, Model } from 'mongoose';

export interface User extends Document {
    email: string;
    username: string;
    password: string;
    token: string;
    tokens: string[];
}

export interface UserModel extends Model<User> {
    findByCredentials(email: string, password: string): Promise<User>;
}
