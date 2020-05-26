import { INTERNAL_SERVER_ERROR } from '@flashcards/api/shared/types';
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, InternalServerErrorException } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    public catch(exception: unknown, host: ArgumentsHost): void {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();

        const error =
            exception instanceof HttpException ? exception : new InternalServerErrorException(INTERNAL_SERVER_ERROR);

        response.status(error.getStatus()).json(error.getResponse());
    }
}
