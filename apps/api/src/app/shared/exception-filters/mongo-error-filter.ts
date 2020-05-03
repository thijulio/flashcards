import {
    ArgumentsHost,
    BadRequestException,
    Catch,
    ExceptionFilter,
    HttpStatus,
    InternalServerErrorException,
} from '@nestjs/common';
import { INTERNAL_SERVER_ERROR, USER_ALREADY_EXISTS } from '../errors/constants/exceptions.const';
import { MongoException } from '../errors/exceptions/mongo-exception';

@Catch(MongoException)
export class MongoErrorFilter implements ExceptionFilter {
    public catch(exception: MongoException, host: ArgumentsHost): void {
        const response = host.switchToHttp().getResponse();

        if (exception.code === 11000) {
            return response
                .status(HttpStatus.BAD_REQUEST)
                .json(new BadRequestException(USER_ALREADY_EXISTS).getResponse());
        }

        if (exception.errors) {
            return response
                .status(HttpStatus.BAD_REQUEST)
                .json(new BadRequestException(exception.errors).getResponse());
        }

        if (exception.name === 'ValidationError') {
            console.log('validationError: ', (<any>exception).errors);
        }

        response
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .json(new InternalServerErrorException(INTERNAL_SERVER_ERROR).getResponse());
    }
}
