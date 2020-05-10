import { MenuItemType } from '../enums/menu-item-type.enum';
import { MenuVisibilityType } from '../enums/menu-visibility-type.enum';

export interface MenuItemButton {
    name: string;
    visibilityType: MenuVisibilityType;
    menuType: MenuItemType.BUTTON;
    callback: () => void;
}
