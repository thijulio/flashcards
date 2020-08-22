import { UnauthorizedException } from '@nestjs/common';
import { ContextIdFactory } from '@nestjs/core';
import { Test } from '@nestjs/testing';
import { AuthService } from '../data/auth.service';
import { LocalStrategy } from './local.strategy';

describe('LocalStrategy', () => {
    const EMAIL = 'email@email.com';

    let localStrategy: LocalStrategy;
    let authService: AuthService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                LocalStrategy,
                {
                    provide: AuthService,
                    useValue: {
                        validateUser: jest.fn(),
                    },
                },
            ],
        }).compile();

        localStrategy = module.get<LocalStrategy>(LocalStrategy);
        authService = module.get<AuthService>(AuthService);

        const contextId = ContextIdFactory.create();
        jest.spyOn(ContextIdFactory, 'getByRequest').mockImplementation(() => contextId);
    });

    describe('validate', () => {
        test('should validate and returns the user based on JWT payload', async () => {
            const user = { email: EMAIL };

            (authService.validateUser as jest.Mock).mockResolvedValue(user);

            const result = await localStrategy.validate((null as unknown) as Request, EMAIL, 'jjj');

            expect(result).toEqual(user);
        });

        test('throws an unauthorized exception as user cannot be found', () => {
            (authService.validateUser as jest.Mock).mockResolvedValue(null);

            void expect(localStrategy.validate((null as unknown) as Request, EMAIL, 'jjj')).rejects.toThrow(
                UnauthorizedException
            );
        });
    });
});
