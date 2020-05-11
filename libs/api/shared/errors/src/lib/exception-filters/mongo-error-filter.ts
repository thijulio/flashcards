import { INTERNAL_SERVER_ERROR, USER_ALREADY_EXISTS } from '@flashcards/api/shared/types';
import {
    ArgumentsHost,
    BadRequestException,
    Catch,
    ExceptionFilter,
    HttpStatus,
    InternalServerErrorException,
} from '@nestjs/common';
import { MongoException } from '../exceptions/mongo-exception';

@Catch(MongoException)
export class MongoErrorFilter implements ExceptionFilter {
    public catch(exception: MongoException, host: ArgumentsHost): any {
        const response = host.switchToHttp().getResponse();

        if (exception.code === 11000) {
            return response
                .status(HttpStatus.BAD_REQUEST)
                .json(new BadRequestException(USER_ALREADY_EXISTS).getResponse());
        }

        if (exception.errors && exception.errors.length > 0) {
            return response
                .status(HttpStatus.BAD_REQUEST)
                .json(new BadRequestException(exception.errors).getResponse());
        }

        return response
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .json(new InternalServerErrorException(INTERNAL_SERVER_ERROR).getResponse());
    }
}
