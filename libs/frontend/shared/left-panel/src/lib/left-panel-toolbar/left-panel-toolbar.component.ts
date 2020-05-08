import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationService } from '@flashcards/frontend/shared/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'flashcards-left-panel-toolbar',
    templateUrl: './left-panel-toolbar.component.html',
    styleUrls: ['./left-panel-toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftPanelToolbarComponent {
    public isExpanded$: Observable<boolean> = this.navigationService.isLeftPanelReduced$.pipe(
        map((res: boolean) => !res),
    );

    constructor(private readonly navigationService: NavigationService) {}

    public togglePanelSize(): void {
        this.navigationService.toggleLeftPanel();
    }
}
