"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import CardContent from "../components/cardContent";
import Error from "../components/error";
import Loading from "../components/loading";
import { selectFavoriteCardIds } from "../features/favoritesSlice";
import { useGetPokemonQuery } from "../services/pokemonTCGApi";

function FavoritesPage() {
  const { data: pokemoncards, isLoading, isError } = useGetPokemonQuery();
  const cards = pokemoncards?.data ?? [];
  const favoriteCardIds = useSelector(selectFavoriteCardIds);

  const favoriteCards = useMemo(() => {
    if (!favoriteCardIds.length) {
      return [];
    }

    const favoriteIdsSet = new Set(favoriteCardIds);
    return cards.filter((card) => favoriteIdsSet.has(card.id));
  }, [cards, favoriteCardIds]);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="w-full flex-1 bg-teal-50 p-4 font-sans dark:bg-black sm:p-6">
      <div className="mx-auto mb-4 flex w-full max-w-3xl items-center justify-between gap-3">
        <Link
          href="/cards"
          className="rounded-xl border border-black/10 bg-teal-600 px-3 py-2 text-sm font-medium text-white transition hover:cursor-pointer hover:bg-teal-700 dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          Browse Cards
        </Link>
        <h1 className="text-lg font-bold text-teal-600 dark:text-zinc-100 sm:text-xl">
          Favorites
        </h1>
      </div>

      {favoriteCards.length > 0 ? (
        <div className="mx-auto grid w-full justify-items-center max-w-3xl grid-cols-1 gap-6 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
          {favoriteCards.map((card) => (
            <CardContent key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white p-6 text-center text-sm text-zinc-600 dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-300">
          No favorite cards yet. Open a card and tap the 'Add to Favorites' button to add it.
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;