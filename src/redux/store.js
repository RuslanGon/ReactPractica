import { combineReducers, createStore } from "redux";
import { mailboxReduser } from "./mailbox/mailboxReduser.js";
import { devToolsEnhancer } from "@redux-devtools/extension";

const rootReduser = combineReducers({
mailbox: mailboxReduser 
})

const enhancer = devToolsEnhancer();

export const store = createStore(rootReduser, enhancer)