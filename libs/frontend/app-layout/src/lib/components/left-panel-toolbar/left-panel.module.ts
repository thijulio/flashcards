import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutFacade } from '../../+state/facade/layout.facade';
import { MaterialModule } from '../../material.module';
import { LeftPanelToolbarComponent } from './left-panel-toolbar.component';

@NgModule({
    imports: [CommonModule, MaterialModule],
    declarations: [LeftPanelToolbarComponent],
    exports: [LeftPanelToolbarComponent],
    providers: [LayoutFacade],
})
export class LeftPanelModule {}
