import * as fromLoaderReducer from '../reducers/auth.reducer';
import { AuthSelectors } from './auth.selectors';

describe('AuthSelectors', () => {
    describe('selectUser', () => {
        test('should get that the left panel is reduced', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                user: { email: 'email' },
                token: 'token',
            };

            expect(AuthSelectors.selectUser.projector(state)).toBe(state.user);
        });
    });

    describe('selectIsUserLogged', () => {
        test('should be logged', () => {
            expect(AuthSelectors.selectIsUserLogged.projector({ email: 'email' })).toBeTruthy();
        });

        test('should not be logged', () => {
            expect(AuthSelectors.selectIsUserLogged.projector(null)).toBeFalsy();
        });
    });
});
