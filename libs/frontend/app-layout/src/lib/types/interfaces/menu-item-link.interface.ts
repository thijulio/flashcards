import { MenuItemType } from '../enums/menu-item-type.enum';
import { MenuVisibilityType } from '../enums/menu-visibility-type.enum';

export interface MenuItemLink {
    link: string;
    name: string;
    visibilityType: MenuVisibilityType;
    menuType: MenuItemType.LINK;
}
