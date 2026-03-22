"use client";

import Link from "next/link";
import { useState, useEffect, use } from "react";
import CardProfile from "../../components/cardprofile";
import Loading from "../../components/loading";
import Error from "../../components/error";
import { useGetPokemonQuery } from "../../services/pokemonTCGApi";

export default function CardDetailsPage({ params }) {
  const { data: pokemoncards, isLoading, isError } = useGetPokemonQuery();
  const cards = pokemoncards?.data ?? [];
  const {id} = use(params)
  const [cardObject, setCardObject] = useState({});
  
  useEffect(() => {
    if (cards && id){
        const foundCard = cards.find((card) => card.id === String(id));
        setCardObject(foundCard || {});
    }

  }, [id, cards]);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="w-full flex-1 bg-zinc-50 p-4 font-sans dark:bg-black sm:p-6">
      <div className="mx-auto mb-4 flex w-full max-w-5xl items-center justify-between gap-3">
        <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 sm:text-xl capitalize">
          {cardObject?.name || "Card Details"}
        </h1>
        <Link
          href="/cards"
          className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          Back
        </Link>
      </div>

      <CardProfile card={cardObject} />
    </div>
  );
}
