import { INTERNAL_SERVER_ERROR, USER_ALREADY_EXISTS } from '@flashcards/api/shared/types';
import { MongoException } from '../exceptions/mongo-exception';
import { MongoErrorFilter } from './mongo-error-filter';

const mockContext: any = {
    switchToHttp: () => ({
        getResponse: () => {
            return {
                status: jest.fn().mockImplementation(() => {
                    return {
                        json: jest.fn().mockImplementation((res: any) => res),
                    };
                }),
            };
        },
    }),
};

describe('MongoErrorFilter', () => {
    describe('catch', () => {
        test('should handle user already exists error', () => {
            const ex = new MongoException('exception', [], 11000);
            const res = new MongoErrorFilter().catch(ex, mockContext);
            expect(res.message).toEqual(USER_ALREADY_EXISTS);
            expect(res.statusCode).toEqual(400);
        });

        test('should handle list of errors', async () => {
            const ex = new MongoException('exception', ['error1', 'error2']);
            const res = new MongoErrorFilter().catch(ex, mockContext);
            expect(res.message).toEqual(['error1', 'error2']);
            expect(res.statusCode).toEqual(400);
        });

        test('should handle internal server error', async () => {
            const ex = new MongoException('exception', []);
            const res = new MongoErrorFilter().catch(ex, mockContext);
            expect(res.message).toEqual(INTERNAL_SERVER_ERROR);
            expect(res.statusCode).toEqual(500);
        });
    });
});
