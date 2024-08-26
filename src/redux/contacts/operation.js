import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/authSlice.js";

export const apiGetContacts = createAsyncThunk(
    "contacts/getContacts",
    async (_, thunkApi) => {
      try {
        const {data} = await instance.get('/contacts');
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );

  export const apiAddNewContacts = createAsyncThunk(
    "contacts/addNew",
    async (formData, thunkApi) => {
      try {
        const {data} = await instance.post('/contacts', formData);
        console.log(data);
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );