# Creating Your Discord Application

Before Veyra can connect to Discord, you need a Discord **application** — this is what turns into your bot. Discord requires this to be created through their own Developer Portal; Veyra can't create it for you.

## 1. Open the Developer Portal

Go to [discord.com/developers/applications](https://discord.com/developers/applications) and sign in with the Discord account you want to own the bot.

## 2. Create a new application

Click **New Application**, give it a name (this becomes your bot's display name — you can change it later), and accept the terms.

## 3. Open the Bot tab

In the left sidebar of your new application, click **Bot**. This is where your bot's identity and token live.

## 4. Get your bot token

Click **Reset Token** (or **Copy**, if this is a brand-new application) and copy the token somewhere temporary — you'll paste it into Veyra in a moment, in [Connecting Your Discord Application](/first-run/connecting-discord).

::: warning Keep this secret
Your bot token is effectively your bot's password. Anyone with it can control your bot. Veyra encrypts it the moment you enter it and never displays it again — but until then, don't share it or paste it anywhere except Veyra's setup wizard.
:::

## Next

- [Getting Your Credentials](/discord-setup/getting-credentials) — where to find the other two values Veyra needs.
- [Privileged Intents](/discord-setup/privileged-intents) — one more thing to turn on here if you plan to use AutoMod or Anti-Raid.
