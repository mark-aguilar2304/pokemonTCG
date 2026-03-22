"use client";

function TypeFilter(props) {
  return (
    <div className="mx-auto mb-6 w-full md:w-3/4 max-w-3xl">
      <label
        htmlFor="type-filter"
        className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-200"
      >
        Filter by Type
      </label>
      <select
        id="type-filter"
        className="h-10 w-full md:w-1/4 rounded-xl border border-black/10 bg-white px-3 text-sm text-zinc-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-blue-300 dark:focus:ring-blue-900/50"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        aria-label="Filter Pokémon cards by type"
      >
        <option value="all">All</option>
        {props.options.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TypeFilter;