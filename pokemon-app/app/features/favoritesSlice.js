import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardIds: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const cardId = action.payload;

      if (!cardId) {
        return;
      }

      const existingIndex = state.cardIds.indexOf(cardId);

      if (existingIndex >= 0) {
        state.cardIds.splice(existingIndex, 1);
        return;
      }

      state.cardIds.push(cardId);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export const selectFavoriteCardIds = (state) => state.favorites.cardIds;
export const selectIsFavorite = (cardId) => (state) =>
  state.favorites.cardIds.includes(cardId);

export default favoritesSlice.reducer;
