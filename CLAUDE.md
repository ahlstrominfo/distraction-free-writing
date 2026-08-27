# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Minimal Obsidian plugin that adds a single command (`Toggle Distraction Free Mode`) which toggles the `distraction-free-mode` CSS class on `document.body`. All visual behavior comes from `styles.css` — there is no runtime logic beyond the toggle.

## Development Commands

```bash
npm run dev    # esbuild in watch mode (development)
npm run build  # tsc -noEmit -skipLibCheck && esbuild production bundle
```

`npm run build` already runs the type check; there is no separate lint step. Bundled output is `main.js` next to `main.ts`.

## Files

- `main.ts` — plugin entry; registers the toggle command
- `styles.css` — all distraction-free visual rules (selectors target `body.distraction-free-mode ...`)
- `manifest.json` — Obsidian plugin metadata
- `esbuild.config.mjs` — build configuration
- `data.json` — runtime settings persisted via Obsidian's `loadData()`/`saveData()`

## Notes

- The `DistractionFreeSettings` interface and `mySetting` field in `main.ts` are leftover scaffolding from the Obsidian sample plugin and aren't actually used. Don't build new behavior on them — either delete or replace if you add real settings.
- To change what distraction-free mode looks like, edit `styles.css`, not `main.ts`.
