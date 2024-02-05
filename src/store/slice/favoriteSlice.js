import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,

  reducers: {
    addFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    deleteFavorite(state, { payload }) {
      const index = state.favorites.findIndex(car => car.id === payload);
      state.favorites.splice(index, 1);
      },
  },
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
