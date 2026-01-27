# The Greys - Hospitality & Private Membership

This is a Next.js project bootstrapped manually due to network restrictions during setup.

## Getting Started

First, ensure you have an active internet connection, then install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/tickets/page.tsx`: The main ticket purchase page with live inventory and form logic.
- `app/globals.css`: Global styles including custom Tailwind Setup.
- `tailwind.config.ts`: Tailwind configuration including custom fonts and colors.

## Features

- **Live Inventory**: Mocked real-time inventory check with animation.
- **Age Verification**: Client-side validation ensuring users are 18+.
- **Supabase Integration**: Ready-to-go client setup (currently mocked).

## Supabase Setup (Future)

1. Create a project on Supabase.
2. Create a `ticket_sales` table with:
   - `full_name` (text)
   - `nic_number` (text)
   - `dob` (date)
3. Connect your app by uncommenting the Supabase client code in `app/tickets/page.tsx` and adding `.env.local` variables.
