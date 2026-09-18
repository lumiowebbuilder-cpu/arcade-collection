# Arcade Collection

Twenty-five small, dependency-free browser games. Each one is a single
self-contained HTML file (inline CSS/JS, no build step, no framework) sharing
a small common stylesheet and a synthesized Web Audio sound effects helper.

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

## Never seen before

Five original mechanics, not reskins of existing genres:

- **Orbit Golf** — mini-golf where you place gravity wells (attractors/
  repulsors) before each shot; the ball's path bends through them like
  orbital mechanics instead of traveling in a straight line
- **Word Tower** — a Shiritori-style word chain where each accepted word
  becomes a stacked block (width scales with word length); short words are
  fast to type but destabilize the tower's balance more, long words are
  slower but steadier — the tower topples if your lean goes too far
- **Echo Maze** — the maze is pitch black; ping to briefly reveal your
  surroundings sonar-style, but a hunter creature paths toward every ping
  you make using the same maze-solving BFS it takes to find you
- **Rewind Runner** — a ghost replays your exact movements from 3 seconds in
  the past; press a switch now so your future ghost holds a gate open for
  present-you later, requiring you to plan around your own delayed echo
- **Field Runner** — the dot you're steering is not your mouse cursor: it
  springs toward your real pointer position while also being deflected by
  magnetic fields, so reaching the goal means anticipating the drift instead
  of aiming directly

Each game tracks its own high score / best stat in `localStorage`.

## Running locally

No build step needed. Either open any `games/<name>/index.html` file directly
in a browser, or serve the folder so relative paths resolve cleanly:

```bash
node server.js
```

Then open [http://localhost:3500](http://localhost:3500) for the hub page
linking to all twenty-five games.
