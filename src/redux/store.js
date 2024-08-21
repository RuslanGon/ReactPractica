import { combineReducers, createStore } from "redux";
import { mailboxReduser } from "./mailbox/mailboxReduser.js";

const rootReduser = combineReducers({
mailbox: mailboxReduser 
})

export const store = createStore(rootReduser)