import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RootStoreStateModule } from './data/+state/root-store.state.module';

@NgModule({
    imports: [CommonModule, RootStoreStateModule],
})
export class RootStoreModule {}
