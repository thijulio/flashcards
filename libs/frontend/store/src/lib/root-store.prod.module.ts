import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocalStorageService, storageMetaReducer } from '@flashcards/frontend/shared/data';
import { MetaReducer, META_REDUCERS, StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './+state/reducers/root.reducer';
import { ROOT_LOCAL_STORAGE_KEY, ROOT_STORAGE_KEYS } from './interfaces/root-store.tokens';

export function getMetaReducers(
    saveKeys: string[],
    localStorageKey: string,
    storageService: LocalStorageService,
): MetaReducer<any> {
    return storageMetaReducer(saveKeys, localStorageKey, storageService);
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
    ],
    providers: [
        { provide: ROOT_STORAGE_KEYS, useValue: ['layout'] },
        { provide: ROOT_LOCAL_STORAGE_KEY, useValue: '__app_storage__' },
        {
            provide: META_REDUCERS,
            multi: true,
            deps: [ROOT_STORAGE_KEYS, ROOT_LOCAL_STORAGE_KEY, LocalStorageService],
            useFactory: getMetaReducers,
        },
    ],
})
export class RootStoreModule {}
