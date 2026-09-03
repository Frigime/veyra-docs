# Security & Privacy

An overview of how Veyra protects your data and what to keep in mind when self-hosting it.

## Where your data lives

Veyra V1 is **SQLite-only**. All of your server's configuration, moderation logs, leveling data, economy balances, ticket transcripts, and every other piece of data your bot collects is stored in a single local SQLite database file on the machine (or container) where you installed Veyra.

::: tip Your data never leaves your server
Veyra does not send your Discord data to any third-party service or external Veyra-operated backend. Everything stays in your own database, on your own infrastructure.
:::

## Credentials

The credentials Veyra needs to operate — your bot token, client secret, and related Discord application secrets — are entered once during [First-Run Setup](/first-run/connecting-discord) and stored encrypted in your local database. They are never displayed again in full inside the dashboard after setup, and they are never transmitted anywhere outside the connection between your dashboard, your API, and Discord's own servers.

If you ever need to change your bot's credentials (for example, after rotating your bot token in the Discord Developer Portal), see [Resetting First-Run Setup](/maintenance/resetting-setup).

## No license activation or DRM

Veyra 1.0 does not phone home for license checks, does not require activation, and has no DRM. Once installed, it runs entirely under your control with no dependency on an external licensing server.

## Dashboard access

Access to your Veyra dashboard is protected by the sign-in flow you completed during [First-Run Setup](/first-run/signing-in-choosing-server) — your Discord account, authenticated through Discord's own OAuth. Only Discord accounts you've authorized can manage a given server's configuration.

::: warning Treat your dashboard URL like an admin panel
Anyone who can reach your dashboard's sign-in page and has the appropriate Discord permissions on your server can potentially manage it. If you expose your dashboard publicly (see [Reverse Proxy / Custom Domain](/reference/reverse-proxy)), make sure you understand who has access.
:::

## Backups

Because everything lives in one SQLite file, backing up your Veyra installation is straightforward — see [Backing Up Your Data](/maintenance/backups) for the recommended approach.

## Reporting a security concern

If you believe you've found a security issue with Veyra, please reach out through the support channel described in [Getting Help](/troubleshooting/getting-help) rather than posting details publicly.
