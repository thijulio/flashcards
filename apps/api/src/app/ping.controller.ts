import { AuthService } from '@flashcards/api/shared/auth';
import { UserService } from '@flashcards/api/shared/users';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Ping')
@Controller()
export class PingController {
    constructor(private readonly userService: UserService, private readonly authService: AuthService) {}

    @Get('ping')
    public test(): any {
        return 'pong';
    }
}
