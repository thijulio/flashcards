import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UserModel } from '../interfaces/user.interface';
import { UserService } from './user.service';

const EMAIL: string = 'email@email.com';

describe('UserService', () => {
    let service: UserService;
    let userModel;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                {
                    provide: getModelToken('User'),
                    useValue: jest.fn().mockImplementation((a1: any) => {
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

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should find user by email', () => {
        service.findByEmail(EMAIL);
        expect(userModel.findOne).toHaveBeenCalledWith({ email: EMAIL });
    });

    it('should find user by credentials', () => {
        const password = 'password';
        service.findByCredentials(EMAIL, password);
        expect(userModel.findByCredentials).toHaveBeenCalledWith(EMAIL, password);
    });

    it('should create a user', async () => {
        const user = { id: 'id', email: EMAIL };

        const createdUser = await service.create(user as any);
        expect(createdUser).toEqual(user);
    });
});
