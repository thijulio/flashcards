import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FrontendSharedAuthModule } from '@flashcards/frontend/shared/auth';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        }),
        FrontendSharedAuthModule,
    ],
})
export class FrontendStoreModule {}
