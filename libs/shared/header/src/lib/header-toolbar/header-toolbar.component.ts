import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationService } from '@flashcards/shared/data';
import { Observable } from 'rxjs';

@Component({
    selector: 'flashcards-header-toolbar',
    templateUrl: './header-toolbar.component.html',
    styleUrls: ['./header-toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderToolbarComponent {
    public isHandset$: Observable<boolean> = this.navigationService.isHandset$;

    constructor(private readonly navigationService: NavigationService) {}
}
