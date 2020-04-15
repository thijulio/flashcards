import { Message } from '@flashcards/api-interfaces';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('hello')
    public getData(): Message {
        return this.appService.getData();
    }
}
