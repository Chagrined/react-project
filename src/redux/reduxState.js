import { combineReducers, createStore } from "redux";
import messageReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";

let reducers = combineReducers({
    profileReducer,
    messageReducer,
    sideBarReducer
})

let store = createStore(reducers);

export default store;