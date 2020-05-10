import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HeaderToolbarComponent } from './header-toolbar.component';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatTabsModule,
    ],
    declarations: [HeaderToolbarComponent],
    exports: [HeaderToolbarComponent],
})
export class HeaderModule {}
