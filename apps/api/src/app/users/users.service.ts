import { CreateUserRequest } from '@flashcards/common/types';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserModel } from './interfaces/user.interface';
@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: UserModel) {}

    // public async findOne(username: string): Promise<User | undefined> {
    //     return this.userModel.findOne((user: User) => user.username === username);
    // }

    public async findOneByEmail(email: string): Promise<User | undefined> {
        return this.userModel.findOne((user: User) => user.email === email);
    }

    public async findByCredentials(email: string, password: string): Promise<User> {
        return this.userModel.findByCredentials(email, password);
    }

    public async findAll(): Promise<User[]> {
        return this.userModel.find();
    }

    public async create(user: CreateUserRequest): Promise<User> {
        return new this.userModel(user).save();
    }
}
