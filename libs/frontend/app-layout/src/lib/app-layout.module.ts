import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '@flashcards/frontend/shared/auth';
import { StoreModule } from '@ngrx/store';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutModule } from './components/layout/layout.module';
import * as fromLayout from './state/reducers/layout.reducer';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        StoreModule.forFeature(fromLayout.layoutFeatureKey, fromLayout.reducer),
        AuthModule,
    ],
    exports: [LayoutComponent],
})
export class AppLayoutModule {}
