import { createAction } from '@ngrx/store';

const toggleLeftPanel = createAction('[Left Panel] Toggle Left Panel');
const mouseEnterLeftPanel = createAction('[Left Panel] Mouse Enter Left Panel');
const mouseLeaveLeftPanel = createAction('[Left Panel] Mouse Leave Left Panel');

const toggleRightPanel = createAction('[Right Panel] Toggle Right Panel');

const changeToMobile = createAction('[Layout] Change to Mobile');
const changeToWeb = createAction('[Layout] Change to Web');

// eslint-disable-next-line @typescript-eslint/naming-convention
export const LeftPanelActions = {
    toggleLeftPanel,
    mouseEnterLeftPanel,
    mouseLeaveLeftPanel,
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const RightPanelActions = {
    toggleRightPanel,
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const LayoutActions = {
    changeToMobile,
    changeToWeb,
};
