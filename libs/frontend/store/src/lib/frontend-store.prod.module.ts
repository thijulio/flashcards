import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FrontendSharedAuthModule } from '@flashcards/frontend/shared/auth';
import { StoreModule } from '@ngrx/store';

@NgModule({
    imports: [CommonModule, StoreModule.forRoot({}), FrontendSharedAuthModule],
})
export class FrontendStoreProdModule {}
