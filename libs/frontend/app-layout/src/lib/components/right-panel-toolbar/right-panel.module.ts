import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { RightPanelToolbarComponent } from './right-panel-toolbar.component';

@NgModule({
    imports: [CommonModule, MaterialModule],
    declarations: [RightPanelToolbarComponent],
    exports: [RightPanelToolbarComponent],
})
export class RightPanelModule {}
