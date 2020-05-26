import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { LayoutFacade } from '../../state/facade/layout.facade';
import { LeftPanelToolbarComponent } from './left-panel-toolbar.component';

@NgModule({
    imports: [CommonModule, MaterialModule],
    declarations: [LeftPanelToolbarComponent],
    exports: [LeftPanelToolbarComponent],
    providers: [LayoutFacade],
})
export class LeftPanelModule {}
