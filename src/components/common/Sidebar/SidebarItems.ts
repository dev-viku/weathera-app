/* eslint-disable prettier/prettier */
export interface SidebarItem {
    title: string;
    activeIcon: any;
    inActiveIcon?: any;
    hasChildrens: boolean;
    childrens: SidebarChildren[];
    route: string;
}

export interface SidebarChildren {
    title: string;
    activeIcon: any;
    inActiveIcon?: any;
    route: string;
}

export function generateSidebarItems() {
    const home: SidebarItem = {
        title: 'home',
        activeIcon: '',
        inActiveIcon: '',
        hasChildrens: false,
        childrens: [],
        route: '/',
    };
    const cities: SidebarItem = {
        title: 'cities',
        activeIcon: '',
        inActiveIcon: '',
        hasChildrens: false,
        childrens: [],
        route: 'cities',
    };
    return [home, cities];
}
