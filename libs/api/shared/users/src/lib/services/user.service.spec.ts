import { CreateUserRequest } from '@flashcards/common/types';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UserModel } from '../interfaces/user.interface';
import { UserService } from './user.service';

const EMAIL = 'email@email.com';

describe('UserService', () => {
    let service: UserService;
    let userModel: UserModel;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                {
                    provide: getModelToken('User'),
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    useValue: jest.fn().mockImplementation((a1: any) => {
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                        return Object.assign(a1, {
                            save: () => Promise.resolve(a1),
                        });
                    }),
                },
            ],
        }).compile();

        service = module.get<UserService>(UserService);
        userModel = module.get<UserModel>(getModelToken('User'));
        userModel.findOne = jest.fn();
        userModel.findByCredentials = jest.fn();
    });

    test('should be defined', () => {
        expect(service).toBeDefined();
    });

    test('should find user by email', () => {
        void service.findByEmail(EMAIL);
        expect(userModel.findOne).toHaveBeenCalledWith({ email: EMAIL });
    });

    test('should find user by credentials', () => {
        const password = 'password';
        void service.findByCredentials(EMAIL, password);
        expect(userModel.findByCredentials).toHaveBeenCalledWith(EMAIL, password);
    });

    test('should create a user', async () => {
        const user = { email: EMAIL } as CreateUserRequest;

        const createdUser = await service.create(user);
        expect(createdUser).toEqual(user);
    });
});
