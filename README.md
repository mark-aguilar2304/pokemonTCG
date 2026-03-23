# PokemonTCG

A Pokémon Trading Card web app built with Next.js that lets users browse cards, search and filter by type, view detailed card profiles, and manage favorites.

## Functionalities

### 1) Home Landing Page

- Welcomes users with a hero section and clear call-to-action.
- Direct navigation into card browsing.

### 2) Browse Cards (Pokédex)

- Displays cards in a responsive grid.
- Server-powered pagination (`Previous` / `Next`) with page status.
- Live fetch status indicator while updating card results.

### 3) Search + Filter

- Search cards by name.
- Debounced search input (300ms) to reduce unnecessary API requests.
- Filter cards by Pokémon type.
- Search and filter can be combined for refined results.

### 4) Card Details Page

- Open any card to view a full profile.
- Shows key card data including:
  - Name and supertype/subtypes
  - HP, types, weaknesses, and set name
  - Attack list with damage and description
- Includes quick `Back` navigation.

### 5) Favorites System

- Add or remove cards from favorites directly on the details page.
- View all saved favorites in a dedicated Favorites page.
- Handles empty favorites state with a helpful message.

### 6) Responsive Navigation

- Desktop and mobile navigation menus.
- Routes available: `Home`, `Pokédex`, and `Favorites`.

### 7) Loading + Error States

- Dedicated loading and error UI for data-fetching pages.
- Graceful empty-state messages when no cards match the current query.

## Tech Stack

- Next.js (App Router)
- React
- Redux Toolkit + RTK Query
- Tailwind CSS
- Pokémon TCG API (`https://api.pokemontcg.io/v2/`)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## App Routes

- `/` - Landing page
- `/cards` - Browse, search, filter, and paginate cards
- `/cards/[id]` - Card detail/profile page
- `/favorites` - Favorite cards list
