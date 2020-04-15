import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { LeftPanelType } from '@flashcards/shared/types';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    private leftPanelType: LeftPanelType = LeftPanelType.Expanded;
    private leftPanelReducedSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private leftPanelModeSubject$: BehaviorSubject<LeftPanelType> = new BehaviorSubject<LeftPanelType>(
        this.leftPanelType,
    );

    public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map((result: BreakpointState) => result.matches),
        shareReplay(),
    );
    public isLeftPanelReduced$: Observable<boolean> = this.leftPanelReducedSubject$.asObservable();
    public leftPanelMode$: Observable<LeftPanelType> = this.leftPanelModeSubject$.asObservable();

    constructor(private readonly breakpointObserver: BreakpointObserver) {}

    public toggleLeftPanel(): void {
        this.leftPanelType =
            this.leftPanelType === LeftPanelType.Expanded ? LeftPanelType.Reduced : LeftPanelType.Expanded;

        this.leftPanelModeSubject$.next(this.leftPanelType);
        this.leftPanelReducedSubject$.next(this.leftPanelType === LeftPanelType.Reduced);
    }

    public hoverInLeftPanel(): void {
        if (this.leftPanelType === LeftPanelType.Expanded) {
            return;
        }
        this.leftPanelReducedSubject$.next(false);
    }

    public hoverOutLeftPanel(): void {
        if (this.leftPanelType === LeftPanelType.Expanded) {
            return;
        }
        this.leftPanelReducedSubject$.next(true);
    }
}
