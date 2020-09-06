import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthStateModule } from '@flashcards/frontend/shared/auth';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutModule } from './components/layout/layout.module';
import { AppLayoutStateModule } from './data/+state/app-layout.state.module';

@NgModule({
    imports: [CommonModule, LayoutModule, AuthStateModule, AppLayoutStateModule],
    exports: [LayoutComponent],
})
export class AppLayoutModule {}
