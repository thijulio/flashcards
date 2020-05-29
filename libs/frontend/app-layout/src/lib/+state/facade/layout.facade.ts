import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LeftPanelActions, RightPanelActions } from '../actions/layout.actions';
import { LayoutState } from '../reducers/layout.reducer';
import { LayoutSelectors } from '../selectors/layout.selectors';

@Injectable()
export class LayoutFacade {
    public isLeftPanelReduced$: Observable<boolean> = this.store.pipe(select(LayoutSelectors.selectIsLeftPanelReduced));
    public isLeftPanelExpanded$: Observable<boolean> = this.store.pipe(
        select(LayoutSelectors.selectIsLeftPanelExpanded),
    );

    public isRightPanelReduced$: Observable<boolean> = this.store.pipe(
        select(LayoutSelectors.selectIsRightPanelReduced),
    );

    public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map((result: BreakpointState) => result.matches),
        shareReplay(),
    );

    constructor(private store: Store<LayoutState>, private readonly breakpointObserver: BreakpointObserver) {}

    public toggleLeftPanel(): void {
        this.store.dispatch(LeftPanelActions.toggleLeftPanel());
    }

    public mouseEnterLeftPanel(): void {
        this.store.dispatch(LeftPanelActions.mouseEnterLeftPanel());
    }

    public mouseLeaveLeftPanel(): void {
        this.store.dispatch(LeftPanelActions.mouseLeaveLeftPanel());
    }

    public toggleRightPanel(): void {
        this.store.dispatch(RightPanelActions.toggleRightPanel());
    }
}
