import axios from 'axios';
import { BASE_URL } from '../baseAPI';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { store } from '../store';

// const token = store.getState().user.token;

// axios.defaults.headers.Authorization = `Bearer ${token}`;

export const getAllBooks = createAsyncThunk('books/allBooks', async token => {
  try {
    const response = await axios.get(`${BASE_URL}/books`, {
      Authorization: `Bearer ${token}`,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getBooksByID = createAsyncThunk(
  'books/booksByID',
  async (token, id) => {
    try {
      const response = await axios.get(`${BASE_URL}/books/${id}`, {
        Authorization: `Bearer ${token}`,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const initialState = {
  booksData: {},
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [getAllBooks.pending]: () => {
      console.log('Pending');
    },
    [getAllBooks.fulfilled]: (state, action) => {
      console.log('Get Books Success');
      return {
        ...state,
        booksData: action.payload,
      };
    },
    [getAllBooks.rejected]: () => {
      console.log('Rejected');
    },
    [getBooksByID.pending]: () => {
      console.log('Pending');
    },
    [getBooksByID.fulfilled]: (state, action) => {
      console.log('Get Books by ID Success');
      return {
        ...state,
        booksData: action.payload,
      };
    },
    [getBooksByID.rejected]: () => {
      console.log('Rejected');
    },
  },
});

export default booksSlice.reducer;
