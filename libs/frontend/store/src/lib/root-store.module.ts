import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './state/reducers/root.reducer';

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
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        }),
    ],
})
export class RootStoreModule {}
