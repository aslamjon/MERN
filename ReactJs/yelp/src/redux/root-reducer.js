import { combineReducers } from "redux";
import cardReducer from "./card/card.reducer";
import SidebarReduser from "./sidebar/sidebar.reducer";


const rootReducer = combineReducers({
    card: cardReducer,
    value: SidebarReduser,
});

export default rootReducer;