The user wants to darken the background of the landing page (which is now the 'Big Match' page content) by "2 shades". 
Based on the current styling `from-gray-200 via-gray-300 to-gray-400`, I will shift these values up the numeric scale to create a darker, more premium grey look without going fully black.

## User Requirements
- Target Page: `app/page.tsx` (currently displaying Big Match content)
- Action: Darken background by 2 shades.

## Material Changes
### `app/page.tsx`
- **Background Gradient**: 
  - Change `from-gray-200` to `from-gray-400`
  - Change `via-gray-300` to `via-gray-500`
  - Change `to-gray-400` to `to-gray-600`
- **Text Color Considerations**: 
  - The current text is `text-black`. With a darker grey background (gray-500/600 ranges), black text might have low contrast.
  - I will assume for now that "2 shades darker" implies keeping the "grey/silver" theme but making it richer.
  - If the background gets too dark (e.g. Gray 600), I might need to switch standard text to `text-white` or `text-gray-100` for readability, or `text-silver-100` to match the project's palette.
  - **Decision**: I will start by just changing the background as requested. If contrast is obviously broken, I will adjust text color slightly to `text-midnight-slate` or similar dark-but-readable, or flip to light text if it looks like a dark mode. 
  - *Self-Correction*: 'Gray 200' is very light. 'Gray 400' is medium silver. 'Gray 600' is concrete. 'Gray 800' is charcoal. 
  - If I go to 400/500/600, it's a "Medium Grey" theme. Black text should still be *okay* but maybe not optimal. I'll stick to the specific "background" request first but keep an eye on contrast.

## Verification
- Check `app/page.tsx` for the class update.
- Ensure the background gradient uses the new values.
- No other logic changes.
