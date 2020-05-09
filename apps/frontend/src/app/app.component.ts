import { ChangeDetectionStrategy, Component } from '@angular/core';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { NavigationService } from '@flashcards/frontend/shared/data'; // TODO: FIX THIS DEPENDENCY
import { Observable } from 'rxjs';
@Component({
    selector: 'flashcards-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    public isSmall$: Observable<boolean> = this.navigationService.isLeftPanelReduced$;
    public isRightPanelSmall$: Observable<boolean> = this.navigationService.isRightPanelReduced$;

    public isHandset$: Observable<boolean> = this.navigationService.isHandset$;

    constructor(private readonly navigationService: NavigationService) {}

    public onMouseEnterLeftPanel(): void {
        this.navigationService.mouseEnterLeftPanel();
    }

    public onMouseLeaveLeftPanel(): void {
        this.navigationService.mouseLeaveLeftPanel();
    }

    public onMouseEnterRightPanel(): void {
        this.navigationService.mouseEnterRightPanel();
    }

    public onMouseLeaveRightPanel(): void {
        this.navigationService.mouseLeaveRightPanel();
    }
}
