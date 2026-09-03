# Updating Veyra

## The one rule

Never delete or overwrite your `data/` folder (or the `veyra-data` Docker volume) when updating — that's where your entire configuration lives. Everything else can be safely replaced.

::: tip Back up first
See [Backing Up Your Data](/maintenance/backups) before updating, just in case.
:::

## Windows

1. Stop Veyra (close the `start.bat` console window).
2. Replace the Veyra files with the new release, leaving your existing `data/` folder in place.
3. Re-run `install.bat`, then `start.bat`.

## Linux, macOS & VPS

1. Stop Veyra.
2. Replace the Veyra files with the new release (again, leaving `data/` untouched).
3. Run:

```bash
npm install
npm run build
npm start
```

## Docker

```bash
docker compose down
docker compose build
docker compose up -d
```

The `veyra-data` volume is untouched by this — your configuration survives automatically.

## Pterodactyl / Pelican

Upload the new release files over the old ones (skip `data/`), then in the console run `npm install && npm run build`, and **Restart** the server from the panel.
