import { configureStore } from '@reduxjs/toolkit';
import { pokemonTCGApi } from './services/pokemonTCGApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [pokemonTCGApi.reducerPath]: pokemonTCGApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonTCGApi.middleware),
});

setupListeners(store.dispatch);