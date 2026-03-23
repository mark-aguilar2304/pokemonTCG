'use client';

import { useEffect, useMemo, useState } from "react";
import CardContent from "../components/cardContent";
import Loading from "../components/loading";
import Error from "../components/error";
import { useGetCardTypesQuery, useGetPokemonQuery } from "../services/pokemonTCGApi";
import SearchBar from "../components/searchbar";
import TypeFilter from "../components/typefilter";

export default function Home() {
  const pageSize = 24;
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: pokemoncards,
    isLoading,
    isFetching,
    isError,
  } = useGetPokemonQuery({
    page: currentPage,
    pageSize,
    search: debouncedSearch,
    type: selectedType,
  });

  const {
    data: cardTypesResponse,
    isLoading: isTypesLoading,
    isError: isTypesError,
  } = useGetCardTypesQuery();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [search]);

  const cards = pokemoncards?.data ?? [];
  const totalCount = pokemoncards?.totalCount ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  const handleSearchChange = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleTypeChange = (value) => {
    setSelectedType(value);
    setCurrentPage(1);
  };

  const typeOptions = useMemo(() => {
    if (!Array.isArray(cardTypesResponse?.data)) {
      return [];
    }

    return [...cardTypesResponse.data].sort((a, b) => a.localeCompare(b));
  }, [cardTypesResponse]);

  const hasResults = cards.length > 0;
  const hasSearchOrFilter = debouncedSearch.trim().length > 0 || selectedType !== "all";

  if (isLoading) return <Loading />;
  if (isError || isTypesError) return <Error />;
  if (isTypesLoading && typeOptions.length === 0) return <Loading />;

  return (
    <div className="w-full flex-1 bg-teal-50 p-4 font-sans dark:bg-black sm:p-6 font-sans">
      <SearchBar value={search} setSearch={handleSearchChange} />
      <TypeFilter
        options={typeOptions}
        value={selectedType}
        onChange={handleTypeChange}
      />

      <div className="mx-auto mb-4 flex w-full md:w-3/4 max-w-3xl items-center justify-between gap-3 py-3">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage <= 1}
          className="rounded-xl border md:w-1/6 border-black/10 bg-teal-600 px-3 py-2 text-sm font-medium text-white transition hover:cursor-pointer hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          Previous
        </button>

        <span className="text-sm text-zinc-700 dark:text-zinc-300">
          {hasResults ? `Page ${currentPage} of ${totalPages}` : "Page 0 of 0"}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage >= totalPages || !hasResults}
          className="rounded-xl border w-20 md:w-1/6 border-black/10 bg-teal-600 px-3 py-2 text-sm font-medium text-white transition hover:cursor-pointer hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          Next
        </button>
      </div>

      {isFetching && (
        <p className="mx-auto mb-2 w-full md:w-3/4 max-w-3xl text-right text-xs text-zinc-600 dark:text-zinc-300">
          Updating cards...
        </p>
      )}

      <div className="mx-auto grid w-full sm:w-3/4 lg:w-3/4 justify-items-center max-w-3xl grid-cols-1 gap-6 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
        {cards.map((card) => (
          <CardContent key={card.id} card={card} />
        ))}
      </div>

      {!hasResults && (
        <p className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-300">
          {hasSearchOrFilter ? "No cards found." : "No cards available."}
        </p>
      )}
    </div>
  );
}
