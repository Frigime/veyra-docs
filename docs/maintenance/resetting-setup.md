# Resetting First-Run Setup

If you connected the wrong Discord application, or need to start the setup wizard over, you don't have to lose your configuration to do it.

## What this does

```bash
npm run reset:setup
```

This clears only your installation credentials and active sessions. Everything else — every module's configuration, moderation cases, tickets, leveling data, and economy balances — is preserved.

::: warning When you'd actually want this
This is for fixing a setup mistake (wrong Application ID, wrong bot entirely), not routine maintenance. If you just want to change your bot's presence or appearance, see [Bot Settings](/dashboard/bot-settings) instead — nothing there requires a reset.
:::

## After resetting

Start Veyra again and you'll land back at [Unlocking Setup](/first-run/unlocking-setup) with a fresh security code, ready to connect a (possibly different) Discord application.
