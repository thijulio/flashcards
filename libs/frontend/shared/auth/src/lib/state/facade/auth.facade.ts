import { Injectable } from '@angular/core';
import { Credentials } from '@flashcards/common/types';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginPageActions } from '../actions/auth.actions';
import { AuthState } from '../reducers/auth.reducer';
import { AuthSelectors } from '../selectors/auth.selectors';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
    public isUseLoggedIn$: Observable<boolean> = this.store.pipe(select(AuthSelectors.selectIsUserLogged));

    constructor(private store: Store<AuthState>) {}

    public login(credentials: Credentials): void {
        this.store.dispatch(LoginPageActions.login({ credentials }));
    }

    public logout(): void {
        this.store.dispatch(LoginPageActions.logout());
    }
}
