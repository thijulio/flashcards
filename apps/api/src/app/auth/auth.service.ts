import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/interfaces/user.interface';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) {}

    public async validateUser(email: string, pass: string): Promise<User> {
        return await this.userService.findByCredentials(email, pass);
    }

    public async login(user: User): Promise<string> {
        const payload = { email: user.email, sub: user._id };

        return this.jwtService.sign(payload);
    }
}
