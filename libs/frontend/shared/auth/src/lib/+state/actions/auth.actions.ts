import { CreateUserRequest, Credentials } from '@flashcards/common/types';
import { User } from '@flashcards/frontend/shared/types';
import { createAction, props } from '@ngrx/store';

const login = createAction('[Login Page] Login', props<{ credentials: Credentials }>());
const logout = createAction('[Logout] Logout');

const register = createAction('[Register Page] Register', props<{ user: CreateUserRequest }>());

const loginFail = createAction('[Auth API] Login Fail');
const registerFail = createAction('[Auth API] Register Fail');

const authenticationSuccess = createAction('[Auth API] Auth Success', props<{ user: User; token: string }>());

/* eslint-disable @typescript-eslint/naming-convention */
export const LoginPageActions = { login, logout };
export const RegisterPageActions = { register };
export const AuthApiActions = { authenticationSuccess, loginFail, registerFail };
