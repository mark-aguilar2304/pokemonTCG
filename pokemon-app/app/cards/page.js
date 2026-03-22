'use client';
import { useEffect, useMemo, useState } from "react";
import CardContent from "../components/cardContent";
import Loading from "../components/loading";
import Error from "../components/error";
import { useGetPokemonQuery } from "../services/pokemonTCGApi";
import SearchBar from "../components/searchbar";
import TypeFilter from "../components/typefilter";

export default function Home() {
  const { data: pokemoncards, isLoading, isError } = useGetPokemonQuery();
  const cards = pokemoncards?.data ?? [];
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [startIndex, setStartIndex] = useState(0);
  const [numberPerPage, setNumberPerPage] = useState(12);

  const nextPage = () =>{
    setStartIndex(prev=>prev+12);
    setNumberPerPage(prev=>prev+12);
  }

  const prevPage = () =>{
    setStartIndex(prev=>prev-12);
    setNumberPerPage(prev=>prev-12);
  }
  
  useEffect(() => {
    console.log(startIndex, numberPerPage);
  },[startIndex, numberPerPage])

  const typeOptions = useMemo(() => {
    const typeSet = new Set(
      cards.flatMap((card) => (Array.isArray(card.types) ? card.types : []))
    );
    return Array.from(typeSet).sort((a, b) => a.localeCompare(b));
  }, [cards]);

  const filteredCards = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return cards.filter((card) => {
      const matchesSearch = card.name
        .toLowerCase()
        .includes(normalizedSearch);

      if (selectedType === "all") {
        return matchesSearch;
      }

      const cardTypes = Array.isArray(card.types) ? card.types : [];
      const matchesType = cardTypes.includes(selectedType);
      return matchesSearch && matchesType;
    });
  }, [cards, search, selectedType]);

  if (isLoading) return <Loading/>;
  if (isError) return <Error />;

  return (
    <div className="w-full flex-1 bg-zinc-50 p-4 font-sans dark:bg-black sm:p-6 font-sans">
      <SearchBar 
        value={search} 
        setSearch={setSearch}
      />
      <TypeFilter
        options={typeOptions}
        value={selectedType}
        onChange={setSelectedType}
      />
      <div className="mx-auto grid w-full sm:w-3/4 lg:w-3/4 justify-items-center max-w-3xl grid-cols-1 gap-6 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
        {filteredCards.slice(startIndex, numberPerPage).map((card) => (
          <CardContent 
            key={card.id} 
            card={card}
          />
        ))}
      </div>

      {filteredCards.length === 0 && (
        <p className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-300">
          No cards found.
        </p>
      )}

      <div className="mx-auto mb-4 flex w-full max-w-4xl items-center justify-center gap-3 py-10">
        <button
          onClick={()=>{prevPage()}}
          disabled={startIndex <= 0}
          className="rounded-xl border w-1/8 border-black/10 bg-red-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-600 dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          Previous
        </button>
        <button
          onClick={()=>{nextPage()}}
          disabled={numberPerPage >= filteredCards.length}
          className="rounded-xl border w-1/8 border-black/10 bg-red-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-600 dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          Next
        </button>
      </div>
    </div>
  );
}
