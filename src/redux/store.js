import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import tokenReducer from './tokenSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    token: tokenReducer
  },
});
