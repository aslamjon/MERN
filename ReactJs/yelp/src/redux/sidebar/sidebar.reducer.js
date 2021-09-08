import { SidebarTypes } from './sidebar.type';

const INITIAL_STATE = {
    sidebarCondition: true
}
const SidebarReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SidebarTypes.CHANGE_SIDEBAR:
            return {
                ...state,
                sidebarCondition: action.payload
            }
        default:
            return state;
    }
}
export default SidebarReduser;