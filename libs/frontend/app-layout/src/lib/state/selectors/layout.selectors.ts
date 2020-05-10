import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SidenavVisibilityType } from '../../types/enums/sidenav-visibility-type.enum';
import * as fromLayout from '../reducers/layout.reducer';

const selectState = createFeatureSelector<fromLayout.LayoutState>(fromLayout.layoutFeatureKey);

const selectIsLeftPanelReduced = createSelector(
    selectState,
    (state: fromLayout.LayoutState) =>
        state.leftPanelVisibilityType === SidenavVisibilityType.REDUCED && !state.hoverInLeftPanel,
);

const selectIsRightPanelReduced = createSelector(
    selectState,
    (state: fromLayout.LayoutState) => state.rightPanelVisibilityType === SidenavVisibilityType.REDUCED,
);

// tslint:disable-next-line: naming-convention
export const LayoutSelectors = { selectIsLeftPanelReduced, selectIsRightPanelReduced };
