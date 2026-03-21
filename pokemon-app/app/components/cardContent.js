

function CardContent({ card }) {
  if (!card) return null;

  const imageUrl = card.images?.small || card.images?.large;

  return (
    <article className="w-45 max-w-xs overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm dark:border-white/15 dark:bg-zinc-900">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={card.name || "Pokemon card"}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="flex h-72 w-full items-center justify-center bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
          No Image
        </div>
      )}
    </article>
  );
}

export default CardContent;