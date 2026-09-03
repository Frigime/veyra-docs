# Linux, macOS & VPS

For any machine where you're comfortable running a few terminal commands.

## 1. Install prerequisites

- **Node.js 22 or newer**
- **Python 3** and **FFmpeg** — required only for the Music module's YouTube fallback and voice playback

## 2. Install and build Veyra

From inside the Veyra folder, run:

```bash
npm install
npm run build
```

## 3. Start Veyra

```bash
npm start
```

Your terminal will print the **Veyra First-Run Setup Security Code**. Keep this terminal window open — closing it stops Veyra. If you want Veyra to keep running after you close your terminal (especially on a VPS), run it under a process manager or terminal multiplexer of your choice (for example `pm2 start npm -- start`, or `tmux`/`screen`) — Veyra doesn't require a specific one.

## 4. Continue setup in your browser

Copy the security code, then open `http://localhost:4000` (or your server's address) in a browser.

::: tip
Next you'll need a Discord application — see [Discord Setup](/discord-setup/creating-application), then finish with [First-Run Setup](/first-run/unlocking-setup).
:::
