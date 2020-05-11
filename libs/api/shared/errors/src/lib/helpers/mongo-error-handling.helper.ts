import { MongoException } from '../exceptions/mongo-exception';

export const getMongoException = (error: any) => {
    if (error.name === 'MongoError') {
        return new MongoException(error.name, [error.error], error.code);
    }
    if (error.name === 'ValidationError') {
        const keys = Object.keys(error.errors);
        const errors = keys.map((key: string) => error.errors[key].message.replace('Path ', ''));

        return new MongoException(error.name, errors);
    }

    return null;
};
