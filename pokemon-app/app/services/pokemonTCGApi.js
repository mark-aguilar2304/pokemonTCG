import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonTCGApi = createApi({
  reducerPath: 'pokemonTCGApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.pokemontcg.io/v2/' }),
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: ({ page = 1, pageSize = 24, search = '', type = 'all' } = {}) => {
        const params = new URLSearchParams({
          page: String(page),
          pageSize: String(pageSize),
        });

        const filters = [];
        const trimmedSearch = search.trim();

        if (trimmedSearch) {
          filters.push(`name:*${trimmedSearch}*`);
        }

        if (type && type !== 'all') {
          filters.push(`types:${type}`);
        }

        if (filters.length > 0) {
          params.set('q', filters.join(' '));
        }

        return `cards?${params.toString()}`;
      },
    }),
    getPokemonById: builder.query({
      query: (id) => `cards/${id}`,
    }),
    getPokemonByIds: builder.query({
      query: (ids = []) => {
        const normalizedIds = Array.isArray(ids) ? ids.filter(Boolean) : [];
        const params = new URLSearchParams();
        const idQuery = normalizedIds.map((id) => `id:${id}`).join(' OR ');

        params.set('page', '1');
        params.set('pageSize', String(Math.max(normalizedIds.length, 1)));
        params.set('q', idQuery);

        return `cards?${params.toString()}`;
      },
    }),
    getCardTypes: builder.query({
      query: () => 'types',
    }),
  }),
});

export const {
  useGetPokemonQuery,
  useGetPokemonByIdQuery,
  useGetPokemonByIdsQuery,
  useGetCardTypesQuery,
} = pokemonTCGApi;