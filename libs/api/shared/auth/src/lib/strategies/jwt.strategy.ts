import { User, UserService } from '@flashcards/api/shared/users';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService, protected readonly configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            secretOrKey: configService.get('JWT_SECRET_KEY'),
        });
    }

    public async validate(payload: JwtPayload): Promise<User> {
        const user = await this.userService.findByEmail(payload.email);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}
