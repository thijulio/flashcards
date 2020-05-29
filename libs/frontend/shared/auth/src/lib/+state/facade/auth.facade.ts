import { Injectable } from '@angular/core';
import { CreateUserRequest, Credentials } from '@flashcards/common/types';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginPageActions, RegisterPageActions } from '../actions/auth.actions';
import { AuthState } from '../reducers/auth.reducer';
import { AuthSelectors } from '../selectors/auth.selectors';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
    public isUseLoggedIn$: Observable<boolean> = this.store.pipe(select(AuthSelectors.selectIsUserLogged));
    public accessToken$: Observable<string> = this.store.pipe(select(AuthSelectors.selectToken));

    constructor(private store: Store<AuthState>) {}

    public login(credentials: Credentials): void {
        this.store.dispatch(LoginPageActions.login({ credentials }));
    }

    public register(user: CreateUserRequest): void {
        this.store.dispatch(RegisterPageActions.register({ user }));
    }

    public logout(): void {
        this.store.dispatch(LoginPageActions.logout());
    }
}
