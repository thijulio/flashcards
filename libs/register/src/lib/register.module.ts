import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([{ path: 'register', pathMatch: 'full', component: RegisterPageComponent }]),
    ],
    declarations: [RegisterPageComponent],
})
export class RegisterModule {}
