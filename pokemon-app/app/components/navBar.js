import Link from "next/link";

function NavBar() {
  return (
    <nav className="w-full border-b border-black/10 bg-white dark:border-white/15 dark:bg-black">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-wide text-black dark:text-zinc-100"
        >
          PokemonTCG
        </Link>
        <div className="flex items-center gap-6 text-sm font-semibold">
          <Link
            href="/"
            className="text-zinc-600 text-lg transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-zinc-100"
          >
            Home
          </Link>
          <Link
            href="/cards"
            className="text-zinc-600 text-lg transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-zinc-100"
          >
            Pokédex
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;