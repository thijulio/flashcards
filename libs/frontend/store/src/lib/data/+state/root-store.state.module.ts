import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocalStorageService, storageMetaReducer } from '@flashcards/frontend/shared/data';
import { EffectsModule } from '@ngrx/effects';
import { MetaReducer, StoreModule, USER_PROVIDED_META_REDUCERS } from '@ngrx/store';
import { ROOT_REDUCERS } from './reducers/root.reducer';
import { ROOT_LOCAL_STORAGE_KEY, ROOT_STORAGE_KEYS } from './tokens/root-store.tokens';

export function getMetaReducers(
    saveKeys: string[],
    localStorageKey: string,
    storageService: LocalStorageService
): MetaReducer<unknown>[] {
    return [storageMetaReducer(saveKeys, localStorageKey, storageService)];
}

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(ROOT_REDUCERS, {
            runtimeChecks: {
                strictActionImmutability: true,
                strictActionSerializability: true,
                strictStateImmutability: true,
                strictStateSerializability: true,
            },
        }),
        EffectsModule.forRoot(),
    ],
    providers: [
        { provide: ROOT_STORAGE_KEYS, useValue: ['loader'] },
        { provide: ROOT_LOCAL_STORAGE_KEY, useValue: '__app_storage__' },
        {
            provide: USER_PROVIDED_META_REDUCERS,
            deps: [ROOT_STORAGE_KEYS, ROOT_LOCAL_STORAGE_KEY, LocalStorageService],
            useFactory: getMetaReducers,
        },
    ],
})
export class RootStoreStateModule {}
