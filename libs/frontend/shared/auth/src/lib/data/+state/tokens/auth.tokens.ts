import { InjectionToken } from '@angular/core';
import { StoreConfig } from '@ngrx/store';
import * as fromReducer from '../../+state/reducers/auth.reducer';

export const AUTH_STORAGE_KEYS = new InjectionToken<keyof fromReducer.AuthState[]>('authStorageKeys');
export const AUTH_LOCAL_STORAGE_KEY = new InjectionToken<string[]>('authStorage');
export const AUTH_CONFIG_TOKEN = new InjectionToken<StoreConfig<fromReducer.AuthState>>('AuthConfigToken');
