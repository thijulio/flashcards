import { User } from '@flashcards/api-interfaces';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';

@Controller()
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Get('account') // delete..   test only
    public getUsers(): Observable<User[]> {
        return this.accountService.getUsers();
    }

    @Get('account')
    public getUser(id: string): Observable<User> {
        console.log('get user');
        return this.accountService.getUser(id);
    }

    @Post('account')
    public postUser(@Body('email') email: string, @Body('password') password: string): Observable<User> {
        return this.accountService.registerUser(email, password);
    }
}
