import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../material.module';
import { HeaderToolbarComponent } from './header-toolbar.component';

@NgModule({
    imports: [CommonModule, RouterModule, MaterialModule, FlexLayoutModule, TranslateModule],
    declarations: [HeaderToolbarComponent],
    exports: [HeaderToolbarComponent],
})
export class HeaderModule {}
