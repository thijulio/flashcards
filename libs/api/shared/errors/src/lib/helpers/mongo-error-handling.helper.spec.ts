import { MongoError } from 'mongodb';
import * as mongoose from 'mongoose';
import { getMongoException } from './mongo-error-handling.helper';

describe('MongoErrorFilter', () => {
    describe('getMongoException', () => {
        test('should map a MongoError to a custom MongoException', () => {
            const error = {
                name: 'MongoError',
                code: 1000,
            } as MongoError;

            const exception = getMongoException(error);

            expect(exception?.name).toEqual(error.name);
            expect(exception?.code).toEqual(error.code);
        });

        test('should map a ValidationError to a custom MongoException', () => {
            const error = ({
                name: 'ValidationError',
                errors: { email: { message: 'Path invalid email' }, name: { message: 'Path invalid name' } },
            } as unknown) as mongoose.Error.ValidationError;

            const exception = getMongoException(error);

            expect(exception?.name).toEqual(error.name);
            expect(exception?.errors[0]).toEqual('invalid email');
            expect(exception?.errors[1]).toEqual('invalid name');
            expect(exception?.errors.length).toBe(2);
            expect(exception?.code).toBeUndefined();
        });

        test('should map to null when its not a mongo exception', () => {
            const error = {
                name: 'RandomException',
            };

            const exception = getMongoException((error as unknown) as Error);

            expect(exception).toBeNull();
        });
    });
});
