import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { LayoutFacade } from '../../data/+state/facade/layout.facade';

@Component({
    selector: 'flashcards-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit, OnDestroy {
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

    public destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private readonly layoutFacade: LayoutFacade, private readonly breakpointObserver: BreakpointObserver) {}

    ngOnInit(): void {
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .pipe(
                map((result: BreakpointState) =>
                    result.matches ? this.layoutFacade.changeToWeb() : this.layoutFacade.changeToMobile()
                ),
                takeUntil(this.destroy$)
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

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
