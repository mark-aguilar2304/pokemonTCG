
import Link from "next/link";


function CardContent({ card }) {
  if (!card) return null;

  const imageUrl = card.images?.small || card.images?.large;
  const cardId = encodeURIComponent(card.id || "");

  return (
    <Link
      href={`/cards/${cardId}`}
      className="block w-45 max-w-xs overflow-hidden rounded-xl border-5 border-teal-600 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:border-white/15 dark:bg-zinc-900"
      aria-label={`View details for ${card.name || "Pokemon card"}`}
    >
      <article>
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
    </Link>
  );
}

export default CardContent;