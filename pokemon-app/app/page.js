import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-1 items-center justify-center bg-background px-4 py-10 text-foreground sm:px-6">
      <section className="w-full max-w-3xl rounded-2xl border border-black/10 bg-white p-8 text-center dark:border-white/15 dark:bg-zinc-900 sm:p-12">
        <div className="mx-auto mb-6">
          <Image
            src="/snorlax.svg"
            alt="Snorlax"
            width={200}
            height={200}
            priority
            className="mx-auto"
          />
        </div>

        <h1 className="text-3xl font-extrabold tracking-wide sm:text-5xl">
          Welcome, Trainer!
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-700 dark:text-zinc-300 sm:text-lg">
          Discover Pokémon trading cards, explore card details, and build your
          own collection journey in one place.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/cards"
            className="inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Start Exploring Cards
          </Link>
        </div>
      </section>
    </main>
  );
}