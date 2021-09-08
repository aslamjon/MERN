import { createSelector } from "reselect";

const selectSidebar = state => state.value;

export const viewSidebarCondition = createSelector(
    [selectSidebar],
    (value) => value.sidebarCondition
)