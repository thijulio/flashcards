import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatDividerModule],
  declarations: [HeaderToolbarComponent],
  exports: [HeaderToolbarComponent]
})
export class SharedHeaderModule {}
