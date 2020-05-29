import { TestBed } from '@angular/core/testing';
import { CreateUserRequest, UserAuthResponse } from '@flashcards/common/types';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jest-marbles';
import { Observable } from 'rxjs';
import { AuthService } from '../../data/services/auth.service';
import * as fromAuthActions from '../actions/auth.actions';
import { AuthEffects } from './auth.effects';

const EMAIL = 'email@email.com';

describe('AuthEffects', () => {
    let effects: AuthEffects;
    let actions: Observable<any>;

    let authService;

    describe('AuthEffects', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    AuthEffects,
                    provideMockActions(() => actions),
                    { provide: AuthService, useValue: { login: jest.fn(), register: jest.fn() } },
                ],
            });

            effects = TestBed.inject(AuthEffects);
            authService = TestBed.inject(AuthService);
        });

        describe('login$', () => {
            const credentials = { email: EMAIL, password: 'password' };

            test('should login user', () => {
                const userAuthResponse: UserAuthResponse = {
                    user: { email: 'email@email.com' },
                    accessToken: 'token',
                } as any;

                (authService.login as jest.Mock).mockReturnValue(cold('a|', { a: userAuthResponse }));

                const action = fromAuthActions.LoginPageActions.login({ credentials });

                const completion = fromAuthActions.AuthApiActions.authenticationSuccess({
                    user: userAuthResponse.user,
                    token: userAuthResponse.accessToken,
                });

                actions = hot('--a-', { a: action });
                const expected = cold('--b', { b: completion });

                expect(effects.login$).toBeObservable(expected);

                expect(expected).toSatisfyOnFlush(() => {
                    expect(authService.login).toHaveBeenCalledWith(credentials);
                });
            });

            test('should handle error', () => {
                (authService.login as jest.Mock).mockReturnValue(
                    cold('1ms #', {}, { status: 500, message: 'Server Error' }),
                );

                const action = fromAuthActions.LoginPageActions.login({ credentials });

                const completion = fromAuthActions.AuthApiActions.loginFail();

                actions = hot('--a-', { a: action });
                const expected = cold('--b', { b: completion });

                expect(effects.login$).toBeObservable(expected);
            });
        });

        describe('register$', () => {
            const userAuthResponse: UserAuthResponse = {
                user: { email: EMAIL },
                accessToken: 'token',
            } as any;

            const createUserRequest: CreateUserRequest = {
                email: EMAIL,
            } as any;

            test('should register user', () => {
                (authService.register as jest.Mock).mockReturnValue(cold('a|', { a: userAuthResponse }));

                const action = fromAuthActions.RegisterPageActions.register({ user: createUserRequest });
                const completion = fromAuthActions.AuthApiActions.authenticationSuccess({
                    user: userAuthResponse.user,
                    token: userAuthResponse.accessToken,
                });

                actions = hot('--a-', { a: action });
                const expected = cold('--b', { b: completion });
                expect(effects.register$).toBeObservable(expected);

                expect(expected).toSatisfyOnFlush(() => {
                    expect(authService.register).toHaveBeenCalledWith(createUserRequest);
                });
            });

            test('should handle error', () => {
                (authService.register as jest.Mock).mockReturnValue(
                    cold('1ms #', {}, { status: 500, message: 'Server Error' }),
                );

                const action = fromAuthActions.RegisterPageActions.register({ user: createUserRequest });
                const completion = fromAuthActions.AuthApiActions.registerFail();

                actions = hot('--a-', { a: action });
                const expected = cold('--b', { b: completion });

                expect(effects.register$).toBeObservable(expected);
            });
        });
    });
});
