import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonTCGApi = createApi({
  reducerPath: 'pokemonTCGApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.pokemontcg.io/v2/' }),
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: () => 'cards',
    }),
  }),
});

export const { useGetPokemonQuery } = pokemonTCGApi;