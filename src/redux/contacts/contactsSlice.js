import { createSlice } from "@reduxjs/toolkit";
import { apiGetContacts } from "./operation.js";

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
      .addCase(apiGetContacts.pending, (state) => {
        state.isLoading = true; 
        state.isError = false;
      })
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.isLoading = false; 
       
      })
      .addCase(apiGetContacts.rejected, (state) => {
        state.isLoading = false; 
        state.isError = true;
      })

});

export const contactsReducer = contactsSlice.reducer;
