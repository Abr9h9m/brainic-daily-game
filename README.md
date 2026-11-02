# Brainic

**Three puzzles, one daily run.** Brainic is a small, mobile-friendly daily puzzle game that combines a five-letter word puzzle, a Connections-style word grouping puzzle, and a country guessing challenge.

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

At the beginning of each daily run, choose Beginner, Intermediate, or Expert. Beginner uses familiar words, obvious odd-one-out categories, and more direct country clues. Intermediate is balanced. Expert uses less common words, subtler categories, and more demanding clues. Your selected level is saved for the day in this browser.

### Stage 1 — Word

Guess a five-letter answer in six tries. Green means a letter is in the correct position, yellow means it appears elsewhere in the answer, and gray means it is not in the answer. The prototype currently accepts any five alphabetic letters; it does not check guesses against a dictionary.

Correctly solving the word unlocks the animated **Word Whiz** badge. The collection also awards **Pattern Finder** for finding all four Connections groups and **World Scout** for guessing the country. Open **Badges** in the top bar to view earned badges, dates, and difficulty levels. The collection is saved in this browser across daily puzzles; it does not sync across devices or browsers.

### Stage 2 — Connections

Sort 16 words into four groups of four. Select four related words and submit the group. Correct groups stay on the board with their category revealed. You can make four mistakes; the game calls out a “one away” guess when three of the four selected words belong together. If you run out of mistakes, the remaining groups are revealed.

### Stage 3 — Country

Read a clue and guess a country. A wrong guess reveals the next clue. Players get up to three clue-and-guess attempts; after the third incorrect guess, the answer is revealed. A correct guess ends the stage early.

An optional hint panel appears beside the clues. Reveal either the country's continent or the colors on its flag, once per daily puzzle. The flag itself is never shown. Using the optional hint does not consume one of the three clue attempts.

## Daily puzzle behavior

- The current prototype contains five sample puzzle sets for each of the three difficulty levels in `game.js` and rotates through them by calendar day.
- The selected set is based on the player's local calendar date. Everyone using the same local date will see the same set, but this is not tied to a single global timezone.
- Daily game progress and the badge collection are stored in `localStorage` for that browser. They do not sync between devices or browsers.
- The share button copies a compact emoji result to the clipboard when the browser permits it.
- There is no server, account system, central scoring, or anti-cheat validation.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure, difficulty chooser, stage navigation, forms, Connections grid, country hint panel, badge collection and help dialogs, and accessible labels. |
| `styles.css` | Visual design, typography, responsive layout, puzzle feedback, badge collection, and badge-entry styling. |
| `game.js` | Sample daily puzzle and Connections data by difficulty, stage rules, one-use country hints, local progress, badge earning and inventory storage, and sharing behavior. |
## Editing puzzle content

Open `game.js` and edit the `PUZZLES` and `CONNECTION_SETS` lists. Each entry has:

- `word`: the five-letter Stage 1 answer.
- `CONNECTION_SETS[difficulty][dayIndex]`: four groups, each with a `category` label and four `words`.
- `country.answer`: accepted country name, compared case-insensitively.
- `country.clues`: three clues, ordered from more difficult to more direct.

Add enough sets to cover the intended schedule. Review word difficulty, clue accuracy, answer aliases, and Connections group ambiguity before publishing a larger set. A repeated five-set rotation is only suitable as a prototype.

## Current limitations and next steps

- Replace the five sample sets with a larger, carefully reviewed daily puzzle bank.
- Add a real word list so invalid five-letter guesses can be rejected and duplicate-letter feedback can be made fully Wordle-accurate.
- Accept common country aliases and alternate spellings.
- Decide on one global puzzle timezone if all players should always receive the same daily puzzle.
- Consider color-independent tile indicators for accessibility.
- Add a backend only if Brainic later needs accounts, cross-device sync, centrally managed puzzles, or server-validated scoring. PHP could support that future backend, but it is not needed for this static prototype.

## License

No license has been selected yet. Add a `LICENSE` file before inviting others to reuse, modify, or redistribute the project.
