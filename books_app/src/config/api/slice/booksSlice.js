import axios from 'axios';
import { BASE_URL } from '@env';
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// export const fetchBooks = () = async dispatch => {
//   await axios
//     .get(`${BASE_URL}/books`)
//     .then(res => {
//       return res.data;
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

const initialState = {
  books: {},
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {},
});

const { action, reducer } = booksSlice;
export default reducer;
