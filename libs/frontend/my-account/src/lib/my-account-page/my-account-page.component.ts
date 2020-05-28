import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'flashcards-my-account-page',
    templateUrl: './my-account-page.component.html',
    styleUrls: ['./my-account-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAccountPageComponent {}
