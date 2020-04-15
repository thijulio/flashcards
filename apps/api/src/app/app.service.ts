import { Message } from '@flashcards/api-interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    public getData(): Message {
        return { message: 'Welcome to api!' };
    }
}
