import { SidebarTypes } from './sidebar.type';

export const changeSidebar = item => ({
    type: SidebarTypes.CHANGE_SIDEBAR,
    payload: item
})
