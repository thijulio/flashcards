import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutFacade } from '../../data/+state/facade/layout.facade';
import { MaterialModule } from '../../material.module';
import { LeftPanelToolbarComponent } from './left-panel-toolbar.component';

@NgModule({
    imports: [CommonModule, MaterialModule, TranslateModule],
    declarations: [LeftPanelToolbarComponent],
    exports: [LeftPanelToolbarComponent],
    providers: [LayoutFacade],
})
export class LeftPanelModule {}
