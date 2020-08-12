import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthFacade } from '@flashcards/frontend/shared/auth';
import { Observable } from 'rxjs';
import { LayoutFacade } from '../../+state/facade/layout.facade';
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
    public isMobile$: Observable<boolean> = this.layoutFacade.isMobile$;
    public isWeb$: Observable<boolean> = this.layoutFacade.isWeb$;
    public isUserLoggedIn$: Observable<boolean> = this.authFacade.isUseLoggedIn$;
    public isLeftPanelLockedExpanded$: Observable<boolean> = this.layoutFacade.isLeftPanelLockedExpanded$;

    public isLeftPanelFolded$: Observable<boolean> = this.layoutFacade.isLeftPanelFolded$;

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
            link: '/account',
            name: 'My Account',
            visibilityType: MenuVisibilityType.LOGGED_IN,
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

    public shouldDisplayLink(menuItem: MenuItemLink | MenuItemButton, isUserLoggedIn: boolean): boolean {
        return (
            menuItem.menuType === MenuItemType.LINK && this.shouldDisplayMenu(menuItem.visibilityType, isUserLoggedIn)
        );
    }
    public shouldDisplayButton(menuItem: MenuItemLink | MenuItemButton, isUserLoggedIn: boolean): boolean {
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

    public trackByMenuName(_index: number, el: any): number {
        return el.name;
    }

    public openLeftPanel(): void {
        console.log('openLeftPanel');
        this.layoutFacade.toggleLeftPanel();
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
