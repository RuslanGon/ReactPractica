import { createAsyncThunk } from "@reduxjs/toolkit";
import { cleanToken, instance, setToken } from "./authSlice.js";

export const apiRegistor = createAsyncThunk(
    "auth/register",
    async (formData, thunkApi) => {
      try {
        const {data} = await instance.post('/users/signup', formData);
        setToken(data.token);
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );


  export const apiLogin = createAsyncThunk(
    "auth/login",
    async (formData, thunkApi) => {
      try {
        const {data} = await instance.post('/users/login', formData);
        setToken(data.token);
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );


  export const apiRefreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkApi) => {
      try {
        const state = thunkApi.getState()
        const token = state.auth.token;
        setToken(token);

        const {data} = await instance.get('/users/current');
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );


  export const apiLogOut = createAsyncThunk(
    "auth/logout",
    async (_, thunkApi) => {
      try {
       await instance.post('/users/logout');
        cleanToken();
        return;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );