import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/authSlice.js";
import axios from "axios";

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
  

  export const apiDeleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
      try {
        await axios.delete(`/contacts/${contactId}`);
        return contactId;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );