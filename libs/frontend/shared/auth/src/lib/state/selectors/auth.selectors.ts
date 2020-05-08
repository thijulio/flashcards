import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';

const selectAuthState = createFeatureSelector<fromAuth.AuthState>(fromAuth.authFeatureKey);

const selectUser = createSelector(selectAuthState, (state: fromAuth.AuthState) => state.user);

const selectIsUserLogged = createSelector(selectUser, (user: any) => !!user);

// tslint:disable-next-line: naming-convention
export const AuthSelectors = { selectIsUserLogged };
