import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthFacade } from '@flashcards/frontend/shared/auth';
import { Observable } from 'rxjs';
import { LayoutFacade } from '../../state/facade/layout.facade';
import { MenuItemType } from '../../types/enums/menu-item-type.enum';
import { MenuVisibilityType } from '../../types/enums/menu-visibility-type.enum';
import { MenuItemButton } from '../../types/interfaces/menu-item-button.interface';
import { MenuItemLink } from '../../types/interfaces/menu-item-link.interface';

@Component({
    selector: 'flashcards-header-toolbar',
    templateUrl: './header-toolbar.component.html',
    styleUrls: ['./header-toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderToolbarComponent {
    constructor(private readonly layoutFacade: LayoutFacade, private readonly authFacade: AuthFacade) {}
    public isHandset$: Observable<boolean> = this.layoutFacade.isHandset$;
    public isUserLoggedIn$: Observable<boolean> = this.authFacade.isUseLoggedIn$;
    public isViewInitialized: boolean = false;

    public menus: (MenuItemLink | MenuItemButton)[] = [
        {
            link: '/',
            name: 'Home',
            visibilityType: MenuVisibilityType.AWAYS,
            menuType: MenuItemType.LINK,
        },
        {
            link: '/about',
            name: 'About',
            visibilityType: MenuVisibilityType.AWAYS,
            menuType: MenuItemType.LINK,
        },
        {
            link: '/register',
            name: 'Register',
            visibilityType: MenuVisibilityType.LOGGED_OUT,
            menuType: MenuItemType.LINK,
        },
        {
            link: '/login',
            name: 'Login',
            visibilityType: MenuVisibilityType.LOGGED_OUT,
            menuType: MenuItemType.LINK,
        },
        {
            name: 'Logout',
            visibilityType: MenuVisibilityType.LOGGED_IN,
            menuType: MenuItemType.BUTTON,
            callback: () => {
                this.authFacade.logout();
            },
        },
    ];

    public asMenuItemLink(val: MenuItemLink): MenuItemLink {
        return val;
    }

    public asMenuItemButton(val: MenuItemButton): MenuItemButton {
        return val;
    }

    public trackByMethod(_index: number, el: any): number {
        return el.name;
    }

    public shouldDisplayLink(menuItem: MenuItemLink, isUserLoggedIn: boolean): boolean {
        return (
            menuItem.menuType === MenuItemType.LINK && this.shouldDisplayMenu(menuItem.visibilityType, isUserLoggedIn)
        );
    }
    public shouldDisplayButton(menuItem: MenuItemButton, isUserLoggedIn: boolean): boolean {
        return (
            menuItem.menuType === MenuItemType.BUTTON && this.shouldDisplayMenu(menuItem.visibilityType, isUserLoggedIn)
        );
    }

    public triggerCallback(callback: () => void): void {
        if (!callback) {
            return;
        }

        callback();
    }

    private shouldDisplayMenu(visibilityType: MenuVisibilityType, isUserLoggedIn: boolean): boolean {
        switch (visibilityType) {
            case MenuVisibilityType.LOGGED_IN:
                return isUserLoggedIn;
            case MenuVisibilityType.LOGGED_OUT:
                return !isUserLoggedIn;
            default:
                return true;
        }
    }
}
