"use client";

import { use } from "react";
import CardProfile from "../../components/cardprofile";
import Loading from "../../components/loading";
import Error from "../../components/error";
import { useGetPokemonByIdQuery } from "../../services/pokemonTCGApi";

export default function CardDetailsPage({ params }) {
  const {id} = use(params)
  const { data: cardResponse, isLoading, isError } = useGetPokemonByIdQuery(id, {
    skip: !id,
  });
  const cardObject = cardResponse?.data ?? {};

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="w-full flex-1 bg-teal-50 p-4 font-sans dark:bg-black sm:p-6">
      <div className="mx-auto mb-4 flex w-full max-w-4xl items-center justify-between gap-3">
        <button
          onClick={() => window.history.back()}
          className="rounded-xl border md:w-1/6 border-black/10 bg-teal-600 px-3 py-2 text-sm font-medium text-white hover:cursor-pointer transition hover:bg-teal-700 dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          Back
        </button>
        <h1 className="text-lg font-bold text-teal-600 dark:text-zinc-100 sm:text-xl capitalize">
          {cardObject?.name || "Card Details"}
        </h1>
        
      </div>

      <CardProfile card={cardObject} />
    </div>
  );
}
