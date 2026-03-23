import { configureStore } from '@reduxjs/toolkit';
import { pokemonTCGApi } from './services/pokemonTCGApi';
import favoritesReducer from './features/favoritesSlice';
// import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [pokemonTCGApi.reducerPath]: pokemonTCGApi.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(pokemonTCGApi.middleware),
});

// setupListeners(store.dispatch);