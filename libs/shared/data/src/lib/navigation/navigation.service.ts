import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { SidenavVisibilityType } from '@flashcards/shared/types';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    private sidenavLeftVisibilityType: SidenavVisibilityType = SidenavVisibilityType.Expanded;
    private sidenavRightVisibilityType: SidenavVisibilityType = SidenavVisibilityType.Reduced;

    private leftPanelReducedSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        this.isSidenavReduced(this.sidenavLeftVisibilityType),
    );

    private rightPanelReducedSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        this.isSidenavReduced(this.sidenavRightVisibilityType),
    );

    public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map((result: BreakpointState) => result.matches),
        shareReplay(),
    );
    public isLeftPanelReduced$: Observable<boolean> = this.leftPanelReducedSubject$.asObservable();
    public isRightPanelReduced$: Observable<boolean> = this.rightPanelReducedSubject$.asObservable();

    constructor(private readonly breakpointObserver: BreakpointObserver) {}

    public toggleLeftPanel(): void {
        this.sidenavLeftVisibilityType = this.toggleSidenav(this.sidenavLeftVisibilityType);
        this.leftPanelReducedSubject$.next(this.isSidenavReduced(this.sidenavLeftVisibilityType));
    }

    public toggleRightanel(): void {
        this.sidenavRightVisibilityType = this.toggleSidenav(this.sidenavRightVisibilityType);
        this.rightPanelReducedSubject$.next(this.isSidenavReduced(this.sidenavRightVisibilityType));
    }

    public mouseEnterLeftPanel(): void {
        if (this.isSidenavExpanded(this.sidenavLeftVisibilityType)) {
            return;
        }
        this.leftPanelReducedSubject$.next(false);
    }
    public mouseLeaveLeftPanel(): void {
        if (this.isSidenavExpanded(this.sidenavLeftVisibilityType)) {
            return;
        }
        this.leftPanelReducedSubject$.next(true);
    }
    public mouseEnterRightPanel(): void {
        if (this.isSidenavExpanded(this.sidenavRightVisibilityType)) {
            return;
        }
        this.rightPanelReducedSubject$.next(false);
    }

    public mouseLeaveRightPanel(): void {
        if (this.isSidenavExpanded(this.sidenavRightVisibilityType)) {
            return;
        }
        this.rightPanelReducedSubject$.next(true);
    }

    private isSidenavReduced(sidenav: SidenavVisibilityType): boolean {
        return sidenav === SidenavVisibilityType.Reduced;
    }

    private isSidenavExpanded(sidenav: SidenavVisibilityType): boolean {
        return sidenav === SidenavVisibilityType.Expanded;
    }

    private toggleSidenav(sidenav: SidenavVisibilityType): SidenavVisibilityType {
        return sidenav === SidenavVisibilityType.Expanded
            ? SidenavVisibilityType.Reduced
            : SidenavVisibilityType.Expanded;
    }
}
