import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [{ path: '', component: AboutPageComponent }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [AboutPageComponent],
})
export class AboutModule {}
