import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationService } from '@flashcards/shared/data';
import { LeftPanelType } from '@flashcards/shared/types';
import { Observable } from 'rxjs';
@Component({
    selector: 'flashcards-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    public isSmall$: Observable<boolean> = this.navigationService.isLeftPanelReduced$;
    public isHandset$: Observable<boolean> = this.navigationService.isHandset$;
    public leftPanelMode$: Observable<LeftPanelType> = this.navigationService.leftPanelMode$;

    // public leftPaneMode: Observable<string> = combineLatest([this.isHandset$, this.leftPanelMode$]).pipe(map(() => '')); // TODO

    constructor(private readonly navigationService: NavigationService) {}

    public mouseenter(): void {
        this.navigationService.hoverInLeftPanel();
    }

    public mouseleave(): void {
        this.navigationService.hoverOutLeftPanel();
    }
}
