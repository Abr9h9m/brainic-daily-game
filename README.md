# Brainic

**Three puzzles, one daily run.** Brainic is a small, mobile-friendly daily puzzle game that combines three familiar formats: a five-letter word puzzle, an odd-one-out puzzle, and a country guessing challenge.

## Play locally

This is a static website. It does not need PHP, a build step, dependencies, or a server for local play.

1. Download or clone this repository.
2. Open `index.html` in a current browser.

For a more production-like local preview, serve the folder with any static file server (for example, `python3 -m http.server` from the project directory), then visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a GitHub repository and add these project files at its root.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)`, then save.
5. Wait for Pages to publish and open the URL shown in the Pages settings.

The website is static, so no PHP or server configuration is needed. Anyone with the Pages URL can play in a browser.

## How to play

### Stage 1 — Word

Guess a five-letter answer in six tries. Green means a letter is in the correct position, yellow means it appears elsewhere in the answer, and gray means it is not in the answer. The prototype currently accepts any five alphabetic letters; it does not check guesses against a dictionary.

### Stage 2 — Odd one out

Choose the item that does not share the connection among the others. The game then reveals the answer and explains the shared category.

### Stage 3 — Country

Read a difficult clue and guess a country. A wrong guess reveals the next clue. Players get up to three clue-and-guess attempts; after the third incorrect guess, the answer is revealed. A correct guess ends the stage early.

## Daily puzzle behavior

- The current prototype contains five sample puzzle sets in `game.js` and rotates through them by calendar day.
- The selected set is based on the player's local calendar date. Everyone using the same local date will see the same set, but this is not tied to a single global timezone.
- Progress is stored in `localStorage` for that date and browser. It does not sync between devices or browsers.
- The share button copies a compact emoji result to the clipboard when the browser permits it.
- There is no server, account system, central scoring, or anti-cheat validation.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure, stage navigation, forms, help dialog, and accessible labels. |
| `styles.css` | Visual design, typography, responsive layout, and puzzle feedback styling. |
| `game.js` | Sample daily puzzle data, stage rules, local progress, and sharing behavior. |
## Editing puzzle content

Open `game.js` and edit the `PUZZLES` list. Each entry has:

- `word`: the five-letter Stage 1 answer.
- `odd.items`: the five displayed choices for Stage 2.
- `odd.answer`: zero-based index of the odd item.
- `odd.group`: explanation of the common relationship among the other four items.
- `country.answer`: accepted country name, compared case-insensitively.
- `country.clues`: three clues, ordered from more difficult to more direct.

Add enough sets to cover the intended schedule. Review word difficulty, clue accuracy, answer aliases, ambiguity, and the odd-one-out explanation before publishing a larger set. A repeated five-set rotation is only suitable as a prototype.

## Current limitations and next steps

- Replace the five sample sets with a larger, carefully reviewed daily puzzle bank.
- Add a real word list so invalid five-letter guesses can be rejected and duplicate-letter feedback can be made fully Wordle-accurate.
- Accept common country aliases and alternate spellings.
- Decide on one global puzzle timezone if all players should always receive the same daily puzzle.
- Consider color-independent tile indicators for accessibility.
- Add a backend only if Brainic later needs accounts, cross-device sync, centrally managed puzzles, or server-validated scoring. PHP could support that future backend, but it is not needed for this static prototype.

## License

No license has been selected yet. Add a `LICENSE` file before inviting others to reuse, modify, or redistribute the project.
