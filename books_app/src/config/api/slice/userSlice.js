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
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      const logErr = error.response.data.message;
      Alert.alert('Error', logErr);
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  userInfo: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    // Post Login
    [postLoginAuth.pending]: () => {
      console.log('Pending');
    },
    [postLoginAuth.fulfilled]: (state, action) => {
      console.log('Login Success');
      navigate('Main');
      return {
        ...state,
        userInfo: action.payload,
      };
    },
    [postLoginAuth.rejected]: () => {
      console.log('Rejected');
    },
    // Post Register
    [postRegisterAuth.pending]: () => {
      console.log('Pending');
    },
    [postRegisterAuth.fulfilled]: (state, action) => {
      console.log('Register Success');
      navigate('Success');
      return {
        ...state,
        userInfo: action.payload,
      };
    },
    [postRegisterAuth.rejected]: () => {
      console.log('Rejected');
    },
  },
});

export default userSlice.reducer;
