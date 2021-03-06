import { Injectable } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SidenavVisibilityType } from '../../../types/enums/sidenav-visibility-type.enum';
import { LayoutActions, LeftPanelActions, RightPanelActions } from '../actions/layout.actions';
import { LayoutState } from '../reducers/layout.reducer';
import { LayoutSelectors } from '../selectors/layout.selectors';

@Injectable()
export class LayoutFacade {
    public isLeftPanelFolded$: Observable<boolean> = this.store.pipe(select(LayoutSelectors.selectIsLeftPanelFolded));
    public isLeftPanelExpanded$: Observable<boolean> = this.store.pipe(
        select(LayoutSelectors.selectIsLeftPanelExpanded)
    );

    public isRightPanelFolded$: Observable<boolean> = this.store.pipe(select(LayoutSelectors.selectIsRightPanelFolded));
    public isRightPanelHidden$: Observable<boolean> = this.store.pipe(select(LayoutSelectors.selectIsRightPanelHidden));
    public isRightPanelVisible$: Observable<boolean> = this.store.pipe(
        select(LayoutSelectors.selectIsRightPanelVisible)
    );
    public isLeftPanelHidden$: Observable<boolean> = this.store.pipe(select(LayoutSelectors.selectIsLeftPanelHidden));

    public isLeftPanelLockedExpanded$: Observable<boolean> = this.store.pipe(
        select(LayoutSelectors.selectIsLeftPanelLockedExpanded)
    );

    public leftPanelVisibilityType$: Observable<SidenavVisibilityType> = this.store.pipe(
        select(LayoutSelectors.selectLeftPanelVisibilityType)
    );

    public isMobile$: Observable<boolean> = this.store.pipe(select(LayoutSelectors.selectIsMobile));

    public leftPanelHasBackdrop$: Observable<boolean> = this.store.pipe(
        select(LayoutSelectors.selectLeftPanelHasBackdrop)
    );
    public isLeftPanelOpened$: Observable<boolean> = this.store.pipe(select(LayoutSelectors.selectIsLeftPanelOpened));

    public leftPanelDrawerMode$: Observable<MatDrawerMode> = this.store.pipe(
        select(LayoutSelectors.selectLeftPanelDrawerMode)
    );

    constructor(private readonly store: Store<LayoutState>) {}

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

    public changeToWeb(): void {
        this.store.dispatch(LayoutActions.changeToWeb());
    }

    public changeToMobile(): void {
        this.store.dispatch(LayoutActions.changeToMobile());
    }
}
