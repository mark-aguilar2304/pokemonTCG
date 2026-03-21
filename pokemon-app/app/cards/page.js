'use client';
import { useState, useEffect } from "react";
import CardContent from "../components/cardContent";
import Loading from "../components/loading";
import { useGetPokemonQuery } from "../services/pokemonTCGApi";
import SearchBar from "../components/searchbar";

export default function Home() {
  const { data: pokemoncards, isLoading, isError } = useGetPokemonQuery();
  const cards = pokemoncards?.data ?? [];
  const [search, setSearch] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    console.log(search);
  }, [search]);

  useEffect(() => {
    const filtered = cards.filter((card) =>
      card.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCards(filtered);
  }, [search, cards]);

  if (isLoading)
    return (
      <Loading/>
    );
  if (isError) return <div>Error occurred while fetching Pokemon data.</div>;

  return (
    <div className="w-full flex-1 bg-zinc-50 p-4 font-sans dark:bg-black sm:p-6">
      <SearchBar value={search} setSearch={setSearch}/>
      <div className="mx-auto grid w-full sm:w-3/4 lg:w-3/4 justify-items-center max-w-3xl grid-cols-1 gap-6 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
        {filteredCards.map((card) => (
          <CardContent key={card.id} card={card} />
        ))}
      </div>

      {filteredCards.length === 0 && (
        <p className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-300">
          No cards found.
        </p>
      )}
    </div>
  );
}
