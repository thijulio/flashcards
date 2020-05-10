import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthModule } from '@flashcards/frontend/shared/auth';
import { StoreModule } from '@ngrx/store';
import { HeaderModule } from './components/header-toolbar/header.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LeftPanelModule } from './components/left-panel-toolbar/left-panel.module';
import { RightPanelModule } from './components/right-panel-toolbar/right-panel.module';
import * as fromLayout from './state/reducers/layout.reducer';

@NgModule({
    imports: [
        CommonModule,
        HeaderModule,
        LeftPanelModule,
        RightPanelModule,
        MatSidenavModule,
        FlexLayoutModule,
        MatIconModule,
        MatToolbarModule,
        StoreModule.forFeature(fromLayout.layoutFeatureKey, fromLayout.reducer),
        AuthModule,
    ],
    declarations: [LayoutComponent],
    exports: [LayoutComponent],
})
export class AppLayoutModule {}
