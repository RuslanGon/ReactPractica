
import { mailboxReducer } from "./mailbox/mailboxReduser.js";
import { configureStore } from "@reduxjs/toolkit";
import { timerReducer } from "./timer/timerSlice.js";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import { productDetailsReducer } from "./productDeteils/productDeteilsSlice.js";
import { authReducer } from "./auth/authSlice.js";


const mailboxPersistConfig = {
  key: 'mailbox',
  storage,
  whitelist: ['users'],
};

  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['users', 'token'], 
  };

export const store = configureStore({
    reducer: {
        mailbox: persistReducer(mailboxPersistConfig, mailboxReducer) ,
        timerCount: timerReducer,
        productDetails: productDetailsReducer,
        auth: persistReducer(authPersistConfig, authReducer) 
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
  });
  
  export const persistor = persistStore(store);