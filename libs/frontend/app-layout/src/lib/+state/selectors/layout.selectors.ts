import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DisplayMode } from '../../types/enums/device-mode';
import { SidenavVisibilityType } from '../../types/enums/sidenav-visibility-type.enum';
import * as fromLayout from '../reducers/layout.reducer';

const selectState = createFeatureSelector<fromLayout.LayoutState>(fromLayout.layoutFeatureKey);

const selectLeftPanelDisplayMode = createSelector(selectState, (state: fromLayout.LayoutState) => state.displayMode);

const selectIsLeftPanelHovered = createSelector(selectState, (state: fromLayout.LayoutState) => state.hoverInLeftPanel);

const selectLeftPanelVisibilityType = createSelector(
    selectState,
    (state: fromLayout.LayoutState) => state.leftPanelVisibilityType
);

const selectIsMobile = createSelector(
    selectLeftPanelDisplayMode,
    (displayMode: DisplayMode) => displayMode === DisplayMode.MOBILE
);

const selectIsWeb = createSelector(
    selectLeftPanelDisplayMode,
    (displayMode: DisplayMode) => displayMode === DisplayMode.WEB
);

const selectIsLeftPanelFolded = createSelector(
    selectLeftPanelVisibilityType,
    selectIsLeftPanelHovered,
    (visibilityType: SidenavVisibilityType, isLeftPanelHovered: boolean) =>
        visibilityType === SidenavVisibilityType.FOLDED && !isLeftPanelHovered
);

const selectIsLeftPanelOpened = createSelector(
    selectLeftPanelVisibilityType,
    (visibilityType: SidenavVisibilityType) => visibilityType !== SidenavVisibilityType.HIDDEN
);

const selectIsLeftPanelLockedExpanded = createSelector(
    selectLeftPanelVisibilityType,
    (visibilityType: SidenavVisibilityType) => visibilityType === SidenavVisibilityType.EXPANDED
);

const selectIsLeftPanelExpanded = createSelector(
    selectIsLeftPanelOpened,
    selectIsLeftPanelFolded,
    selectIsLeftPanelLockedExpanded,
    (isLeftPanelOpened: boolean, isLeftPanelFolded: boolean, isLeftPanelFixedOnExpanded: boolean) =>
        isLeftPanelOpened && (!isLeftPanelFolded || isLeftPanelFixedOnExpanded)
);

const selectIsRightPanelFolded = createSelector(
    selectState,
    (state: fromLayout.LayoutState) => state.rightPanelVisibilityType === SidenavVisibilityType.FOLDED
);

const selectLeftPanelDrawerMode = createSelector(
    selectIsMobile,
    selectLeftPanelVisibilityType,
    (isMobile: boolean, visibilityType: SidenavVisibilityType) => {
        if (isMobile) {
            return 'over';
        }

        return visibilityType === SidenavVisibilityType.EXPANDED ? 'side' : 'over';
    }
);

// tslint:disable-next-line: naming-convention
export const LayoutSelectors = {
    selectLeftPanelDisplayMode,
    selectIsLeftPanelHovered,
    selectLeftPanelVisibilityType,
    selectIsMobile,
    selectIsWeb,
    selectIsLeftPanelFolded,
    selectIsLeftPanelOpened,
    selectIsLeftPanelLockedExpanded,
    selectIsLeftPanelExpanded,
    selectIsRightPanelFolded,
    selectLeftPanelDrawerMode,
};
