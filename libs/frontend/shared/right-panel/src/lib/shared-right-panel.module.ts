import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RightPanelToolbarComponent } from './right-panel-toolbar/right-panel-toolbar.component';

@NgModule({
    imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
    declarations: [RightPanelToolbarComponent],
    exports: [RightPanelToolbarComponent],
})
export class SharedRightPanelModule {}
