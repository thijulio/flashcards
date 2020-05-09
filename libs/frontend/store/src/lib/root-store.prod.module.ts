import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '@flashcards/frontend/shared/auth';
import { StoreModule } from '@ngrx/store';

@NgModule({
    imports: [CommonModule, StoreModule.forRoot({}), AuthModule],
})
export class FrontendStoreProdModule {}
