import { User, UserService } from '@flashcards/api/shared/users';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

    public validateUser(email: string, pass: string): Promise<User> {
        return this.userService.findByCredentials(email, pass);
    }

    public login(user: User): string {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const payload = { email: user.email, sub: user._id };
        return this.jwtService.sign(payload);
    }
}
