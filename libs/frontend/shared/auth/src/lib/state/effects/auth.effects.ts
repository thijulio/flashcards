import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AuthService } from '../../data/services/auth.service';
import { AuthApiActions, LoginPageActions } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
    public login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoginPageActions.login),
            exhaustMap(action =>
                this.authService.login(action.credentials).pipe(
                    map(auth => AuthApiActions.loginSuccess({ user: auth.user, token: auth.accessToken })),
                    catchError(error => of(AuthApiActions.loginFail())),
                    // catchError(error => of(AuthApiActions.loginFailure({ error }))),
                ),
            ),
        ),
    );

    constructor(private actions$: Actions, private authService: AuthService) {}
}
