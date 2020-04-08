import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
    imports: [CommonModule],
    declarations: [AboutPageComponent],
    exports: [AboutPageComponent],
})
export class AboutModule {}
