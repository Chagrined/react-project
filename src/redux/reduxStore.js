import { combineReducers, createStore } from "redux";
import messageReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: messageReducer,
    sideBar: sideBarReducer
});

let store = createStore(reducers);


export default store;