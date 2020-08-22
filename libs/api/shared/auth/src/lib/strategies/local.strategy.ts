import { User } from '@flashcards/api/shared/users';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../data/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly moduleRef: ModuleRef) {
        super({
            passReqToCallback: true,
            usernameField: 'email',
            passwordField: 'password',
        });
    }

    public async validate(request: Request, email: string, password: string): Promise<User> {
        const contextId = ContextIdFactory.getByRequest(request);
        const authService = await this.moduleRef.resolve(AuthService, contextId);
        const user: User = await authService.validateUser(email, password);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}
