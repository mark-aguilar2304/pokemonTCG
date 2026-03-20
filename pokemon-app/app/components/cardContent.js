function CardContent({ card }) {
  if (!card) return null;

  const imageUrl = card.images?.small || card.images?.large;
  const typeList = card.types?.join(", ") || "Unknown Type";
  const hp = card.hp || "N/A";
  const rarity = card.rarity || "Unknown";
  const setName = card.set?.name || "Unknown Set";

  return (
    <article className="w-full max-w-xs overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm dark:border-white/15 dark:bg-zinc-900">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={card.name || "Pokemon card"}
          className="h-72 w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="flex h-72 w-full items-center justify-center bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
          No Image
        </div>
      )}

      <div className="space-y-2 p-4">
        <h3 className="line-clamp-1 text-lg font-bold text-zinc-900 dark:text-zinc-100">
          {card.name || "Unknown Pokémon"}
        </h3>

        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          Type: <span className="font-semibold">{typeList}</span>
        </p>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          HP: <span className="font-semibold">{hp}</span>
        </p>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          Rarity: <span className="font-semibold">{rarity}</span>
        </p>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          Set: <span className="font-semibold">{setName}</span>
        </p>
      </div>
    </article>
  );
}

export default CardContent;