# Getting Your Credentials

Veyra's setup wizard asks for four pieces of information. Here's exactly where each one lives in the Discord Developer Portal, so you can keep this page open while you fill in the wizard.

| Field in Veyra | Where to find it in Discord |
|---|---|
| **Application ID** | **General Information** tab → *Application ID* |
| **Client Secret** | **OAuth2** tab → *Client Information* → *Client Secret* (click **Reset Secret** if none is shown) |
| **Bot Token** | **Bot** tab → *Reset Token* / *Copy* (see [Creating Your Discord Application](/discord-setup/creating-application)) |
| **OAuth Redirect URI** | Generated *by Veyra* — you copy it *into* Discord, not out of it (see below) |

## The OAuth Redirect URI is different

Unlike the other three, the Redirect URI doesn't come from Discord — Veyra generates it for you based on the Public Dashboard URL you enter during setup, and shows it with a **Copy URI** button. You then paste *that* into Discord:

**OAuth2** tab → **Redirects** → **Add Redirect** → paste the URI Veyra gave you → **Save Changes**.

::: warning The #1 cause of setup failing
If Discord rejects your sign-in during setup with a redirect-related error, it's almost always because this URI wasn't added on the Discord side, or doesn't match exactly (including `http` vs `https`). Double-check it was saved in Discord before retrying.
:::

## Next

[Privileged Intents](/discord-setup/privileged-intents) — required if you plan to use AutoMod or Anti-Raid.
