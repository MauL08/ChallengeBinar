import { Alert } from 'react-native';
import axios from 'axios';
import { BASE_URL } from '../baseAPI';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { navigate } from '../../router/Navigate';

export const postLoginAuth = createAsyncThunk(
  'user/loginAuth',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, data);
      return response.data;
    } catch (error) {
      const logErr = error.response.data.message;
      Alert.alert('Error', logErr);
      return rejectWithValue(error.response.data);
    }
  },
);

export const postRegisterAuth = createAsyncThunk(
  'user/registerAuth',
  async data => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const initialState = {
  isSuccess: false,
  userInfo: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [postLoginAuth.pending]: () => {
      console.log('Pending');
    },
    [postLoginAuth.fulfilled]: (state, action) => {
      console.log('Success');
      navigate('Main');
      return {
        ...state,
        userInfo: action.payload,
      };
    },
    [postLoginAuth.rejected]: () => {
      console.log('Rejected');
    },
  },
});

export default userSlice.reducer;
