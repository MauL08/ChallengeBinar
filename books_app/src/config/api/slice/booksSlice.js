import axios from 'axios';
import { BASE_URL } from '../baseAPI';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getAllBooks = createAsyncThunk('books/allBooks', async () => {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getBooksByID = createAsyncThunk('books/booksByID', async id => {
  try {
    const response = await axios.get(`${BASE_URL}/books/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  books: {},
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
        books: action.payload,
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
        books: action.payload,
      };
    },
    [getBooksByID.rejected]: () => {
      console.log('Rejected');
    },
  },
});

export default booksSlice.reducer;
