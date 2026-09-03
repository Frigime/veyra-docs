# Connecting Your Discord Application

This is the step where you tell Veyra which Discord application to use. Have the four values from [Getting Your Credentials](/discord-setup/getting-credentials) ready.

::: tip Storage provider
Just before this step, Veyra may ask you to confirm a storage provider. In Veyra 1.0, **SQLite** is the only available option — it needs no separate database server and is production-ready out of the box, so you can just continue.
:::

## Fill in the form

- **Application ID** — from Discord's General Information tab.
- **Client Secret** — from Discord's OAuth2 tab. Kept encrypted the moment you submit it.
- **Bot Token** — from Discord's Bot tab. Never sent back to your browser again after this.
- **Public Dashboard URL** — the address *you* and anyone you invite will use to reach Veyra: `http://localhost:4000` for local use, a LAN IP for your home network, or a real domain if you're exposing Veyra publicly.
- **OAuth Redirect URI** — Veyra fills this in automatically from your Public Dashboard URL. Click **Copy URI**, then go add it in Discord's OAuth2 → Redirects (see [Getting Your Credentials](/discord-setup/getting-credentials) if you need the exact steps).

Click **Save & verify** once everything is filled in and the Redirect URI has been added on Discord's side.

## Next

[Automatic Checks](/first-run/automatic-checks).
