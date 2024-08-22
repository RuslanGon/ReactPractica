import { createSlice } from "@reduxjs/toolkit";
import { apiGetProducts, apiRequestProductDetailsById } from "./operation.js";

const initialState = {
    productDetails: null,
    products: null,
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
    })
    .addCase(apiRequestProductDetailsById.rejected, (state) => {
        state.isLoading = false, 
        state.isError = true;
    })

    
    .addCase(apiGetProducts.pending, (state) => {
      state.isLoading = true, 
      state.isError = false;
    } )
    .addCase(apiGetProducts.fulfilled, (state, action) => {
      state.isLoading = false, 
      state.products = action.payload.products
    })
    .addCase(apiGetProducts.rejected, (state) => {
      state.isLoading = false, 
      state.isError = true;
    })
});

export const productDetailsReducer = productDetailsSlice.reducer;

