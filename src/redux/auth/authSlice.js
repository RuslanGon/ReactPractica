import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiRegistor } from "./operation.js";

export const instance = axios.create({
    baseURL: 'https://connections-api.goit.global/docs/#/User/post_users_signup'
})

export const setToken = (token) => {
instance.defaults.headers.common.Authorization = ` Bearer ${token}`
}

export const cleanToken = () => {
instance.defaults.headers.common.Authorization = ''
}

const initialState = {
    isSignedIn: false,
    userData: null,
    token: null,
    isLoading: false,
    isError: false
};

const authSlice = createSlice({
  // Ім'я слайсу
  name: "auth",
  // Початковий стан редюсера слайсу
  initialState: initialState,

  extraReducers: (builder) =>
    builder.
    addCase(apiRegistor.pending, (state) => {
      state.isLoading = true, 
      state.isError = false;
    })
    .addCase(apiRegistor.fulfilled, (state, action) => {
        state.isLoading = false, 
        state.isSignedIn = true,
        state.userData = action.payload.user
        state.token = action.payload.token
    })
    .addCase(apiRegistor.rejected, (state) => {
        state.isLoading = false, 
        state.isError = true;
    })
});

// Редюсер слайсу
export const authReducer = authSlice.reducer;