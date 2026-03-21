"use client";

function SearchBar(props) {

    return (
        <form
            className="mx-auto mb-6 flex w-full md:w-3/4 max-w-3xl items-center gap-2 rounded-2xl border border-black/10 bg-white p-2 shadow-sm dark:border-white/15 dark:bg-zinc-900"
            role="search"
            id="search-form"
            aria-label="Search Pokémon cards"
        >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-red-500/10">
                <span className="relative block h-5 w-5 overflow-hidden rounded-full border-2 border-black/70">
                    <span className="absolute inset-x-0 top-0 h-1/2 bg-red-500" />
                    <span className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
                    <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-black/70" />
                    <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/70 bg-white" />
                </span>
            </div>

            <input
                type="text"
                placeholder="Search Pokémon cards..."
                className="h-10 flex-1 rounded-xl border border-transparent bg-zinc-50 px-4 text-sm text-zinc-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-blue-300 dark:focus:ring-blue-900/50"
                value={props.value}
                onChange={(e) => props.setSearch(e.target.value)}
            />
        </form>
    );
}

export default SearchBar;