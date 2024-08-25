import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiLogOut, apiLogin, apiRefreshUser, apiRegistor } from "./operation.js";

export const instance = axios.create({
    baseURL: 'https://connections-api.goit.global/docs/#/User/post_users_signup',
    // baseURL: "https://connections-api.goit.global",
    // headers: {
    //   Authorization: `Bearer ${localStorage.getItem('token')}`
    // }
})

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const cleanToken = () => {
  instance.defaults.headers.common.Authorization = '';
}

const initialState = {
  isSignedIn: false,
  userData: null,
  token: null,
  isLoading: false,
  isError: false
};

const authSlice = createSlice({

  name: "auth",

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

      .addCase(apiLogin.pending, (state) => {
        state.isLoading = true; 
        state.isError = false;
      })
      .addCase(apiLogin.fulfilled, (state, action) => {
        state.isLoading = false; 
        state.isSignedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiLogin.rejected, (state) => {
        state.isLoading = false; 
        state.isError = true;
      })

      .addCase(apiRefreshUser.pending, (state) => {
        state.isLoading = true; 
        state.isError = false;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isLoading = false; 
        state.isSignedIn = true;
        state.userData = action.payload;
      })
      .addCase(apiRefreshUser.rejected, (state) => {
        state.isLoading = false; 
        state.isError = true;
      })

      .addCase(apiLogOut.pending, (state) => {
        state.isLoading = true; 
        state.isError = false;
      })
      .addCase(apiLogOut.fulfilled, () => {
        return initialState;  // Сброс к начальному состоянию при успешном логауте
      })
      .addCase(apiLogOut.rejected, (state) => {
        state.isLoading = false; 
        state.isError = true;
      })

});

export const authReducer = authSlice.reducer;
