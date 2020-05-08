import { Credentials } from '@flashcards/api-interfaces';
import { createAction, props } from '@ngrx/store';

const loginSuccess = createAction('[Login API] Login Success', props<{ user: any; token: string }>());
const loginFail = createAction('[Login API] Login Fail');

const login = createAction('[Login Page] Login', props<{ credentials: Credentials }>());
const logout = createAction('[Logout] Logout');

// tslint:disable: naming-convention
export const LoginPageActions = { login, logout };
export const AuthApiActions = { loginSuccess, loginFail };
