import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import booksSlice from './slice/booksSlice';
import userSlice from './slice/userSlice';
import globalSlice from './slice/globalSlice';

// const persistConfig = {
//   key: 'Key-App',
//   storage: AsyncStorage,
//   timeout: null,
//   whitelist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, {
//   user: userSlice,
//   books: booksSlice,
// });

export const store = configureStore({
  // reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userSlice,
    books: booksSlice,
    global: globalSlice,
  },
});

// export const persistor = persistStore(store);
