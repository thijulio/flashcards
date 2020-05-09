import { CreateUserRequest, Credentials } from '@flashcards/common/types';
import { User } from '@flashcards/frontend/shared/types';
import { createAction, props } from '@ngrx/store';

const login = createAction('[Login Page] Login', props<{ credentials: Credentials }>());
const logout = createAction('[Logout] Logout');

const register = createAction('[Register Page] Register', props<{ user: CreateUserRequest }>());

const loginSuccess = createAction('[Auth API] Login Success', props<{ user: User; token: string }>());
const loginFail = createAction('[Auth API] Login Fail');
const registerSuccess = createAction('[Auth API] Register Success', props<{ user: User; token: string }>());
const registerFail = createAction('[Auth API] Register Fail');

// tslint:disable: naming-convention
export const LoginPageActions = { login, logout };
export const RegisterPageActions = { register };
export const AuthApiActions = { loginSuccess, loginFail, registerSuccess, registerFail };
