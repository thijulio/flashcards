import { UserService } from '@flashcards/api/shared/users';
import { UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { JwtStrategy } from './jwt.strategy';

describe('JwtStrategy', () => {
    const mockUserService = () => ({
        findByEmail: jest.fn(),
    });
    const EMAIL = 'email@email.com';

    let jwtStrategy: JwtStrategy;
    let userService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                JwtStrategy,
                { provide: UserService, useFactory: mockUserService },
                { provide: ConfigService, useValue: { get: jest.fn().mockResolvedValue('XXX') } },
            ],
        }).compile();

        jwtStrategy = module.get<JwtStrategy>(JwtStrategy);
        userService = module.get<UserService>(UserService);
    });

    describe('validate', () => {
        test('should validate and returns the user based on JWT payload', async () => {
            const user = { email: EMAIL };

            (userService.findByEmail as jest.Mock).mockResolvedValue(user);

            const result = await jwtStrategy.validate({ sub: 'sub', email: EMAIL });

            expect(userService.findByEmail).toHaveBeenCalledWith(EMAIL);
            expect(result).toEqual(user);
        });

        test('throws an unauthorized exception as user cannot be found', () => {
            (userService.findByEmail as jest.Mock).mockResolvedValue(null);

            expect(jwtStrategy.validate({ sub: 'sub', email: EMAIL })).rejects.toThrow(UnauthorizedException);
        });
    });
});
