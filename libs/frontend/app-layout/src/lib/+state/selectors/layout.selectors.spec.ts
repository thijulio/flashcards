import { DisplayMode } from '../../types/enums/device-mode';
import { SidenavVisibilityType } from '../../types/enums/sidenav-visibility-type.enum';
import * as fromLoaderReducer from '../reducers/layout.reducer';
import { LayoutSelectors } from './layout.selectors';

// tslint:disable-next-line: no-big-function
describe('LayoutSelectors', () => {
    describe('selectLeftPanelDisplayMode', () => {
        test('should returned WEB display mode', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                displayMode: DisplayMode.WEB,
            };

            expect(LayoutSelectors.selectLeftPanelDisplayMode.projector(state)).toBe(DisplayMode.WEB);
        });

        test('should returned MOBILE display mode', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                displayMode: DisplayMode.MOBILE,
            };

            expect(LayoutSelectors.selectLeftPanelDisplayMode.projector(state)).toBe(DisplayMode.MOBILE);
        });
    });

    describe('selectIsLeftPanelHovered', () => {
        test('should be hovered', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                hoverInLeftPanel: true,
            };

            expect(LayoutSelectors.selectIsLeftPanelHovered.projector(state)).toBe(true);
        });

        test('should not be hovered', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                hoverInLeftPanel: false,
            };

            expect(LayoutSelectors.selectIsLeftPanelHovered.projector(state)).toBe(false);
        });
    });

    describe('selectLeftPanelVisibilityType', () => {
        test('should returned that the right panel is folded', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                leftPanelVisibilityType: SidenavVisibilityType.FOLDED,
            };

            expect(LayoutSelectors.selectLeftPanelVisibilityType.projector(state)).toBe(SidenavVisibilityType.FOLDED);
        });

        test('should get that the right panel is expanded', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                leftPanelVisibilityType: SidenavVisibilityType.EXPANDED,
            };

            expect(LayoutSelectors.selectLeftPanelVisibilityType.projector(state)).toBe(SidenavVisibilityType.EXPANDED);
        });
    });

    describe('selectIsMobile', () => {
        test('should returned true when in mobile mode', () => {
            expect(LayoutSelectors.selectIsMobile.projector(DisplayMode.MOBILE)).toBe(true);
        });

        test('should returned false when not in mobile mode', () => {
            expect(LayoutSelectors.selectIsMobile.projector(DisplayMode.WEB)).toBe(false);
        });
    });

    describe('selectIsWeb', () => {
        test('should returned true when in web mode', () => {
            expect(LayoutSelectors.selectIsWeb.projector(DisplayMode.WEB)).toBe(true);
        });

        test('should returned false when not in mobile mode', () => {
            expect(LayoutSelectors.selectIsWeb.projector(DisplayMode.MOBILE)).toBe(false);
        });
    });

    describe('selectIsLeftPanelFolded', () => {
        test('should be folded when folded and not hovered', () => {
            const visibilityType = SidenavVisibilityType.FOLDED;
            const isHovered = false;
            expect(LayoutSelectors.selectIsLeftPanelFolded.projector(visibilityType, isHovered)).toBe(true);
        });

        test('should not be folded when folded and hovered', () => {
            const visibilityType = SidenavVisibilityType.FOLDED;
            const isHovered = true;
            expect(LayoutSelectors.selectIsLeftPanelFolded.projector(visibilityType, isHovered)).toBe(false);
        });

        test('should not be folded when expanded', () => {
            const visibilityType = SidenavVisibilityType.EXPANDED;
            const isHovered = false;
            expect(LayoutSelectors.selectIsLeftPanelFolded.projector(visibilityType, isHovered)).toBe(false);
        });

        test('should not be folded when hidden', () => {
            const visibilityType = SidenavVisibilityType.HIDDEN;
            const isHovered = false;
            expect(LayoutSelectors.selectIsLeftPanelFolded.projector(visibilityType, isHovered)).toBe(false);
        });
    });

    describe('selectIsLeftPanelOpened', () => {
        test('should be opened when is expanded', () => {
            expect(LayoutSelectors.selectIsLeftPanelOpened.projector(SidenavVisibilityType.EXPANDED)).toBe(true);
        });

        test('should be opened when is folded', () => {
            expect(LayoutSelectors.selectIsLeftPanelOpened.projector(SidenavVisibilityType.FOLDED)).toBe(true);
        });

        test('should be closed when is hidden', () => {
            expect(LayoutSelectors.selectIsLeftPanelOpened.projector(SidenavVisibilityType.HIDDEN)).toBe(false);
        });
    });

    describe('selectIsLeftPanelLockedExpanded', () => {
        test('should not be expanded when panel is folded', () => {
            expect(LayoutSelectors.selectIsLeftPanelLockedExpanded.projector(SidenavVisibilityType.FOLDED)).toBe(false);
        });

        test('should not be expanded when panel is hidden', () => {
            expect(LayoutSelectors.selectIsLeftPanelLockedExpanded.projector(SidenavVisibilityType.HIDDEN)).toBe(false);
        });

        test('should be expanded when panel is expanded', () => {
            expect(LayoutSelectors.selectIsLeftPanelLockedExpanded.projector(SidenavVisibilityType.EXPANDED)).toBe(
                true
            );
        });
    });

    describe('selectIsLeftPanelExpanded', () => {
        test('should not be expanded when panel not opened, not folded and not locked expanded', () => {
            const isOpened = false;
            const isFolded = false;
            const isLockedExpanded = false;
            expect(LayoutSelectors.selectIsLeftPanelExpanded.projector(isOpened, isFolded, isLockedExpanded)).toBe(
                false
            );
        });
        test('should not be expanded when panel not opened, is folded and not locked expanded', () => {
            const isOpened = false;
            const isFolded = true;
            const isLockedExpanded = false;
            expect(LayoutSelectors.selectIsLeftPanelExpanded.projector(isOpened, isFolded, isLockedExpanded)).toBe(
                false
            );
        });

        test('should not be expanded when panel not opened, not folded and is locked expanded', () => {
            const isOpened = false;
            const isFolded = false;
            const isLockedExpanded = true;
            expect(LayoutSelectors.selectIsLeftPanelExpanded.projector(isOpened, isFolded, isLockedExpanded)).toBe(
                false
            );
        });

        test('should not be expanded when panel not opened, is folded and is locked expanded', () => {
            const isOpened = false;
            const isFolded = true;
            const isLockedExpanded = true;
            expect(LayoutSelectors.selectIsLeftPanelExpanded.projector(isOpened, isFolded, isLockedExpanded)).toBe(
                false
            );
        });

        test('should be expanded when panel opened, is not folded and is not locked expanded', () => {
            const isOpened = true;
            const isFolded = false;
            const isLockedExpanded = false;
            expect(LayoutSelectors.selectIsLeftPanelExpanded.projector(isOpened, isFolded, isLockedExpanded)).toBe(
                true
            );
        });

        test('should be expanded when panel opened, is folded and is locked expanded', () => {
            const isOpened = true;
            const isFolded = true;
            const isLockedExpanded = true;
            expect(LayoutSelectors.selectIsLeftPanelExpanded.projector(isOpened, isFolded, isLockedExpanded)).toBe(
                true
            );
        });
    });

    describe('selectIsRightPanelFolded', () => {
        test('should get that the right panel is folded', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                rightPanelVisibilityType: SidenavVisibilityType.FOLDED,
            };

            expect(LayoutSelectors.selectIsRightPanelFolded.projector(state)).toBe(true);
        });

        test('should get that the right panel is expanded', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                rightPanelVisibilityType: SidenavVisibilityType.EXPANDED,
            };

            expect(LayoutSelectors.selectIsRightPanelFolded.projector(state)).toBe(false);
        });
    });

    describe('selectLeftPanelDrawerMode', () => {
        test('should return "over" when in mobile mode', () => {
            const isMobile = true;
            const visibilityType = SidenavVisibilityType.EXPANDED;
            expect(LayoutSelectors.selectLeftPanelDrawerMode.projector(isMobile, visibilityType)).toBe('over');
        });

        test('should return "over" when in folded and not in mobile mode', () => {
            const isMobile = false;
            const visibilityType = SidenavVisibilityType.FOLDED;
            expect(LayoutSelectors.selectLeftPanelDrawerMode.projector(isMobile, visibilityType)).toBe('over');
        });

        test('should return "side" when is expanded and not in mobile mode', () => {
            const isMobile = false;
            const visibilityType = SidenavVisibilityType.EXPANDED;
            expect(LayoutSelectors.selectLeftPanelDrawerMode.projector(isMobile, visibilityType)).toBe('side');
        });
    });
});
