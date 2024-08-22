
import { mailboxReducer } from "./mailbox/mailboxReduser.js";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        mailbox: mailboxReducer 
    }
  });
  