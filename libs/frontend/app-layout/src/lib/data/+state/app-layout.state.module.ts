import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromLayout from './reducers/layout.reducer';

@NgModule({
    imports: [CommonModule, StoreModule.forFeature(fromLayout.layoutFeatureKey, fromLayout.reducer)],
})
export class AppLayoutStateModule {}
