import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [MatToolbarModule, MatDividerModule, MatButtonModule, MatTabsModule, MatIconModule, MatSidenavModule],
    exports: [MatToolbarModule, MatDividerModule, MatButtonModule, MatTabsModule, MatIconModule, MatSidenavModule],
})
export class MaterialModule {}
