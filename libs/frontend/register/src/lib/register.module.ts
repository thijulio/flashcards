import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [{ path: '', component: RegisterPageComponent }];
// const routes: Routes = [{ path: '', component: LoginPageComponent }];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
    declarations: [RegisterPageComponent, LoginPageComponent],
})
export class RegisterModule {}
