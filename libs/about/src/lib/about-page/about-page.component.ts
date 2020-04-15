import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'flashcards-about',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {}
