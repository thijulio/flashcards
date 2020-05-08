import { Action, createReducer, on } from '@ngrx/store';
import { AuthApiActions, LoginPageActions } from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
    user: any;
    token: string;
}

export const initialState: AuthState = {
    user: null,
    token: null,
};

const authReducer = createReducer(
    initialState,
    on(AuthApiActions.loginSuccess, (state: AuthState, { user, token }: { user: any; token: string }) => ({
        ...state,
        user,
        token,
    })),
    on(LoginPageActions.logout, (_state: AuthState) => ({
        user: null,
        token: null,
    })),
);

export function reducer(state: AuthState | undefined, action: Action): AuthState {
    return authReducer(state, action);
}
