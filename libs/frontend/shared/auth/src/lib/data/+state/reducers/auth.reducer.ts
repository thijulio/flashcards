import { User } from '@flashcards/frontend/shared/types';
import { Action, createReducer, on } from '@ngrx/store';
import { AuthApiActions, LoginPageActions } from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
    user: User;
    token: string;
}

export const initialState: AuthState = {
    user: null,
    token: null,
};

export const authReducer = createReducer(
    initialState,
    on(AuthApiActions.authenticationSuccess, (state: AuthState, { user, token }: { user: User; token: string }) => ({
        ...state,
        user,
        token,
    })),
    on(LoginPageActions.logout, () => ({
        user: null,
        token: null,
    }))
);

export function reducer(state: AuthState | undefined, action: Action): AuthState {
    return authReducer(state, action);
}
