import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import favorite from './slices/favoriteSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    favorite,
    user: userReducer,
  },
});
