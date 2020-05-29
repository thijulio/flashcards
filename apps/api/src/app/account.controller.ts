import { AuthService, JwtAuthGuard } from '@flashcards/api/shared/auth';
import { getMongoException, MongoErrorFilter } from '@flashcards/api/shared/errors';
import { User, UserService } from '@flashcards/api/shared/users';
import { CreateUserRequest, UserAuthResponse } from '@flashcards/common/types';
import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseFilters, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AccountController {
    constructor(private readonly userService: UserService, private readonly authService: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    public async login(@Request() req: any): Promise<UserAuthResponse> {
        const accessToken = await this.authService.login(req.user);
        return {
            user: req.user,
            accessToken: accessToken,
        };
    }

    @UseGuards(JwtAuthGuard)
    @Get('users/me')
    public getProfile(@Request() req: any): User {
        return req.user;
    }

    @Post('user/register')
    @UseFilters(MongoErrorFilter)
    @HttpCode(HttpStatus.CREATED)
    public async createUser(
        @Body() body: CreateUserRequest,
    ): Promise<{
        user: User;
        accessToken: string;
    }> {
        try {
            const user = await this.userService.create(body);
            const accessToken = await this.authService.login(user);
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
