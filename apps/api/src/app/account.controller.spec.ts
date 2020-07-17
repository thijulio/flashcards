import { AuthService } from '@flashcards/api/shared/auth';
import { MongoException } from '@flashcards/api/shared/errors';
import { UserService } from '@flashcards/api/shared/users';
import { Test, TestingModule } from '@nestjs/testing';
import { MongoError } from 'mongodb';
import { AccountController } from './account.controller';

describe('AccountController', () => {
    let module: TestingModule;

    const ACCESS_TOKEN: string = 'accessToken';
    const EMAIL: string = 'email@email.com';

    let accountController: AccountController;

    let userService: UserService;
    let authService: AuthService;

    beforeEach(async () => {
        module = await Test.createTestingModule({
            controllers: [AccountController],
            providers: [
                { provide: UserService, useValue: { create: jest.fn() } },
                { provide: AuthService, useValue: { login: jest.fn() } },
            ],
        }).compile();

        accountController = module.get<AccountController>(AccountController);

        authService = module.get<AuthService>(AuthService);
        (authService.login as jest.Mock).mockResolvedValue(ACCESS_TOKEN);

        userService = module.get<UserService>(UserService);
    });

    test('should be defined', () => {
        expect(accountController).toBeDefined();
    });

    describe('login', () => {
        test('should login user', async () => {
            const request = { user: { email: EMAIL } };
            const response = await accountController.login(request);

            expect(response).toEqual({
                user: request.user,
                accessToken: ACCESS_TOKEN,
            });
        });
    });

    describe('profile', () => {
        test('should get the user profile', () => {
            const request = { user: { email: EMAIL } };
            const profile = accountController.getProfile(request);

            expect(profile).toEqual(request.user);
        });
    });

    describe('account', () => {
        test('should create user', async () => {
            const user = { email: EMAIL } as any;

            (userService.create as jest.Mock).mockReturnValue(user);

            const response = await accountController.createUser(user);

            expect(authService.login).toHaveBeenCalled();
            expect(response).toEqual({
                user,
                accessToken: ACCESS_TOKEN,
            });
        });

        test('should throw a mongoException', async () => {
            expect.assertions(1);

            (userService.create as jest.Mock).mockImplementation(() => {
                throw new MongoError('MongoError');
            });

            try {
                const user = { email: EMAIL } as any;
                await accountController.createUser(user);
            } catch (e) {
                expect(e instanceof MongoException).toBeTruthy();
            }
        });

        test('should throw a non mongo exception', async () => {
            expect.assertions(2);

            (userService.create as jest.Mock).mockImplementation(() => {
                throw new Error('error');
            });

            try {
                const user = { email: EMAIL } as any;
                await accountController.createUser(user);
            } catch (e) {
                expect(e instanceof MongoException).toBeFalsy();
                expect(e instanceof Error).toBeTruthy();
            }
        });
    });
});
