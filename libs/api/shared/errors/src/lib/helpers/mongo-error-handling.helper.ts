import { MongoError } from 'mongodb';
import * as mongoose from 'mongoose';
import { MongoException } from '../exceptions/mongo-exception';

export const getMongoException = (
    error: MongoError | mongoose.Error.ValidationError | Error
): MongoException | null => {
    if (error.name === 'MongoError') {
        const mongoError = error as MongoError;
        return new MongoException(mongoError.name, [], mongoError.code);
    }
    if (error.name === 'ValidationError') {
        const validationError = error as mongoose.Error.ValidationError;
        const keys = Object.keys(validationError.errors);
        const errors = keys.map((key: string) => validationError.errors[key].message.replace('Path ', ''));

        return new MongoException(error.name, errors);
    }

    return null;
};
