import { CreateUserRequest } from '@flashcards/common/types';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserModel } from '../interfaces/user.interface';
@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: UserModel) {}

    public async findByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({ email });
    }

    public async findByCredentials(email: string, password: string): Promise<User> {
        return this.userModel.findByCredentials(email, password);
    }

    public async create(user: CreateUserRequest): Promise<User> {
        return new this.userModel(user).save();
    }
}
