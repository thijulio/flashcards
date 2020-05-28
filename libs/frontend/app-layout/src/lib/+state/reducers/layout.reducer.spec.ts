import { SidenavVisibilityType } from '../../types/enums/sidenav-visibility-type.enum';
import * as fromLoaderActions from '../actions/layout.actions';
import * as fromLoaderReducer from './layout.reducer';

describe('LayoutReducer', () => {
    describe('toggleLeftPanel', () => {
        test('should reduce left panel', () => {
            const action = fromLoaderActions.LeftPanelActions.toggleLeftPanel();
            const state = {
                ...fromLoaderReducer.initialState,
                leftPanelVisibilityType: SidenavVisibilityType.EXPANDED,
                hoverInLeftPanel: true,
            };

            const result = fromLoaderReducer.layoutReducer(state, action);

            expect(result).toEqual({
                ...state,
                leftPanelVisibilityType: SidenavVisibilityType.REDUCED,
                hoverInLeftPanel: false,
            });
        });

        test('should expand left panel', () => {
            const action = fromLoaderActions.LeftPanelActions.toggleLeftPanel();
            const state = {
                ...fromLoaderReducer.initialState,
                leftPanelVisibilityType: SidenavVisibilityType.REDUCED,
                hoverInLeftPanel: true,
            };

            const result = fromLoaderReducer.layoutReducer(state, action);

            expect(result).toEqual({
                ...state,
                leftPanelVisibilityType: SidenavVisibilityType.EXPANDED,
                hoverInLeftPanel: false,
            });
        });
    });

    describe('mouseEnterLeftPanel', () => {
        test('should hover in left panel', () => {
            const action = fromLoaderActions.LeftPanelActions.mouseEnterLeftPanel();
            const state = {
                ...fromLoaderReducer.initialState,
                hoverInLeftPanel: false,
            };

            const result = fromLoaderReducer.layoutReducer(state, action);

            expect(result).toEqual({
                ...state,
                hoverInLeftPanel: true,
            });
        });
    });

    describe('mouseLeaveLeftPanel', () => {
        test('should hover in left panel', () => {
            const action = fromLoaderActions.LeftPanelActions.mouseLeaveLeftPanel();
            const state = {
                ...fromLoaderReducer.initialState,
                hoverInLeftPanel: true,
            };

            const result = fromLoaderReducer.layoutReducer(state, action);

            expect(result).toEqual({
                ...state,
                hoverInLeftPanel: false,
            });
        });
    });

    describe('toggleRightPanel', () => {
        test('should reduce right panel', () => {
            const action = fromLoaderActions.RightPanelActions.toggleRightPanel();
            const state = {
                ...fromLoaderReducer.initialState,
                rightPanelVisibilityType: SidenavVisibilityType.EXPANDED,
            };

            const result = fromLoaderReducer.layoutReducer(state, action);

            expect(result).toEqual({
                ...state,
                rightPanelVisibilityType: SidenavVisibilityType.REDUCED,
            });
        });

        test('should expand right panel', () => {
            const action = fromLoaderActions.RightPanelActions.toggleRightPanel();
            const state = {
                ...fromLoaderReducer.initialState,
                rightPanelVisibilityType: SidenavVisibilityType.REDUCED,
            };

            const result = fromLoaderReducer.layoutReducer(state, action);

            expect(result).toEqual({
                ...state,
                rightPanelVisibilityType: SidenavVisibilityType.EXPANDED,
            });
        });

        test('should toggle right panel without interfere on leftpane hover status', () => {
            const action = fromLoaderActions.RightPanelActions.toggleRightPanel();
            const state = {
                ...fromLoaderReducer.initialState,
                rightPanelVisibilityType: SidenavVisibilityType.REDUCED,
                hoverInLeftPanel: true,
            };

            const result = fromLoaderReducer.layoutReducer(state, action);

            expect(result).toEqual({
                ...state,
                rightPanelVisibilityType: SidenavVisibilityType.EXPANDED,
                hoverInLeftPanel: true,
            });
        });
    });
});
