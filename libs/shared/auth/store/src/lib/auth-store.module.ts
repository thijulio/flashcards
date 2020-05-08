import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './effects/auth.effects';
import * as fromAuth from './reducers/auth.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
        EffectsModule.forRoot([AuthEffects]),
    ],
})
export class AuthStoreModule {}
