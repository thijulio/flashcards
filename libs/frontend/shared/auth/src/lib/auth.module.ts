import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthStateModule } from './data/+state/auth.store.module';

@NgModule({
    imports: [CommonModule, AuthStateModule],
})
export class AuthModule {}
