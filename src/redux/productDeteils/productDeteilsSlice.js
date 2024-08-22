import { createSlice } from "@reduxjs/toolkit";
import { apiRequestProductDetailsById } from "./operation.js";

const initialState = {
    productDetails: null,
    isLoading: false,
    isError: false
};

const productDetailsSlice = createSlice({
  name: "productDetails",

  initialState: initialState,

  extraReducers: (builder) =>
    builder.
    addCase(apiRequestProductDetailsById.pending, (state) => {
      state.isLoading = true, 
      state.isError = false;
    })
    .addCase(apiRequestProductDetailsById.fulfilled, (state, action) => {
        state.isLoading = false, 
        state.productDetails = action.payload
        state.isError = false;
    })
    .addCase(apiRequestProductDetailsById.rejected, (state) => {
        state.isLoading = false, 
        state.isError = true;
    })
});

export const productDetailsReducer = productDetailsSlice.reducer;

