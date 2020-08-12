import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '@flashcards/frontend/shared/auth';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LayoutEffects } from './+state/effects/layout.effects';
import * as fromLayout from './+state/reducers/layout.reducer';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutModule } from './components/layout/layout.module';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        StoreModule.forFeature(fromLayout.layoutFeatureKey, fromLayout.reducer),
        EffectsModule.forRoot([LayoutEffects]),
        AuthModule,
    ],
    exports: [LayoutComponent],
})
export class AppLayoutModule {}
