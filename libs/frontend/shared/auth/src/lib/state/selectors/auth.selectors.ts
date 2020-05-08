import { createSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';

export interface AppState {
    auth: AuthState;
}

const selectAuthState = (state: AppState) => {
    return state.auth;
};

const selectUser = createSelector(selectAuthState, (state: AuthState) => state.user);

const selectIsUserLogged = createSelector(selectUser, (user: any) => !!user);

// tslint:disable-next-line: naming-convention
export const AuthSelectors = { selectIsUserLogged };
