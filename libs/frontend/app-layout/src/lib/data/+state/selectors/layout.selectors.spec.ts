import { DisplayMode } from '../../../types/enums/device-mode';
import { SidenavVisibilityType } from '../../../types/enums/sidenav-visibility-type.enum';
import * as fromLoaderReducer from '../reducers/layout.reducer';
import { LayoutSelectors } from './layout.selectors';

describe('LayoutSelectors', () => {
    describe('selectLeftPanelDisplayMode', () => {
        test('should return WEB', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                displayMode: DisplayMode.WEB,
            };

            expect(LayoutSelectors.selectLeftPanelDisplayMode.projector(state)).toBe(DisplayMode.WEB);
        });

        test('should return MOBILE', () => {
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

            expect(LayoutSelectors.selectIsLeftPanelHovered.projector(state)).toBeTruthy();
        });

        test('should not be hovered', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                hoverInLeftPanel: false,
            };

            expect(LayoutSelectors.selectIsLeftPanelHovered.projector(state)).toBeFalsy();
        });
    });

    describe('selectLeftPanelVisibilityType', () => {
        test('should be folded', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                leftPanelVisibilityType: SidenavVisibilityType.FOLDED,
            };

            expect(LayoutSelectors.selectLeftPanelVisibilityType.projector(state)).toBe(SidenavVisibilityType.FOLDED);
        });

        test('should be expanded', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                leftPanelVisibilityType: SidenavVisibilityType.EXPANDED,
            };

            expect(LayoutSelectors.selectLeftPanelVisibilityType.projector(state)).toBe(SidenavVisibilityType.EXPANDED);
        });
    });

    describe('selectRightPanelVisibilityType', () => {
        test('should be folded', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                rightPanelVisibilityType: SidenavVisibilityType.FOLDED,
            };

            expect(LayoutSelectors.selectRightPanelVisibilityType.projector(state)).toBe(SidenavVisibilityType.FOLDED);
        });

        test('should be expanded', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                rightPanelVisibilityType: SidenavVisibilityType.EXPANDED,
            };

            expect(LayoutSelectors.selectRightPanelVisibilityType.projector(state)).toBe(
                SidenavVisibilityType.EXPANDED
            );
        });
    });

    describe('selectIsMobile', () => {
        test('should be true', () => {
            expect(LayoutSelectors.selectIsMobile.projector(DisplayMode.MOBILE)).toBeTruthy();
        });

        test('should be false', () => {
            expect(LayoutSelectors.selectIsMobile.projector(DisplayMode.WEB)).toBeFalsy();
        });
    });

    describe('selectIsWeb', () => {
        test('should be true', () => {
            expect(LayoutSelectors.selectIsWeb.projector(DisplayMode.WEB)).toBeTruthy();
        });

        test('should be false', () => {
            expect(LayoutSelectors.selectIsWeb.projector(DisplayMode.MOBILE)).toBeFalsy();
        });
    });

    describe('selectIsLeftPanelFolded', () => {
        test('should be folded when folded and not hovered', () => {
            const visibilityType = SidenavVisibilityType.FOLDED;
            const isHovered = false;
            expect(LayoutSelectors.selectIsLeftPanelFolded.projector(visibilityType, isHovered)).toBeTruthy();
        });

        test('should not be folded when folded and hovered', () => {
            const visibilityType = SidenavVisibilityType.FOLDED;
            const isHovered = true;
            expect(LayoutSelectors.selectIsLeftPanelFolded.projector(visibilityType, isHovered)).toBeFalsy();
        });

        test('should not be folded when expanded', () => {
            const visibilityType = SidenavVisibilityType.EXPANDED;
            const isHovered = false;
            expect(LayoutSelectors.selectIsLeftPanelFolded.projector(visibilityType, isHovered)).toBeFalsy();
        });

        test('should not be folded when hidden', () => {
            const visibilityType = SidenavVisibilityType.HIDDEN;
            const isHovered = false;
            expect(LayoutSelectors.selectIsLeftPanelFolded.projector(visibilityType, isHovered)).toBeFalsy();
        });
    });

    describe('selectIsLeftPanelOpened', () => {
        test('should be opened when is expanded', () => {
            expect(LayoutSelectors.selectIsLeftPanelOpened.projector(SidenavVisibilityType.EXPANDED)).toBeTruthy();
        });

        test('should be opened when is folded', () => {
            expect(LayoutSelectors.selectIsLeftPanelOpened.projector(SidenavVisibilityType.FOLDED)).toBeTruthy();
        });

        test('should be closed when is hidden', () => {
            expect(LayoutSelectors.selectIsLeftPanelOpened.projector(SidenavVisibilityType.HIDDEN)).toBeFalsy();
        });
    });

    describe('selectIsLeftPanelLockedExpanded', () => {
        test('should not be expanded when panel is folded', () => {
            expect(LayoutSelectors.selectIsLeftPanelLockedExpanded.projector(SidenavVisibilityType.FOLDED)).toBeFalsy();
        });

        test('should not be expanded when panel is hidden', () => {
            expect(LayoutSelectors.selectIsLeftPanelLockedExpanded.projector(SidenavVisibilityType.HIDDEN)).toBeFalsy();
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

    describe('selectIsRightPanelFolded', () => {
        test('should be folded', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                rightPanelVisibilityType: SidenavVisibilityType.FOLDED,
            };

            expect(LayoutSelectors.selectIsRightPanelFolded.projector(state)).toBeTruthy();
        });

        test('should be expanded', () => {
            const state = {
                ...fromLoaderReducer.initialState,
                rightPanelVisibilityType: SidenavVisibilityType.EXPANDED,
            };

            expect(LayoutSelectors.selectIsRightPanelFolded.projector(state)).toBeFalsy();
        });
    });

    describe('selectIsRightPanelHidden', () => {
        test('should be hidden', () => {
            const visibilityType = SidenavVisibilityType.HIDDEN;
            expect(LayoutSelectors.selectIsRightPanelHidden.projector(visibilityType)).toBeTruthy();
        });

        test('should be not hidden when folded', () => {
            const visibilityType = SidenavVisibilityType.FOLDED;
            expect(LayoutSelectors.selectIsRightPanelHidden.projector(visibilityType)).toBeFalsy();
        });

        test('should be not hidden when expanded', () => {
            const visibilityType = SidenavVisibilityType.EXPANDED;
            expect(LayoutSelectors.selectIsRightPanelHidden.projector(visibilityType)).toBeFalsy();
        });
    });

    describe('selectIsRightPanelVisible', () => {
        test('should be visible', () => {
            const isHidden = false;
            expect(LayoutSelectors.selectIsRightPanelVisible.projector(isHidden)).toBeTruthy();
        });

        test('should not be visible', () => {
            const isHidden = true;

            expect(LayoutSelectors.selectIsRightPanelVisible.projector(isHidden)).toBeFalsy();
        });
    });

    describe('selectIsLeftPanelHidden', () => {
        test('should be hidden', () => {
            const visibilityType = SidenavVisibilityType.HIDDEN;
            expect(LayoutSelectors.selectIsLeftPanelHidden.projector(visibilityType)).toBeTruthy();
        });

        test('should be not hidden when folded', () => {
            const visibilityType = SidenavVisibilityType.FOLDED;
            expect(LayoutSelectors.selectIsLeftPanelHidden.projector(visibilityType)).toBeFalsy();
        });

        test('should be not hidden when expanded', () => {
            const visibilityType = SidenavVisibilityType.EXPANDED;
            expect(LayoutSelectors.selectIsLeftPanelHidden.projector(visibilityType)).toBeFalsy();
        });
    });

    describe('selectLeftPanelHasBackdrop', () => {
        test('should have backdrop on mobile', () => {
            const isMobile = true;
            expect(LayoutSelectors.selectLeftPanelHasBackdrop.projector(isMobile)).toBeTruthy();
        });

        test('should not have backdrop on web', () => {
            const isMobile = false;
            expect(LayoutSelectors.selectLeftPanelHasBackdrop.projector(isMobile)).toBeFalsy();
        });
    });
});
