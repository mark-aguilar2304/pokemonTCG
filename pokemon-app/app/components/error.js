import React from 'react'

function Error() {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-3">
      <div
        className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-black"
        aria-hidden="true"
      >
        <div className="h-1/2 w-full bg-white" />
        <div className="h-1/2 w-full bg-red-500" />
        <div className="absolute left-0 top-1/2 h-[4px] w-full -translate-y-1/2 bg-black" />
        <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-yellow-300" />
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600" />
        <div className="absolute left-1/2 top-1/2 h-[2px] w-8 -translate-x-1/2 -translate-y-1/2 rotate-[-28deg] bg-red-700" />
      </div>
      <p className="text-md font-medium text-red-600 dark:text-red-400">
        Pokémon escaped. Please try again.
      </p>
    </div>
  )
}

export default Error