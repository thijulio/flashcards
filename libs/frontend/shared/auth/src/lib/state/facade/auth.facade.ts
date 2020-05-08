import { Injectable } from '@angular/core';
import { Credentials } from '@flashcards/common/types';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { LoginPageActions } from '../actions/auth.actions';
import { AuthState } from '../reducers/auth.reducer';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
    public isUseLoggedIn$: Observable<boolean> = of(true); // this.store.pipe(select(AuthSelectors.selectIsUserLogged)); // TODO: FIx the store

    constructor(private store: Store<AuthState>) {}

    public login(credentials: Credentials): void {
        this.store.dispatch(LoginPageActions.login({ credentials }));
    }

    public logout(): void {
        this.store.dispatch(LoginPageActions.logout());
    }
}
