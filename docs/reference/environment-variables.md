# Environment Variables

Veyra works out of the box with no environment configuration required — [First-Run Setup](/first-run/unlocking-setup) handles everything through the dashboard. The variables below are **optional** and only matter for specific hosting situations, such as running behind a reverse proxy, using a custom domain, or pointing Veyra at a non-default database location.

::: tip You probably don't need this page
If you followed one of the standard [installation methods](/installation/windows) and things are working, you can skip this page entirely. It's here for advanced or custom hosting setups.
:::

## Common variables

| Variable | Purpose |
|---|---|
| `PORT` | The port the dashboard/web server listens on. Change this if the default port conflicts with something else on your machine. |
| `WEB_URL` | The public URL where your dashboard is reachable. Set this if you're running behind a reverse proxy or custom domain — see [Reverse Proxy / Custom Domain](/reference/reverse-proxy). |
| `API_URL` | The public URL for Veyra's API, if it's served separately from the dashboard in your setup. |
| `DATABASE_URL` | Overrides the default location of the SQLite database file. Only needed if you want to store the database somewhere other than the default data directory. |
| `DISCORD_REDIRECT_URI` | The OAuth redirect URI registered in your Discord application. Must match what's configured in the [Discord Developer Portal](/discord-setup/creating-application) exactly, including protocol (`http`/`https`) and any custom domain. |
| `VEYRA_MASTER_KEY` | Used to encrypt sensitive data (like your stored bot credentials) at rest. If you set this yourself, keep it safe — losing it means Veyra can't decrypt previously stored secrets, and you'll need to redo setup. |

## When you'd set these

- **Docker / Pterodactyl / Pelican**: your panel or `docker-compose.yml` may expose some of these as configurable fields. See [Docker](/installation/docker) and [Pterodactyl / Pelican](/installation/pterodactyl).
- **Reverse proxy or custom domain**: `WEB_URL`, `API_URL`, and `DISCORD_REDIRECT_URI` need to reflect your public-facing URL rather than `localhost`. See [Reverse Proxy / Custom Domain](/reference/reverse-proxy).
- **Custom database location**: set `DATABASE_URL` if you have a specific reason to relocate the SQLite file (for example, storing it on a separate disk).

::: warning Changing these after setup
Changing `DISCORD_REDIRECT_URI` or `WEB_URL` after First-Run Setup usually also requires updating the redirect URI in your Discord application's settings to match. Mismatched URIs are one of the most common causes of sign-in failures — see [Common Setup Problems](/troubleshooting/common-setup-problems) if you run into this.
:::
