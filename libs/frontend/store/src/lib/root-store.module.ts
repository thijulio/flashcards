import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreStateModule } from './data/+state/root-store.state.module';

@NgModule({
    imports: [
        CommonModule,
        RootStoreStateModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        }),
    ],
})
export class RootStoreModule {}
