# Arcade Collection

Twenty small, dependency-free browser games. Each one is a single self-contained
HTML file (inline CSS/JS, no build step, no framework) sharing a small common
stylesheet and a synthesized Web Audio sound effects helper.

## Quick arcade games

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

## Deeper-system games

- **Chess** — full legal move generation (castling, en passant, promotion,
  check/checkmate/stalemate) plus a minimax + alpha-beta AI opponent with
  selectable difficulty
- **Descent** (roguelike) — procedurally generated dungeons, turn-based combat,
  fog of war, BFS enemy pathfinding, leveling, items, permadeath
- **Bastion** (tower defense) — 4 tower types with upgrades, a fixed enemy
  path, wave-based economy, 15 waves plus a boss wave
- **Ember Deck** (card battler) — a Slay-the-Spire-style deckbuilding roguelike
  run: draw/discard/energy mechanics, status effects, 6 fights including a boss,
  card rewards that grow your deck
- **Vanguard** (tactics) — grid-based squad tactics with telegraphed enemy
  intents (see attacks before they land), BFS movement, a building-protection
  objective, 4 levels

## Classics, reimagined

- **Sudoku** — a real backtracking generator/solver (not a fixed puzzle bank):
  every puzzle is freshly generated with a verified unique solution, at three
  difficulties
- **Connect Four** — drop-column physics, full win detection (horizontal/
  vertical/both diagonals), minimax + alpha-beta AI with selectable difficulty
- **Asteroids** — real 2D physics (thrust, inertia, drag, screen wrap),
  asteroid splitting, a UFO that hunts you
- **Bubble Shooter** — hex-grid aiming & collision, flood-fill color matching,
  floating-cluster detection, a rising ceiling for pressure
- **Solitaire** — full Klondike: tableau sequences, foundations, stock/waste
  recycling, double-click-to-foundation

Each game tracks its own high score / best stat in `localStorage`.

## Running locally

No build step needed. Either open any `games/<name>/index.html` file directly
in a browser, or serve the folder so relative paths resolve cleanly:

```bash
node server.js
```

Then open [http://localhost:3500](http://localhost:3500) for the hub page
linking to all twenty games.
