import { types } from '../types/types';

export const openSideBar = (rol) => {
    return {
        type: types.uiOpenSideBar,
        payload: rol
    };
}

export const closeSideBar = (rol) => {
    return {
        type: types.uiCloseSideBar,
        payload: rol
    };
}
export const activateItem = (index) => {
    return {
        type: types.uiActivateItem,
        payload: index
    };
}
export const deactivateItem = (index) => {
    return {
        type: types.uiDeactivateItem,
        payload: index
    };
}