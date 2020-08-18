import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { LayoutFacade } from '../../+state/facade/layout.facade';

@Component({
    selector: 'flashcards-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
    public isLeftPanelFolded$: Observable<boolean> = this.layoutFacade.isLeftPanelFolded$;
    public isRightPanelFolded$: Observable<boolean> = this.layoutFacade.isRightPanelFolded$;
    public isLeftPanelLockedExpanded$: Observable<boolean> = this.layoutFacade.isLeftPanelLockedExpanded$;
    public isMobile$: Observable<boolean> = this.layoutFacade.isMobile$;
    public leftPanelHasBackdrop$: Observable<boolean> = this.layoutFacade.leftPanelHasBackdrop$;
    public isLeftPanelOpened$: Observable<boolean> = this.layoutFacade.isLeftPanelOpened$;
    public leftPanelMode$: Observable<MatDrawerMode> = this.layoutFacade.leftPanelDrawerMode$;
    public isRightPanelHidden$: Observable<boolean> = this.layoutFacade.isRightPanelHidden$;
    public isRightPanelVisible$: Observable<boolean> = this.layoutFacade.isRightPanelVisible$;
    public isLeftPanelHidden$: Observable<boolean> = this.layoutFacade.isLeftPanelHidden$;

    constructor(private readonly layoutFacade: LayoutFacade) {}

    public onMouseEnterLeftPanel(): void {
        this.layoutFacade.mouseEnterLeftPanel();
    }

    public onMouseLeaveLeftPanel(): void {
        this.layoutFacade.mouseLeaveLeftPanel();
    }

    public backDropClicked(): void {
        this.layoutFacade.toggleLeftPanel();
    }
}
