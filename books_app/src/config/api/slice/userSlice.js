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
  isLogged: false,
  userInfo: {},
  token: {},
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
      return {
        ...state,
        isLogged: true,
        userInfo: action.payload.user,
        token: action.payload.tokens.access.token,
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
        userInfo: action.payload.user,
        token: action.payload.tokens.access.token,
      };
    },
    [postRegisterAuth.rejected]: () => {
      console.log('Rejected');
    },
  },
});

export default userSlice.reducer;
