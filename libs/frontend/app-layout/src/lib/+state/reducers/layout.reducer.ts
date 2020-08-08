import { Action, createReducer, on } from '@ngrx/store';
import { DisplayMode } from '../../types/enums/device-mode';
import { SidenavVisibilityType } from '../../types/enums/sidenav-visibility-type.enum';
import { LayoutActions, LeftPanelActions, RightPanelActions } from '../actions/layout.actions';

export const layoutFeatureKey = 'layout';

export interface LayoutState {
    leftPanelVisibilityType: SidenavVisibilityType;
    hoverInLeftPanel: boolean;
    rightPanelVisibilityType: SidenavVisibilityType;
    displayMode: DisplayMode;
}

export const initialState: LayoutState = {
    leftPanelVisibilityType: SidenavVisibilityType.EXPANDED,
    hoverInLeftPanel: false,
    rightPanelVisibilityType: SidenavVisibilityType.FOLDED,
    displayMode: DisplayMode.WEB,
};

export const layoutReducer = createReducer(
    initialState,
    on(LeftPanelActions.toggleLeftPanel, (state: LayoutState) => ({
        ...state,
        leftPanelVisibilityType: getLeftPanelVisibilityToggle(state.displayMode, state.leftPanelVisibilityType),
        hoverInLeftPanel: false,
    })),
    on(LeftPanelActions.mouseEnterLeftPanel, (state: LayoutState) => ({
        ...state,
        hoverInLeftPanel: true,
    })),
    on(LeftPanelActions.mouseLeaveLeftPanel, (state: LayoutState) => ({
        ...state,
        hoverInLeftPanel: false,
    })),
    on(RightPanelActions.toggleRightPanel, (state: LayoutState) => ({
        ...state,
        rightPanelVisibilityType:
            state.rightPanelVisibilityType === SidenavVisibilityType.EXPANDED
                ? SidenavVisibilityType.FOLDED
                : SidenavVisibilityType.EXPANDED,
    })),
    on(LayoutActions.changeToMobile, (state: LayoutState) => ({
        ...state,
        displayMode: DisplayMode.MOBILE,
        leftPanelVisibilityType: SidenavVisibilityType.HIDDEN,
        rightPanelVisibilityType: SidenavVisibilityType.HIDDEN,
    })),
    on(LayoutActions.changeToWeb, (state: LayoutState) => ({
        ...state,
        displayMode: DisplayMode.WEB,
        leftPanelVisibilityType: SidenavVisibilityType.EXPANDED,
        rightPanelVisibilityType: SidenavVisibilityType.FOLDED,
    }))
);

const getLeftPanelVisibilityToggle = (
    displayMode: DisplayMode,
    visibilityType: SidenavVisibilityType
): SidenavVisibilityType => {
    if (displayMode === DisplayMode.MOBILE && visibilityType === SidenavVisibilityType.EXPANDED) {
        return SidenavVisibilityType.HIDDEN;
    }

    if (visibilityType === SidenavVisibilityType.EXPANDED) {
        return SidenavVisibilityType.FOLDED;
    }

    return SidenavVisibilityType.EXPANDED;
};

export function reducer(state: LayoutState | undefined, action: Action): LayoutState {
    return layoutReducer(state, action);
}
