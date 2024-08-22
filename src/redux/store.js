
import { mailboxReducer } from "./mailbox/mailboxReduser.js";
import { configureStore } from "@reduxjs/toolkit";
import { timerReducer } from "./timer/timerSlice.js";


export const store = configureStore({
    reducer: {
        mailbox: mailboxReducer ,
        timer: timerReducer
    }
  });
  