# AutoMod

**AutoMod** automatically filters messages against a set of rules, so you don't have to catch every spam message or banned word by hand.

## What you'll need first

::: warning Requires an intent
AutoMod needs the **Message Content Intent** enabled in Discord's Developer Portal before it can read message text. See [Privileged Intents](/discord-setup/privileged-intents) — if you forget this, AutoMod will tell you exactly what's missing when you try to enable it.
:::

![AutoMod's rule list, showing each filter type and whether it's enabled](/screenshots/moderation/automod-rules.png)

## Available rules

AutoMod ships with several independent rule types you can turn on individually, each with its own severity, punishment, and channel scope:

- **Anti-Spam** — too many messages, too fast.
- **Duplicate Spam** — the same message repeated.
- **Mass Mentions** — too many user/role pings in one message.
- **Invite Links** — blocks Discord invite links (with an optional allowlist for your own server).
- **URL Filter** — blocks or restricts links by domain.
- **Banned Words** — blocks messages containing specific words or phrases you configure.
- **Caps Filter** — blocks excessive uppercase text.
- **Emoji Spam** — too many emoji in one message.
- **Newline Spam** — excessive line breaks.
- **Zalgo / Unicode Abuse** — blocks corrupted/decorative unicode text.
- **Attachments** — restricts file types or sizes.
- **Message Length** — caps how long a single message can be.

## Setting up a rule

1. Enable **AutoMod** from [Modules](/dashboard/modules-page).
2. Open **AutoMod**, pick a rule (for example **Banned Words**), and turn it on.
3. Configure what it should catch (for Banned Words: the actual list of terms) and what should happen when it triggers — delete the message, warn, timeout, and for how long.
4. Optionally scope it to specific channels, or exempt trusted roles/users.
5. Save the draft, then [deploy](/dashboard/draft-deploy-publish).

Every action AutoMod takes is recorded in [Moderation](/moderation/moderation)'s case history.
