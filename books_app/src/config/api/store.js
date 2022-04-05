import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import booksSlice from './slice/booksSlice';
import userSlice from './slice/userSlice';
import globalSlice from './slice/globalSlice';

const reducers = combineReducers({
  user: userSlice,
  books: booksSlice,
  global: globalSlice,
});

const persistConfig = {
  key: 'Key-App',
  storage: AsyncStorage,
  timeout: null,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);
