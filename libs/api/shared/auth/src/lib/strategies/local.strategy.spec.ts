import { UnauthorizedException } from '@nestjs/common';
import { ContextIdFactory } from '@nestjs/core';
import { Test } from '@nestjs/testing';
import { AuthService } from '../data/auth.service';
import { LocalStrategy } from './local.strategy';

describe('LocalStrategy', () => {
    const mockAuthService = () => ({
        validateUser: jest.fn(),
    });
    const EMAIL = 'email@email.com';

    let localStrategy: LocalStrategy;
    let authService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [LocalStrategy, { provide: AuthService, useFactory: mockAuthService }],
        }).compile();

        localStrategy = module.get<LocalStrategy>(LocalStrategy);
        authService = module.get<AuthService>(AuthService);

        const contextId = ContextIdFactory.create();
        jest.spyOn(ContextIdFactory, 'getByRequest').mockImplementation(() => contextId);
    });

    describe('validate', () => {
        test('should validate and returns the user based on JWT payload', async () => {
            const user = { email: EMAIL };

            authService.validateUser.mockResolvedValue(user);

            const result = await localStrategy.validate(null, EMAIL, 'jjj');

            expect(result).toEqual(user);
        });

        test('throws an unauthorized exception as user cannot be found', () => {
            authService.validateUser.mockResolvedValue(null);

            expect(localStrategy.validate(null, EMAIL, 'jjj')).rejects.toThrow(UnauthorizedException);
        });
    });
});
