import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthRepository } from './data/repositories/auth.repository';
import { AuthService } from './data/services/auth.service';
import { AuthEffects } from './state/effects/auth.effects';
import * as fromAuth from './state/reducers/auth.reducer';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
        EffectsModule.forRoot([AuthEffects]),
    ],
    providers: [AuthService, AuthRepository],
})
export class AuthModule {}
