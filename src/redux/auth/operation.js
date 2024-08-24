import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance, setToken } from "./authSlice.js";

export const apiRegistor = createAsyncThunk(
    "auth/register",
    async (formData, thunkApi) => {
      try {
        const {data} = await instance.post('/users/signup', formData);
        setToken(data.token)
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );