import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserRepository, UserService } from '@flashcards/frontend/shared/data';
import { MyAccountPageComponent } from './my-account-page/my-account-page.component';
const routes: Routes = [{ path: '', component: MyAccountPageComponent }];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],

    declarations: [MyAccountPageComponent],
    providers: [UserService, UserRepository],
})
export class MyAccountModule {}
