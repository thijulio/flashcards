import { CreateUserRequest } from '@flashcards/common/types';
import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseFilters, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jws-auth.guard';
import { MongoErrorFilter } from './shared/errors/exception-filters/mongo-error-filter';
import { getMongoException } from './shared/errors/helpers/mongo-error-handling.helper';
import { User } from './users/interfaces/user-model.interface';
import { UsersService } from './users/users.service';

@Controller()
export class AccountController {
    constructor(private readonly accountService: UsersService, private readonly authService: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    public async login(
        // tslint:disable-next-line: typedef
        @Request() req,
    ): Promise<{
        user: User;
        accessToken: string;
    }> {
        const accessToken = await this.authService.login(req.user);
        return {
            user: req.user,
            accessToken: accessToken,
        };
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    // tslint:disable-next-line: typedef
    public getProfile(@Request() req) {
        return req.user;
    }

    @Post('account')
    @UseFilters(MongoErrorFilter)
    @HttpCode(HttpStatus.CREATED)
    public async createUser(
        @Body() body: CreateUserRequest,
    ): Promise<{
        user: User;
        accessToken: string;
    }> {
        try {
            const user = await this.accountService.create(body);
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
