# Docker

The isolated, easy-to-update way to run Veyra. Python and FFmpeg are already bundled in the image, so there's nothing extra to install for Music.

## Requirements

- Docker Desktop (Windows/macOS) or Docker Engine + Docker Compose (Linux)

## 1. Build and start Veyra

From inside the Veyra folder:

```bash
docker compose build
docker compose up -d
```

## 2. Find your setup code

```bash
docker compose logs -f
```

Look for the **Veyra First-Run Setup Security Code** in the output, then press `Ctrl+C` to stop following the logs (Veyra keeps running in the background).

## 3. Continue setup in your browser

Open `http://localhost:4000` and paste in the code.

## About your data

Everything Veyra needs to remember — its database and its encryption key — lives in the Docker named volume `veyra-data`. Stopping, restarting, or rebuilding the container with `docker compose` never touches it. See [Backing Up Your Data](/maintenance/backups) for how to back that volume up.

::: tip
Next you'll need a Discord application — see [Discord Setup](/discord-setup/creating-application), then finish with [First-Run Setup](/first-run/unlocking-setup).
:::
