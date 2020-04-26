import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationService } from '@flashcards/shared/data';

@Component({
    selector: 'flashcards-right-panel-toolbar',
    templateUrl: './right-panel-toolbar.component.html',
    styleUrls: ['./right-panel-toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightPanelToolbarComponent {
    constructor(private readonly navigationService: NavigationService) {}

    public togglePanelSize(): void {
        this.navigationService.toggleRightPanel();
    }
}
