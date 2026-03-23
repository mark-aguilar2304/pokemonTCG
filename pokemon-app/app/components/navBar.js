"use client";

import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full border-b border-black/10 bg-teal-600 dark:border-white/15 dark:bg-black">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          onClick={closeMenu}
          className="text-xl font-extrabold tracking-wide text-white dark:text-zinc-100"
        >
          PokemonTCG
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-lg px-3 py-1 text-xl font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-white/15 dark:text-zinc-200 dark:hover:bg-zinc-900 sm:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <div className="hidden items-center gap-6 text-sm font-semibold sm:flex">
          <Link
            href="/"
            className="text-white/80 text-lg transition-colors hover:text-white dark:text-zinc-300 dark:hover:text-zinc-100"
          >
            Home
          </Link>
          <Link
            href="/cards"
            className="text-white/80 text-lg transition-colors hover:text-white dark:text-zinc-300 dark:hover:text-zinc-100"
          >
            Pokédex
          </Link>
          <Link
            href="/favorites"
            className="text-white/80 text-lg transition-colors hover:text-white dark:text-zinc-300 dark:hover:text-zinc-100"
          >
            Favorites
          </Link>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-nav-menu"
          className="border-t border-black/10 px-4 py-3 dark:border-white/15 sm:hidden"
        >
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 text-sm font-semibold">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-white/80 text-lg transition-colors hover:text-white dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              Home
            </Link>
            <Link
              href="/cards"
              onClick={closeMenu}
              className="text-white/80 text-lg transition-colors hover:text-white dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              Pokédex
            </Link>
            <Link
              href="/favorites"
              onClick={closeMenu}
              className="text-white/80 text-lg transition-colors hover:text-white dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              Favorites
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default NavBar;