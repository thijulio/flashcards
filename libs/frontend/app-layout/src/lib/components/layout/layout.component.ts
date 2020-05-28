import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutFacade } from '../../+state/facade/layout.facade';

@Component({
    selector: 'flashcards-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
    public isLeftPanelReduced$: Observable<boolean> = this.layoutFacade.isLeftPanelReduced$;
    public isRightPanelReduced$: Observable<boolean> = this.layoutFacade.isRightPanelReduced$;
    public isHandset$: Observable<boolean> = this.layoutFacade.isHandset$;

    constructor(private readonly layoutFacade: LayoutFacade) {}

    public onMouseEnterLeftPanel(): void {
        this.layoutFacade.mouseEnterLeftPanel();
    }

    public onMouseLeaveLeftPanel(): void {
        this.layoutFacade.mouseLeaveLeftPanel();
    }
}
