import { SidenavVisibilityType } from '../../types/enums/sidenav-visibility-type.enum';
import * as fromLoaderReducer from '../reducers/layout.reducer';
import { LayoutSelectors } from './layout.selectors';

describe('LayoutSelectors', () => {
    describe('selectIsLeftPanelReduced', () => {
        test('should get that the left panel is reduced', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                leftPanelVisibilityType: SidenavVisibilityType.REDUCED,
                hoverInLeftPanel: false,
            };

            expect(LayoutSelectors.selectIsLeftPanelReduced.projector(state)).toBe(true);
        });

        test('should get that the left panel is not reduced when the visibility is reduced but the panel is hovered', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                leftPanelVisibilityType: SidenavVisibilityType.REDUCED,
                hoverInLeftPanel: true,
            };

            expect(LayoutSelectors.selectIsLeftPanelReduced.projector(state)).toBe(false);
        });

        test('should get the left panel is not reduced', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                leftPanelVisibilityType: SidenavVisibilityType.EXPANDED,
            };

            expect(LayoutSelectors.selectIsLeftPanelReduced.projector(state)).toBe(false);
        });
    });

    describe('selectIsLeftPanelExpanded', () => {
        test('should get that the left panel is expanded', () => {
            expect(LayoutSelectors.selectIsLeftPanelExpanded.projector(false)).toBe(true);
        });

        test('should get that the left panel is reduced', () => {
            expect(LayoutSelectors.selectIsLeftPanelExpanded.projector(true)).toBe(false);
        });
    });

    describe('selectIsRightPanelReduced', () => {
        test('should get that the right panel is reduced', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                rightPanelVisibilityType: SidenavVisibilityType.REDUCED,
            };

            expect(LayoutSelectors.selectIsRightPanelReduced.projector(state)).toBe(true);
        });

        test('should get that the right panel is expanded', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                rightPanelVisibilityType: SidenavVisibilityType.EXPANDED,
            };

            expect(LayoutSelectors.selectIsRightPanelReduced.projector(state)).toBe(false);
        });
    });
});
