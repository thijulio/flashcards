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

const selectRightPanelVisibilityType = createSelector(
    selectState,
    (state: fromLayout.LayoutState) => state.rightPanelVisibilityType
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

const selectIsRightPanelHidden = createSelector(
    selectRightPanelVisibilityType,
    (visibilityType: SidenavVisibilityType) => visibilityType === SidenavVisibilityType.HIDDEN
);

const selectIsRightPanelVisible = createSelector(
    selectIsRightPanelHidden,
    (isRightPanelHidden: boolean) => !isRightPanelHidden
);

const selectIsLeftPanelHidden = createSelector(
    selectLeftPanelVisibilityType,
    (visibilityType: SidenavVisibilityType) => visibilityType === SidenavVisibilityType.HIDDEN
);

const selectLeftPanelHasBackdrop = createSelector(selectIsMobile, (isMobile: boolean) => isMobile);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const LayoutSelectors = {
    selectLeftPanelDisplayMode,
    selectIsLeftPanelHovered,
    selectLeftPanelVisibilityType,
    selectRightPanelVisibilityType,
    selectIsMobile,
    selectIsWeb,
    selectIsLeftPanelFolded,
    selectIsLeftPanelOpened,
    selectIsLeftPanelLockedExpanded,
    selectIsLeftPanelExpanded,
    selectLeftPanelDrawerMode,
    selectIsRightPanelFolded,
    selectIsRightPanelHidden,
    selectIsRightPanelVisible,
    selectIsLeftPanelHidden,
    selectLeftPanelHasBackdrop,
};
