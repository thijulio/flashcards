import { User, UserService } from '@flashcards/api/shared/users';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    public validateUser(email: string, pass: string): Promise<User> {
        return this.userService.findByCredentials(email, pass);
    }

    public async login(user: User): Promise<string> {
        const payload = { email: user.email, sub: user._id };

        return this.jwtService.sign(payload);
    }
}
