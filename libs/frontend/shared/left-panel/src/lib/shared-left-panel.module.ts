import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LeftPanelToolbarComponent } from './left-panel-toolbar/left-panel-toolbar.component';

@NgModule({
    imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
    declarations: [LeftPanelToolbarComponent],
    exports: [LeftPanelToolbarComponent],
})
export class SharedLeftPanelModule {}
