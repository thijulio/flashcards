import { User, UserService } from '@flashcards/api/shared/users';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
    const EMAIL = 'email@email.com';

    let service: AuthService;
    let jwtService: JwtService;
    let userService: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AuthService,
                { provide: JwtService, useValue: { sign: jest.fn() } },
                { provide: UserService, useValue: { findByCredentials: jest.fn() } },
            ],
        }).compile();

        service = module.get<AuthService>(AuthService);

        jwtService = module.get<JwtService>(JwtService);
        userService = module.get<UserService>(UserService);
    });

    test('should be defined', () => {
        expect(service).toBeDefined();
    });

    test('should get user validation by credentials', () => {
        const password = 'password';
        void service.validateUser(EMAIL, password);

        expect(userService.findByCredentials).toHaveBeenCalledWith(EMAIL, password);
    });

    test('should get jwt token', () => {
        const sub = 'id';
        void service.login({ email: EMAIL, _id: sub } as User);

        expect(jwtService.sign).toHaveBeenCalledWith({ sub, email: EMAIL });
    });
});
