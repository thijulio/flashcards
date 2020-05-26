import * as fromAuthActions from '../actions/auth.actions';
import * as fromAuthReducer from './auth.reducer';

describe('AuthReducer', () => {
    test('should sucessfully login', () => {
        const props = { user: {} as any, token: '' };

        const action = fromAuthActions.AuthApiActions.loginSuccess(props);
        const state = {
            ...fromAuthReducer.initialState,
            user: null,
            token: null,
        };

        const result = fromAuthReducer.authReducer(state, action);

        expect(result).toEqual({
            ...state,
            user: props.user,
            token: props.token,
        });
    });

    test('should sucessfully register', () => {
        const props = { user: {} as any, token: '' };

        const action = fromAuthActions.AuthApiActions.registerSuccess(props);
        const state = {
            ...fromAuthReducer.initialState,
            user: null,
            token: null,
        };

        const result = fromAuthReducer.authReducer(state, action);

        expect(result).toEqual({
            ...state,
            user: props.user,
            token: props.token,
        });
    });

    test('should logout', () => {
        const action = fromAuthActions.LoginPageActions.logout();
        const state = {
            ...fromAuthReducer.initialState,
            user: { email: 'email' },
            token: 'token',
        };

        const result = fromAuthReducer.authReducer(state, action);

        expect(result).toEqual({
            ...state,
            user: null,
            token: null,
        });
    });
});
