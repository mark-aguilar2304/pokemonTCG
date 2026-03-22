function CardProfile({ card }) {
  if (!card) return null;

  const imageUrl = card.images?.large || card.images?.small;
  const types = Array.isArray(card.types) ? card.types.join(", ") : "Unknown";
  const weaknesses = Array.isArray(card.weaknesses)
    ? card.weaknesses.map((item) => `${item.type} (${item.value})`).join(", ")
    : "None";
  const attacks = Array.isArray(card.attacks) ? card.attacks : [];

  return (
    <section className="mx-auto w-full max-w-4xl rounded-3xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-zinc-900 sm:p-6">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200">
        Pokémon Card Profile
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-black/10 bg-zinc-50 dark:border-white/15 dark:bg-zinc-800/60">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={card.name || "Pokemon card"}
              className="h-full w-auto object-fit"
            />
          ) : (
            <div className="flex h-96 items-center justify-center text-zinc-500 dark:text-zinc-400">
              No image available
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-yellow-200 bg-yellow-300 p-4 dark:border-yellow-900/70 dark:bg-yellow-950/30">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{card.name}</h1>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
              {card.supertype || "Pokémon"}
              {card.subtypes?.length ? ` • ${card.subtypes.join(", ")}` : ""}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border border-black/10 bg-red-100 p-3 dark:border-white/15 dark:bg-red-800/70">
              <p className="text-zinc-500 dark:text-zinc-400">HP</p>
              <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{card.hp || "N/A"}</p>
            </div>
            <div className="rounded-xl border border-black/10 bg-blue-100 p-3 dark:border-white/15 dark:bg-blue-800/70">
              <p className="text-zinc-500 dark:text-zinc-400">Types</p>
              <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{types}</p>
            </div>
            <div className="rounded-xl border border-black/10 bg-violet-100 p-3 dark:border-white/15 dark:bg-violet-800/70">
              <p className="text-zinc-500 dark:text-zinc-400">Weaknesses</p>
              <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{weaknesses}</p>
            </div>
            <div className="rounded-xl border border-black/10 bg-green-100 p-3 dark:border-white/15 dark:bg-green-800/70">
              <p className="text-zinc-500 dark:text-zinc-400">Set</p>
              <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{card.set?.name || "N/A"}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-orange-100 p-4 dark:border-white/15 dark:bg-orange-800/70">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Attacks</h2>
            {attacks.length > 0 ? (
              <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                {attacks.map((attack) => (
                  <li
                    key={`${attack.name}-${attack.damage}`}
                    className="rounded-xl border border-black/10 bg-white p-3 dark:border-white/15 dark:bg-zinc-900"
                  >
                    <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {attack.name}
                      {attack.damage ? ` • ${attack.damage}` : ""}
                    </p>
                    {attack.text ? <p className="mt-1">{attack.text}</p> : null}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">No attacks listed.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardProfile;