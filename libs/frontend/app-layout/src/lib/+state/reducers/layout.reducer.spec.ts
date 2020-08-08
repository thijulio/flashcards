import { DisplayMode } from '../../types/enums/device-mode';
import { SidenavVisibilityType } from '../../types/enums/sidenav-visibility-type.enum';
import * as fromLoaderActions from '../actions/layout.actions';
import * as fromLoaderReducer from './layout.reducer';

describe('LayoutReducer', () => {
    describe('toggleLeftPanel', () => {
        test('should fold left panel', () => {
            const action = fromLoaderActions.LeftPanelActions.toggleLeftPanel();
            const state = {
                ...fromLoaderReducer.initialState,
                leftPanelVisibilityType: SidenavVisibilityType.EXPANDED,
                hoverInLeftPanel: true,
            };

            const result = fromLoaderReducer.layoutReducer(state, action);

            expect(result).toEqual({
                ...state,
                leftPanelVisibilityType: SidenavVisibilityType.FOLDED,
                hoverInLeftPanel: false,
            });
        });

        test('should hide left panel when is mobile and expanded', () => {
            const action = fromLoaderActions.LeftPanelActions.toggleLeftPanel();
            const state = {
                ...fromLoaderReducer.initialState,
                displayMode: DisplayMode.MOBILE,
                leftPanelVisibilityType: SidenavVisibilityType.EXPANDED,
                hoverInLeftPanel: true,
            };

            const result = fromLoaderReducer.layoutReducer(state, action);

            expect(result).toEqual({
                ...state,
                leftPanelVisibilityType: SidenavVisibilityType.HIDDEN,
                hoverInLeftPanel: false,
            });
        });

        test('should expand left panel', () => {
            const action = fromLoaderActions.LeftPanelActions.toggleLeftPanel();
            const state = {
                ...fromLoaderReducer.initialState,
                leftPanelVisibilityType: SidenavVisibilityType.FOLDED,
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
                rightPanelVisibilityType: SidenavVisibilityType.FOLDED,
            });
        });

        test('should expand right panel', () => {
            const action = fromLoaderActions.RightPanelActions.toggleRightPanel();
            const state = {
                ...fromLoaderReducer.initialState,
                rightPanelVisibilityType: SidenavVisibilityType.FOLDED,
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
                rightPanelVisibilityType: SidenavVisibilityType.FOLDED,
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

    describe('changeToMobile', () => {
        test('should change to mobile mode', () => {
            const action = fromLoaderActions.LayoutActions.changeToMobile();
            const state = {
                ...fromLoaderReducer.initialState,
                rightPanelVisibilityType: SidenavVisibilityType.EXPANDED,
                leftPanelVisibilityType: SidenavVisibilityType.EXPANDED,
                displayMode: DisplayMode.WEB,
            };

            const result = fromLoaderReducer.layoutReducer(state, action);

            expect(result).toEqual({
                ...state,
                rightPanelVisibilityType: SidenavVisibilityType.HIDDEN,
                leftPanelVisibilityType: SidenavVisibilityType.HIDDEN,
                displayMode: DisplayMode.MOBILE,
            });
        });
    });

    describe('changeToMobile', () => {
        test('should change to web mode', () => {
            const action = fromLoaderActions.LayoutActions.changeToWeb();
            const state = {
                ...fromLoaderReducer.initialState,
                rightPanelVisibilityType: SidenavVisibilityType.HIDDEN,
                leftPanelVisibilityType: SidenavVisibilityType.HIDDEN,
                displayMode: DisplayMode.MOBILE,
            };

            const result = fromLoaderReducer.layoutReducer(state, action);

            expect(result).toEqual({
                ...state,
                leftPanelVisibilityType: SidenavVisibilityType.EXPANDED,
                rightPanelVisibilityType: SidenavVisibilityType.FOLDED,
                displayMode: DisplayMode.WEB,
            });
        });
    });
});
