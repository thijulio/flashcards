import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthFacade } from '@flashcards/frontend/shared/auth';
import { TranslatePipe } from '@ngx-translate/core';
import { MockModule, MockPipe } from 'ng-mocks';
import { LayoutFacade } from '../../data/+state/facade/layout.facade';
import { MaterialModule } from '../../material.module';
import { MenuItemType } from '../../types/enums/menu-item-type.enum';
import { MenuVisibilityType } from '../../types/enums/menu-visibility-type.enum';
import { MenuItemButton } from '../../types/interfaces/menu-item-button.interface';
import { MenuItemLink } from '../../types/interfaces/menu-item-link.interface';
import { HeaderToolbarComponent } from './header-toolbar.component';

const menuItemLink: MenuItemLink = {
    link: '/login',
    name: 'Login',
    visibilityType: MenuVisibilityType.LOGGED_IN,
    menuType: MenuItemType.LINK,
};

const menuItemButton: MenuItemButton = {
    name: 'Logout',
    visibilityType: MenuVisibilityType.LOGGED_IN,
    menuType: MenuItemType.BUTTON,
    callback: () => true,
};

describe('HeaderToolbarComponent', () => {
    let component: HeaderToolbarComponent;
    let fixture: ComponentFixture<HeaderToolbarComponent>;
    let layoutFacade: LayoutFacade;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderToolbarComponent, MockPipe(TranslatePipe)],
            imports: [RouterTestingModule, MockModule(FlexLayoutModule), MockModule(MaterialModule)],
            providers: [
                {
                    provide: LayoutFacade,
                    useValue: {
                        toggleLeftPanel: jest.fn(),
                    },
                },
                { provide: AuthFacade, useValue: {} },
            ],
        });

        fixture = TestBed.createComponent(HeaderToolbarComponent);
        component = fixture.componentInstance;
        layoutFacade = TestBed.inject(LayoutFacade);

        fixture.detectChanges();
    }));

    test('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('asMenuItemButton', () => {
        test('should cast to MenuItemLink', () => {
            expect(component.asMenuItemLink(menuItemLink)).toBe(menuItemLink);
        });
    });

    describe('asMenuItemButton', () => {
        test('should cast to MenuItemButton', () => {
            expect(component.asMenuItemButton(menuItemButton)).toBe(menuItemButton);
        });
    });

    describe('shouldDisplayLink', () => {
        test('should display link when menutype is link and menu is visible', () => {
            const isUserLoggedIn = true;

            const shouldDisplayLink = component.shouldDisplayLink(
                { ...menuItemLink, visibilityType: MenuVisibilityType.LOGGED_IN },
                isUserLoggedIn
            );

            expect(shouldDisplayLink).toBeTruthy();
        });

        test('should not display link when menutype is button', () => {
            const isUserLoggedIn = true;
            const shouldDisplayLink = component.shouldDisplayLink(menuItemButton, isUserLoggedIn);

            expect(shouldDisplayLink).toBeFalsy();
        });

        test('should not display link menu user is logged in and menu is only visible when logged out', () => {
            const isUserLoggedIn = true;

            const shouldDisplayLink = component.shouldDisplayLink(
                { ...menuItemLink, visibilityType: MenuVisibilityType.LOGGED_OUT },
                isUserLoggedIn
            );

            expect(shouldDisplayLink).toBeFalsy();
        });

        test('should not display link menu user is logged out and menu is only visible when logged in', () => {
            const isUserLoggedIn = false;

            const shouldDisplayLink = component.shouldDisplayLink(
                { ...menuItemLink, visibilityType: MenuVisibilityType.LOGGED_IN },
                isUserLoggedIn
            );

            expect(shouldDisplayLink).toBeFalsy();
        });
    });

    describe('shouldDisplayButton', () => {
        test('should display button when menutype is button and menu is visible', () => {
            const isUserLoggedIn = true;

            const shouldDisplayButton = component.shouldDisplayButton(
                { ...menuItemButton, visibilityType: MenuVisibilityType.LOGGED_IN },
                isUserLoggedIn
            );

            expect(shouldDisplayButton).toBeTruthy();
        });

        test('should not display button when menutype is link', () => {
            const isUserLoggedIn = true;
            const shouldDisplayButton = component.shouldDisplayButton(menuItemLink, isUserLoggedIn);

            expect(shouldDisplayButton).toBeFalsy();
        });

        test('should not display button menu user is logged in and menu is only visible when logged out', () => {
            const isUserLoggedIn = true;

            const shouldDisplayButton = component.shouldDisplayButton(
                { ...menuItemButton, visibilityType: MenuVisibilityType.LOGGED_OUT },
                isUserLoggedIn
            );

            expect(shouldDisplayButton).toBeFalsy();
        });

        test('should not display button menu user is logged out and menu is only visible when logged in', () => {
            const isUserLoggedIn = false;

            const shouldDisplayButton = component.shouldDisplayButton(
                { ...menuItemButton, visibilityType: MenuVisibilityType.LOGGED_IN },
                isUserLoggedIn
            );

            expect(shouldDisplayButton).toBeFalsy();
        });
    });

    describe('triggerCallback', () => {
        test('should trigger callback', () => {
            menuItemButton.callback = jest.fn();

            component.triggerCallback(menuItemButton.callback);
            component.triggerCallback(null);

            expect(menuItemButton.callback).toHaveBeenCalledTimes(1);
        });
    });

    describe('openLeftPanel', () => {
        test('should open left panel', () => {
            component.openLeftPanel();

            expect(layoutFacade.toggleLeftPanel).toHaveBeenCalled();
        });
    });
});
