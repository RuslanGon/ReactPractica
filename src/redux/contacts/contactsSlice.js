import { createSlice } from "@reduxjs/toolkit";

import { apiRegistor } from "./operation.js";


const initialState = {
  contacts: null,
  isLoading: false,
  isError: false
};

const contactsSlice = createSlice({

  name: "contacts",

  initialState: initialState,

  extraReducers: (builder) =>
    builder
      .addCase(apiRegistor.pending, (state) => {
        state.isLoading = true; 
        state.isError = false;
      })
      .addCase(apiRegistor.fulfilled, (state, action) => {
        state.isLoading = false; 
        state.isSignedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiRegistor.rejected, (state) => {
        state.isLoading = false; 
        state.isError = true;
      })

});

export const contactsReducer = contactsSlice.reducer;
