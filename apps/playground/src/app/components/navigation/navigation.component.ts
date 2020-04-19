import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'playground-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {}
