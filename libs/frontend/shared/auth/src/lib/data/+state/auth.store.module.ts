import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LocalStorageService, storageMetaReducer } from '@flashcards/frontend/shared/data';
import { EffectsModule } from '@ngrx/effects';
import { Action, ActionReducer, StoreModule } from '@ngrx/store';
import { AuthEffects } from './effects/auth.effects';
import * as fromAuth from './reducers/auth.reducer';
import { AUTH_CONFIG_TOKEN, AUTH_LOCAL_STORAGE_KEY, AUTH_STORAGE_KEYS } from './tokens/auth.tokens';

export function getAuthConfig(
    saveKeys: string[],
    localStorageKey: string,
    storageService: LocalStorageService
): {
    metaReducers: ((reducer: ActionReducer<unknown, Action>) => (state: unknown, action: Action) => unknown)[];
} {
    return { metaReducers: [storageMetaReducer(saveKeys, localStorageKey, storageService)] };
}

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer, AUTH_CONFIG_TOKEN),
        EffectsModule.forFeature([AuthEffects]),
    ],
    providers: [
        { provide: AUTH_LOCAL_STORAGE_KEY, useValue: '__auth_storage__' },
        { provide: AUTH_STORAGE_KEYS, useValue: ['user', 'token'] },
        {
            provide: AUTH_CONFIG_TOKEN,
            deps: [AUTH_STORAGE_KEYS, AUTH_LOCAL_STORAGE_KEY, LocalStorageService],
            useFactory: getAuthConfig,
        },
    ],
})
export class AuthStateModule {}
