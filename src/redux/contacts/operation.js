import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/authSlice.js";

export const apiGetContacts = createAsyncThunk(
    "contacts/getContacts",
    async (thunkApi) => {
      try {
        const {data} = await instance.пуе('/contacts');
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );