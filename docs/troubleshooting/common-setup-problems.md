# Common Setup Problems

Your first stop when something isn't working: installation, First-Run, Discord OAuth, networking, and initial bot startup. Search for the exact message you're seeing, or scan the category that matches what's going wrong.

::: tip Not sure where to look?
If your bot is already running but a specific module doesn't seem to do anything, go to [Bot Looks Online But Doesn't Respond](/troubleshooting/bot-not-responding) instead — it's almost always a missing **Deploy** or **Publish** click.
:::

## Discord & OAuth

### "Discord sign-in was cancelled. Nothing changed; you can try again."

You (or Discord) cancelled the sign-in prompt partway through. Nothing was changed — just click **Continue with Discord** again in [Signing In & Choosing Your Server](/first-run/signing-in-choosing-server).

### "The secure sign-in window expired. Start Discord sign-in again."

Discord sign-in attempts expire after a short window for security. Simply start the sign-in step again.

### "Discord rejected the Client Secret during OAuth. Verify it in Developer Portal and return to the credentials step."

This is almost always one of two things:

**Try this:**
1. The **Client Secret** was mistyped or copied incorrectly — go back to [Getting Your Credentials](/discord-setup/getting-credentials), copy it fresh from Discord's OAuth2 tab, and re-enter it.
2. The **OAuth Redirect URI** wasn't added on Discord's side, or doesn't match exactly. Check Discord → OAuth2 → Redirects against the URI Veyra showed you during [Connecting Your Discord Application](/first-run/connecting-discord).

### "Discord signed in, but the profile could not be loaded. Please try again."

A transient issue reaching Discord's API right after sign-in.

**Try this:**
1. Just try signing in again.
2. If it keeps happening, check your internet connection and Discord's own [status page](https://discordstatus.com).

### Wrong Application ID or Client ID

During [Automatic Checks](/first-run/automatic-checks), Veyra confirms your Bot Token actually belongs to the Application ID you entered. If they don't match, you'll see **"The Bot Token belongs to another Discord application"** (or, when replacing credentials later from [Bot Settings](/dashboard/bot-settings), **"The Bot Token belongs to a different Discord Application ID. Replace both values together."**).

**Try this:**
1. Open the Discord application you actually intend to use in the [Developer Portal](https://discord.com/developers/applications).
2. Copy the **Application ID** from its General Information tab and the **Bot Token** from its Bot tab — from the *same* application. See [Getting Your Credentials](/discord-setup/getting-credentials).

### Bot Token rejected or invalid

Veyra shows **"Discord rejected the bot token"** during [Automatic Checks](/first-run/automatic-checks), or logs `Invalid Discord Bot Token. Please verify your token in the Veyra dashboard.` in the bot's console at runtime.

**Try this:**
1. In the Developer Portal → **Bot** tab, click **Reset Token** and copy the new one immediately (Discord only shows it once).
2. Re-enter it in [Connecting Your Discord Application](/first-run/connecting-discord) during setup, or in [Bot Settings](/dashboard/bot-settings) → **Discord Application Credentials** if you're already past setup.
3. If Veyra says **"The supplied token is not a Discord bot token"**, you likely pasted the Client Secret or a personal account token by mistake — bot tokens only come from the Bot tab.

### Bot not appearing online after setup

**Try this:**
1. Check [System Health](/dashboard/system-health) — the **Discord Gateway** card tells you if Veyra is still connecting, reconnecting, or disconnected.
2. Check whichever console/terminal is running Veyra for `[Veyra bot]` lines — a rejected token or disabled privileged intent logs there explicitly (see the two entries above and below).
3. If you just replaced the Bot Token in Bot Settings, give it a few seconds to reconnect the Gateway with the new credentials.

### Bot not joining the expected server

Veyra can only manage a server if you've both invited the bot to it **and** you have **Manage Server** or **Administrator** permission there yourself.

**Try this:**
1. In [Signing In & Choosing Your Server](/first-run/signing-in-choosing-server), servers you can administer but haven't invited Veyra to yet show an **Add Bot** button — use that rather than inviting it manually elsewhere.
2. If your server doesn't appear in the list at all, you don't have the required Discord permission on it.

### Missing Discord permissions

When Veyra can't post or update a panel because of channel permissions, it says exactly that — for example: `Veyra could not publish the Ticket panel. Check View Channel, Send Messages and Embed Links permissions.` (Verification and Self-Role panels show the equivalent message for themselves.)

::: tip This is rare with the default invite
Veyra's own **Add Bot** invite link requests Administrator access by default, which already includes everything every module needs. This error mainly shows up if Veyra was added to your server through a different, more restrictive invite link.
:::

**Try this:**
1. In Discord → Server Settings → Roles, confirm Veyra's role has the permissions the error message names, at least in the channel it's trying to post to.
2. Re-try the action (Deploy, or that module's Publish button) once permissions are fixed.

### Missing privileged intents

AutoMod and Anti-Raid need Discord-side toggles that are off by default. If they're missing, the bot's console logs:

```
[Veyra bot] Discord Privileged Gateway Intents are disabled.
  Enable Presence Intent, Server Members Intent, and Message Content Intent in:
  Discord Developer Portal → Bot → Privileged Gateway Intents, then retry the connection test.
```

**Try this:** see [Privileged Intents](/discord-setup/privileged-intents) for exactly which of the two toggles you actually need (Server Members for Anti-Raid, Message Content for AutoMod) and where to flip them.

### Bot role hierarchy preventing an action

If Veyra can't grant or remove a role because its own role sits too low in your server, Verification says: `Veyra could not assign {role name}. Check Manage Roles permission and role hierarchy.`

**Try this:** in Discord → Server Settings → Roles, drag Veyra's role **above** the role it needs to manage. See [Module-Specific Issues](/troubleshooting/module-issues) for the Verification-specific version of this.

## Network & Dashboard

### Dashboard doesn't open / connection refused

**Try this:**
1. Confirm Veyra is actually still running — check the console/terminal window (Windows), your `npm start` terminal (Linux/macOS/VPS), or `docker compose logs -f` (Docker) for errors.
2. Make sure you're using the right port — see [port confusion in development](#frontend-api-port-confusion-in-development) below if you're running from source.
3. Try `http://localhost:4000` (or whatever `PORT` you configured) directly rather than a bookmarked link, in case the address changed.

### Localhost works but another device on your network can't connect

Veyra listens on all network interfaces by default, so this is almost never Veyra itself.

**Try this:**
1. Check your OS firewall isn't blocking inbound connections on Veyra's port (see below).
2. Make sure you're browsing to your machine's LAN IP (e.g. `http://192.168.1.20:4000`), not `localhost` — `localhost` always means "this device."
3. If sign-in fails specifically (not just the page loading), your **Public Dashboard URL** may still be set to `localhost` — see [Environment Variables](/reference/environment-variables) and [Reverse Proxy / Custom Domain](/reference/reverse-proxy).

### API reachable but the dashboard itself is unavailable

If hitting Veyra's address returns raw JSON or a 404 instead of the Studio interface, the dashboard's production build is missing — Veyra's API server only serves the built dashboard files if it finds them.

**Try this:** run `npm run build` (or re-run `install.bat` on Windows) so `apps/dashboard/dist` exists, then start Veyra again.

### Frontend/API port confusion in development {#frontend-api-port-confusion-in-development}

This only applies if you're running Veyra **from source in development mode** (`npm run dev`) rather than an installed release — most buyers won't hit this.

- In **development**, the dashboard's Vite dev server runs on its own port, **5173**, and forwards `/api`, `/auth`, and `/health` requests to the API on **4000**.
- In **production** (`install.bat`/`start.bat`, `npm start`, Docker, Pterodactyl), there is only **one** port — the API server serves the built dashboard itself, both on whatever `PORT` you configured (`4000` by default).

If you're testing a production build, always use the single `PORT` address, not `5173`.

### Port already in use

If Veyra's configured port is already taken by something else, Node fails to start with an `EADDRINUSE` error and Veyra exits.

**Try this:**
1. Close whatever else is using that port, or
2. Set `PORT` to a free one instead — see [Environment Variables](/reference/environment-variables).

### Firewall blocking access

Windows (and some Linux distributions) may prompt to allow Node.js/Veyra through the firewall the first time it starts — accept it if you want to reach the dashboard from other devices. If you dismissed that prompt, add an inbound rule for Veyra's port manually in your firewall settings.

### Temporary Discord API/network failure

Discord's API is occasionally slow or briefly unreachable. Veyra generally reports this plainly rather than a cryptic failure — for example, replacing credentials in [Bot Settings](/dashboard/bot-settings) can show: `Discord could not validate the replacement credentials right now. Nothing was changed; try again shortly.`

**Try this:** wait a few seconds and retry. Check [discordstatus.com](https://discordstatus.com) if it persists.

### Public dashboard URL / OAuth callback mismatch

If you're exposing Veyra beyond localhost (custom domain, reverse proxy, a hosting panel's public address), sign-in fails unless your Public Dashboard URL, Discord's registered redirect, and how you actually reach Veyra all agree exactly.

**Try this:** see [Reverse Proxy / Custom Domain](/reference/reverse-proxy) — it walks through the three places that URL has to match.

## Installation

### Node.js version too old

Veyra needs **Node.js 22 or newer** — it relies on Node's own built-in SQLite support, which doesn't exist in older versions. On Windows, `install.bat`/`start.bat` check this for you and stop with:

```
[ERROR] Node.js 22 or newer is required to run Veyra.
Current installed version:
```

**Try this:** upgrade at [nodejs.org](https://nodejs.org). On Linux/macOS/VPS, Docker, or Pterodactyl there's no such check built in — an old Node version will usually just fail unpredictably during `npm install` or `npm run build` instead.

### npm install / dependency installation problems

Because Veyra uses Node's built-in SQLite rather than a compiled native database driver, `npm install` failures are usually about your Node version or network access to npm's registry, not a missing compiler toolchain. On Windows, `install.bat` stops with:

```
[ERROR] npm install encountered an error. Please inspect the logs above.
```

**Try this:**
1. Confirm Node.js 22+ (see above).
2. Scroll up in the terminal output to the actual npm error — it names the real cause (network, permissions, a specific package).
3. Re-run `npm install` once the underlying issue is fixed.

### Permission / access-denied errors

**Try this:**
1. **Windows** — don't extract/run Veyra from a protected folder like `Program Files`; a regular folder (Desktop, a dedicated folder on another drive) avoids most permission prompts.
2. **Linux/macOS/VPS** — make sure the user running Veyra owns the Veyra folder (`chown -R` yourself to it if you extracted as root), and that it has write access to `data/`.

### Windows install/start script problems

`install.bat` and `start.bat` print a specific `[ERROR]` line and pause instead of closing, so you can read it:

| Message | Meaning |
|---|---|
| `Node.js is not installed or not found in your PATH.` | Install Node.js 22+ from [nodejs.org](https://nodejs.org), then reopen the terminal/console. |
| `Node.js 22 or newer is required to run Veyra.` | Your installed Node.js is too old — upgrade it. |
| `npm install encountered an error.` | See npm install problems above. |
| `npm run build failed.` | Scroll up for the real build error; often the same underlying causes as an install failure. |
| `Production build not found.` (from `start.bat`) | Run `install.bat` first — `start.bat` only launches an already-built Veyra. |
| `Veyra process exited with code …` | Veyra itself crashed after starting — check the printed output above this line for the actual error. |

### Linux/VPS permission problems

If Veyra can't write its database or log files, double-check the running user owns the Veyra directory (see above). If you're running Veyra under a process manager like `pm2` or inside `tmux`/`screen` (recommended for a VPS, per [Linux, macOS & VPS](/installation/linux-macos-vps)), make sure that process is also running as the same user, not root, unless you intend that.

### Application starts but the dashboard doesn't appear

See [API reachable but the dashboard itself is unavailable](#api-reachable-but-the-dashboard-itself-is-unavailable) above — this is almost always a missing or incomplete `npm run build`.

### Restart after installation/configuration

Some changes only take effect on Veyra's next full restart: setting environment variables, resetting First-Run Setup, and applying an update all require stopping and starting Veyra again (close and reopen `start.bat`'s console, `docker compose restart`, or your panel's **Restart** button). Regular dashboard configuration (modules, settings) does not — it applies live once you Deploy.

## Music

### FFmpeg or Python 3 missing

Music's YouTube fallback needs both installed on the machine running Veyra. Docker and Pterodactyl images that bundle them (see below) don't need anything extra.

**Try this:** see [What You'll Need](/getting-started/what-you-need) for install links, then restart Veyra.

### Music playback unavailable even though FFmpeg/Python are installed

The first time Music is used, Veyra downloads its own managed `yt-dlp` binary rather than requiring you to install one yourself. If that download fails, playback reports the runtime as unavailable.

**Try this:**
1. Confirm the machine running Veyra has outbound internet access (this download reaches GitHub).
2. Try playing something again after a minute — a one-off network hiccup is the most common cause.
3. See [Module-Specific Issues](/troubleshooting/module-issues) if it still won't play.

### Using Docker or Pterodactyl?

Python 3 and FFmpeg are already installed in Veyra's Docker image. On Pterodactyl/Pelican, confirm your specific egg image includes them (most modern Node eggs do, or let you install packages) — see the Pterodactyl section below.

## Docker

### Container starts then exits

Veyra's container runs the API and the Discord bot worker as two linked processes; if either one crashes, the whole container stops (`restart: unless-stopped` in the provided `docker-compose.yml` will keep retrying).

**Try this:**
1. Run `docker compose logs -f` and read the last error before the exit — it's almost always one of the specific errors elsewhere on this page (bad credentials, a [Master Key Mismatch](#master-key-mismatch), or a port conflict).
2. If you recently restored an old `veyra-data` volume onto a fresh container, see Master Key Mismatch below.

### Persistent data / volume problems

Everything Veyra remembers lives in the `veyra-data` named volume. **Never delete it** unless you intend to lose all configuration.

**Try this:** see [Backing Up Your Data](/maintenance/backups) for backing it up and restoring it correctly (both files inside it need to travel together).

### Port mapping mistakes

The provided `docker-compose.yml` maps `4000:4000`. If you change the host-side port (the first number), you must also update `WEB_URL`/`API_URL` in the same file to match — otherwise Discord's OAuth callback will point at the wrong address and sign-in will fail.

### Permissions on persistent data

Veyra's container runs as a non-root user. The default named volume (`veyra-data`) needs no manual permission changes. If you switch to a host bind mount instead of the named volume, make sure that host directory is writable by the container's user, or Veyra won't be able to create its database.

### Environment/configuration mistakes

`WEB_URL` and `API_URL` need to reflect how *you* actually reach the container (your host's address and mapped port), not container-internal values. See [Environment Variables](/reference/environment-variables).

### Master Key Mismatch {#master-key-mismatch}

If Veyra's encryption key can't decrypt secrets already stored in the database, it refuses to serve requests rather than risk corrupting your data:

```
Veyra Master Key Mismatch: The active encryption key cannot decrypt existing installation
secrets in the database. Startup is suspended to prevent data corruption. Please verify your
data/master.key file or VEYRA_MASTER_KEY environment variable, or run "npm run reset:setup"
to reset first-run credentials.
```

This happens when a database (`veyra.db`) ends up paired with the wrong `master.key` — commonly from restoring a backup of one without the other, or manually setting `VEYRA_MASTER_KEY` to something that doesn't match what encrypted the existing data.

**Try this:**
1. If you have a matching backup, restore `master.key` alongside that same `veyra.db` — see [Backing Up Your Data](/maintenance/backups).
2. If you don't, or you're fine losing the stored Discord credentials, run `npm run reset:setup` (see [Resetting First-Run Setup](/maintenance/resetting-setup)) — this preserves all your module configuration, just not the encrypted credentials.

## Pterodactyl / Pelican

### Wrong Node image/version

Use a **Generic Node.js Server** egg on Node 22 or 24 — for example `ghcr.io/parkervcp/yolks:nodejs_22` or `nodejs_24`. See [Pterodactyl / Pelican](/installation/pterodactyl).

### Startup command problems

The panel's **Startup** command must be `npm start` (equivalently `node scripts/start.mjs`) — not a path directly into `apps/api` or `apps/bot`, which won't start both processes Veyra needs.

### Required ports

Veyra only needs the **one** port your panel allocates. Leave the `PORT` variable as <code v-pre>{{SERVER_PORT}}</code> so it's bound automatically.

### Persistent storage

`/home/container/data/veyra.db` and `/home/container/data/master.key` are created automatically on first boot and survive every **Stop**, **Start**, and **Restart** — no extra configuration needed.

### Common panel-specific mistakes

**Try this:**
1. Set both `WEB_URL` and `API_URL` to your panel's actual public address (<code v-pre>your-server-ip:{{SERVER_PORT}}</code> or your domain) — leaving them unset or pointed at `localhost` breaks sign-in from outside the panel itself.
2. For Music, confirm your egg image includes `ffmpeg` and `python3`, or install them via the panel's console — see [Pterodactyl / Pelican](/installation/pterodactyl).

## Veyra-Specific

### An automatic check keeps failing

See [Automatic Checks](/first-run/automatic-checks) — each failed check names exactly which credential to double check, and the [Discord & OAuth](#discord-oauth) section above covers the specific messages it can show.

### Module enabled but the feature appears inactive

Enabling a module only turns it on — configuring *and deploying* it is a separate step. See [Draft, Deploy & Publish](/dashboard/draft-deploy-publish) and [Bot Looks Online But Doesn't Respond](/troubleshooting/bot-not-responding).

### Bot lacks permission to perform a specific action

See [Missing Discord permissions](#missing-discord-permissions) and [Bot role hierarchy](#bot-role-hierarchy-preventing-an-action) above for the exact messages Veyra shows per panel type.

### A configured Discord channel or role was deleted afterward

Veyra checks that every channel and role a module references still exists before letting you deploy, and names the exact problem — for example:

- `The AutoMod logs channel no longer exists. Refresh Discord and select it again.`
- `An AutoMod exception role no longer exists. Refresh Discord and update the rule scope.`
- `A role used by giveaway {name} no longer exists. Refresh Discord and update eligibility.`

**Try this:** open the named module, click **Refresh Discord**, and re-pick the missing channel or role, then deploy again.

### Configuration appears saved but Discord behavior doesn't update

This is the Draft/Deploy/Publish distinction — see [Draft, Deploy & Publish](/dashboard/draft-deploy-publish) for the full explanation, or [Bot Looks Online But Doesn't Respond](/troubleshooting/bot-not-responding) for the quick checklist.

### System Health shows something degraded or unavailable

[System Health](/dashboard/system-health) reports each part of Veyra independently:

| Component | What a problem usually means |
|---|---|
| **Discord Worker** | Stale heartbeat — the bot process is slow, restarting, or stopped. |
| **Discord Gateway** | `reconnecting` — a brief drop, usually recovers on its own. `disconnected` — check the bot's console for a token/intent error above. |
| **SQLite Database** | The database file couldn't be read — check disk space and file permissions where `data/` lives. |
| **Fastify API** / **Dashboard & Events** | These being down means the dashboard itself wouldn't be reachable at all. |

**Try this:** if a component stays degraded for more than a minute or two, check that process's own console output for the underlying error, then see [Getting Help](/troubleshooting/getting-help) if you're stuck.

### Replacing Discord credentials without a full reset

If you only need to rotate a leaked/reset Bot Token, or swap in a new Client Secret — without redoing setup entirely — use [Bot Settings](/dashboard/bot-settings) → **Discord Application Credentials** rather than [Resetting First-Run Setup](/maintenance/resetting-setup). Existing secrets are never shown back to you; leave a field blank to keep its current value. Veyra validates whatever you enter before saving it, with messages like `Application ID must be a Discord snowflake (17–20 digits).` or `Client Secret looks incomplete.`

Use a full [reset](/maintenance/resetting-setup) instead if you're switching to a **different Discord application entirely**, not just rotating a secret on the same one.

## Still stuck?

See [Getting Help](/troubleshooting/getting-help).
