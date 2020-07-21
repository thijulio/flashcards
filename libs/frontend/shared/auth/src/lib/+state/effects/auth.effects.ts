import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserRequest, Credentials, UserAuthResponse } from '@flashcards/common/types';
import { ObservableAction } from '@flashcards/frontend/shared/types';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AuthService } from '../../data/services/auth.service';
import { AuthApiActions, LoginPageActions, RegisterPageActions } from '../actions/auth.actions';

const handleAuthentication = (auth: UserAuthResponse) => {
    return AuthApiActions.authenticationSuccess({ user: auth.user, token: auth.accessToken });
};

@Injectable()
export class AuthEffects {
    public login$: ObservableAction<typeof AuthApiActions, 'authenticationSuccess' | 'loginFail'> = createEffect(() =>
        this.actions$.pipe(
            ofType(LoginPageActions.login),
            exhaustMap(({ credentials }: { credentials: Credentials }) =>
                this.authService.login(credentials).pipe(
                    map((auth: UserAuthResponse) => handleAuthentication(auth)),
                    catchError(({ error }: HttpErrorResponse) => {
                        console.log('Log: ', error); // TODO: Creater a logger service
                        return of(AuthApiActions.loginFail());
                    })
                )
            )
        )
    );

    public register$: ObservableAction<typeof AuthApiActions, 'authenticationSuccess' | 'registerFail'> = createEffect(
        () =>
            this.actions$.pipe(
                ofType(RegisterPageActions.register),
                exhaustMap(({ user }: { user: CreateUserRequest }) =>
                    this.authService.register(user).pipe(
                        map((auth: UserAuthResponse) => handleAuthentication(auth)),
                        catchError(({ error }: HttpErrorResponse) => {
                            console.log('Log: ', error); // TODO: Creater a logger service
                            return of(AuthApiActions.registerFail());
                        })
                    )
                )
            )
    );

    constructor(private actions$: Actions, private authService: AuthService) {}
}
