# Backing Up Your Data

Everything Veyra knows about your server — every module's configuration, every ticket, every moderation case — lives in two files. Back both of them up together, regularly.

## What to back up

| File | Why it matters |
|---|---|
| `data/veyra.db` | Your entire database: all server configuration, tickets, moderation cases, leveling data, economy balances, and more. |
| `data/master.key` | The encryption key protecting your stored Discord secrets (bot token, client secret, session tokens). |

::: warning Back these up together, always
`veyra.db` contains your Discord secrets, but **encrypted** with `master.key`. A backup of the database without the matching key is unreadable by Veyra if you ever need to restore it — and a lost `master.key` with no backup means Veyra can no longer decrypt its own stored secrets, even if the database is intact. Always copy both files as a pair.
:::

## How to back them up

**Windows / Linux / macOS / VPS / Pterodactyl** — copy the `data/` folder (or just the two files above) to somewhere safe, on whatever schedule you're comfortable with:

```bash
cp -r data/ /path/to/your/backup/location/
```

**Docker** — your data lives in the named volume `veyra-data` instead of a local folder. Export it with:

```bash
docker run --rm -v veyra-data:/data -v "$(pwd)":/backup alpine tar czf /backup/veyra-backup.tar.gz -C /data .
```

## Restoring

Stop Veyra, replace `data/veyra.db` and `data/master.key` (or restore the `veyra-data` volume) with your backup, then start Veyra again as usual.
