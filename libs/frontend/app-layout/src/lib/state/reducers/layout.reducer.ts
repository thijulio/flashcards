import { Action, createReducer, on } from '@ngrx/store';
import { SidenavVisibilityType } from '../../types/enums/sidenav-visibility-type.enum';
import { LeftPanelActions, RightPanelActions } from '../actions/layout.actions';

export const layoutFeatureKey = 'layout';

export interface LayoutState {
    leftPanelVisibilityType: SidenavVisibilityType;
    hoverInLeftPanel: boolean;
    rightPanelVisibilityType: SidenavVisibilityType;
}

export const initialState: LayoutState = {
    leftPanelVisibilityType: SidenavVisibilityType.EXPANDED,
    hoverInLeftPanel: false,
    rightPanelVisibilityType: SidenavVisibilityType.REDUCED,
};

const layoutReducer = createReducer(
    initialState,
    on(LeftPanelActions.toggleLeftPanel, (state: LayoutState) => ({
        ...state,
        leftPanelVisibilityType:
            state.leftPanelVisibilityType === SidenavVisibilityType.EXPANDED
                ? SidenavVisibilityType.REDUCED
                : SidenavVisibilityType.EXPANDED,
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
                ? SidenavVisibilityType.REDUCED
                : SidenavVisibilityType.EXPANDED,
    })),
);

export function reducer(state: LayoutState | undefined, action: Action): LayoutState {
    return layoutReducer(state, action);
}
