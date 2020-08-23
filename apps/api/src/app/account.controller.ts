import { AuthService, JwtAuthGuard } from '@flashcards/api/shared/auth';
import { getMongoException, MongoErrorFilter } from '@flashcards/api/shared/errors';
import { User, UserService } from '@flashcards/api/shared/users';
import { CreateUserRequest, UserAuthResponse } from '@flashcards/common/types';
import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseFilters, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Account')
@Controller()
export class AccountController {
    constructor(private readonly userService: UserService, private readonly authService: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
    public login(@Request() req: any): UserAuthResponse {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const accessToken = this.authService.login(req.user);
        return {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            user: req.user,
            accessToken: accessToken,
        };
    }

    @UseGuards(JwtAuthGuard)
    @Get('users/me')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
    public getProfile(@Request() req: any): User {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        return req.user;
    }

    @Post('user/register')
    @UseFilters(MongoErrorFilter)
    @HttpCode(HttpStatus.CREATED)
    public async createUser(
        @Body() body: CreateUserRequest
    ): Promise<{
        user: User;
        accessToken: string;
    }> {
        try {
            const user = await this.userService.create(body);
            const accessToken = this.authService.login(user);
            return {
                user,
                accessToken,
            };
        } catch (e) {
            const mongoException = getMongoException(e);

            if (mongoException) {
                throw mongoException;
            }

            throw e;
        }
    }
}
