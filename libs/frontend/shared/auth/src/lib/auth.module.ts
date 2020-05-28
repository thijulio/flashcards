import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LocalStorageService, storageMetaReducer } from '@flashcards/frontend/shared/data';
import { EffectsModule } from '@ngrx/effects';
import { Action, ActionReducer, StoreModule } from '@ngrx/store';
import { AuthEffects } from './+state/effects/auth.effects';
import * as fromAuth from './+state/reducers/auth.reducer';
import { AuthRepository } from './data/repositories/auth.repository';
import { AuthService } from './data/services/auth.service';
import { AUTH_CONFIG_TOKEN, AUTH_LOCAL_STORAGE_KEY, AUTH_STORAGE_KEYS } from './types/interfaces/auth.tokens';

export function getAuthConfig(
    saveKeys: string[],
    localStorageKey: string,
    storageService: LocalStorageService,
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
        EffectsModule.forRoot([AuthEffects]),
    ],
    providers: [
        AuthService,
        AuthRepository,
        { provide: AUTH_LOCAL_STORAGE_KEY, useValue: '__auth_storage__' },
        { provide: AUTH_STORAGE_KEYS, useValue: ['user', 'token'] },
        {
            provide: AUTH_CONFIG_TOKEN,
            deps: [AUTH_STORAGE_KEYS, AUTH_LOCAL_STORAGE_KEY, LocalStorageService],
            useFactory: getAuthConfig,
        },
    ],
})
export class AuthModule {}
