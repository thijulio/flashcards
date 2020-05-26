import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material.module';
import { HeaderModule } from '../header-toolbar/header.module';
import { LeftPanelModule } from '../left-panel-toolbar/left-panel.module';
import { RightPanelModule } from '../right-panel-toolbar/right-panel.module';
import { LayoutComponent } from './layout.component';

@NgModule({
    imports: [CommonModule, FlexLayoutModule, HeaderModule, LeftPanelModule, RightPanelModule, MaterialModule],
    declarations: [LayoutComponent],
    exports: [LayoutComponent],
})
export class LayoutModule {}
