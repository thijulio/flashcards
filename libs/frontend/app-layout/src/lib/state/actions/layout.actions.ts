import { createAction } from '@ngrx/store';

const toggleLeftPanel = createAction('[Left Panel] Toggle Left Panel');
const mouseEnterLeftPanel = createAction('[Left Panel] Mouse Enter Left Panel');
const mouseLeaveLeftPanel = createAction('[Left Panel] Mouse Leave Left Panel');

const toggleRightPanel = createAction('[Right Panel] Toggle Right Panel');

// tslint:disable: naming-convention
export const LeftPanelActions = {
    toggleLeftPanel,
    mouseEnterLeftPanel,
    mouseLeaveLeftPanel,
};
export const RightPanelActions = {
    toggleRightPanel,
};
