import axios from 'axios';
import { BASE_URL } from '../baseAPI';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setLoading } from './globalSlice';
import { store } from '../store';

const token = store.getState().user.token;

axios.defaults.headers.Authorization = `Bearer ${token}`;

axios.defaults.validateStatus = status => {
  return status < 500;
};

export const getAllBooks = createAsyncThunk(
  'books/allBooks',
  async ({ dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`${BASE_URL}/books`);
      return response.data;
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const getBooksByID = createAsyncThunk('books/booksByID', async id => {
  try {
    const response = await axios.get(`${BASE_URL}/books/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  booksData: {},
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [getAllBooks.fulfilled]: (state, action) => {
      console.log('Get Books Success');
      return {
        ...state,
        booksData: action.payload,
      };
    },
    [getBooksByID.fulfilled]: (state, action) => {
      console.log('Get Books by ID Success');
      return {
        ...state,
        booksData: action.payload,
      };
    },
  },
});

export default booksSlice.reducer;
