import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
    imports: [CommonModule, StoreModule.forRoot({})],
})
export class FrontendStoreProdModule {}
