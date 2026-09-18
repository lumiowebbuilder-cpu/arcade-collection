# Arcade Collection

Ten small, dependency-free browser games. Each one is a single self-contained
HTML file (inline CSS/JS, no build step, no framework) sharing a small common
stylesheet and a synthesized Web Audio sound effects helper.

- **Snake** — grow long, don't bite yourself
- **2048** — slide & merge to the target tile
- **Breakout** — paddle, ball, bricks
- **Block Drop** — falling tetromino blocks, clear lines
- **Memory Match** — flip cards, find pairs
- **Minesweeper** — 10x10 grid, flags, flood-fill reveal
- **Flap** — flappy-bird-style pipe dodger
- **Platformer** — side-scrolling run/jump with gravity, pits, spikes, coins, a flag to reach
- **Pong** — versus a CPU paddle, first to 7
- **Word Guess** — Wordle-style 5-letter word game, 6 guesses

Each game tracks its own high score / best stat in `localStorage`.

## Running locally

No build step needed. Either open any `games/<name>/index.html` file directly
in a browser, or serve the folder so relative paths resolve cleanly:

```bash
node server.js
```

Then open [http://localhost:3500](http://localhost:3500) for the hub page
linking to all ten games.
