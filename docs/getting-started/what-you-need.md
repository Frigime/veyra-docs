# What You'll Need

What you need depends on how you plan to run Veyra. Read [Choosing an Install Method](/getting-started/choosing-install-method) next if you're not sure yet — this page covers the prerequisites for every option.

## Always required

- **A Discord account** with **Manage Server** or **Administrator** permission on the server you want to add Veyra to. If you don't own a Discord server yet, create one first — it's free and takes a few seconds in the Discord app.
- **About 10 minutes** for the one-time setup: creating a Discord application and running the First-Run wizard.

## If you're installing on Windows, Linux, macOS, or a VPS

- **Node.js 22 or newer** ([nodejs.org](https://nodejs.org)). Veyra is built on Node.js and won't start without it.
- **Python 3** and **FFmpeg** — only needed for the **Music** module's YouTube fallback and audio playback. You can install Veyra without them, but Music won't work until they're available on the machine running Veyra.

## If you're using Docker

- **Docker Desktop** (Windows/macOS) or **Docker Engine + Docker Compose** (Linux). That's it — Python and FFmpeg are already bundled inside the Docker image, so you don't need to install them separately.

## If you're using Pterodactyl or Pelican

- A panel with a **generic Node.js egg/image** available (Node.js 22 or 24). Ask your host if you're not sure, or check [Pterodactyl / Pelican](/installation/pterodactyl) for the exact requirements.

## What you do *not* need

- You do **not** need to hand-write a `.env` file. Veyra generates its own encryption key automatically on first launch and walks you through everything else in the browser.
- You do **not** need a Discord bot token yet — you'll get that in [Discord Setup](/discord-setup/creating-application), after Veyra is installed.

Next: [Choosing an Install Method](/getting-started/choosing-install-method).
