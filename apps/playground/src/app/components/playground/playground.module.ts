import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FilterPipe } from '../pipes/filter.pipe';
import { PlaygroundComponent } from './playground.component';

@NgModule({
    declarations: [PlaygroundComponent, FilterPipe],
    imports: [CommonModule, FormsModule, MatRadioModule, MatCardModule],
    bootstrap: [PlaygroundComponent],
})
export class PlaygroundModule {}
