import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  prod: [],
};

const statePrice = (state, action, prod) => {
  state.totalPrice = state.prod.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavoriteTo(state, action) {
      const findItem = state.prod.find((obj) => obj.id == action.payload.id);
      if (findItem) {
        // findItem.count++;
      } else {
        state.prod.push({
          ...action.payload,
          count: 1,
        });
      }

      // statePrice(state, action);
    },

    removeItem(state, action) {
      state.prod = state.prod.filter((obj) => obj.id !== action.payload);
      statePrice(state, action);
    },

    clearItems(state) {
      state.prod = [];
      // state.totalPrice = 0;
    },
  },
});

export const { removeItem, clearItems, addFavoriteTo } = favoriteSlice.actions;

export default favoriteSlice.reducer;
