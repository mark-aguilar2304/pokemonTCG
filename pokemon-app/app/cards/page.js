'use client';
import { useEffect } from "react";
import CardContent from "../components/cardContent";
import Loading from "../components/loading";
import { useGetPokemonQuery } from "../services/pokemonTCGApi";

export default function Home() {
  const { data: pokemoncards, isLoading, isError } = useGetPokemonQuery();

  useEffect(() => {
    console.log(pokemoncards);
  }, [pokemoncards]);

  const cards = pokemoncards?.data ?? [];

  if (isLoading)
    return (
      <Loading/>
    );
  if (isError) return <div>Error occurred while fetching Pokemon data.</div>;
  
  console.log(cards);

  return (
    <div className="w-full flex-1 bg-zinc-50 p-4 font-sans dark:bg-black sm:p-6">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <CardContent key={card.id} card={card} />
        ))}
      </div>

      {cards.length === 0 && (
        <p className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-300">
          No cards found.
        </p>
      )}
    </div>
  );
}
