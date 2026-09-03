# Module-Specific Issues

Issues specific enough to one module that they don't belong on the general [Bot Not Responding](/troubleshooting/bot-not-responding) page.

## Music won't play anything

Music's YouTube fallback needs **Python 3** and **FFmpeg** installed on the machine running Veyra (already handled for you if you're on [Docker](/installation/docker)). If either is missing, playback will fail to resolve. See [What You'll Need](/getting-started/what-you-need) and [Music](/voice-music/music).

## Verification's role isn't being granted

The role you configured to grant on verification must sit **below** Veyra's own role in your server's role list — Discord doesn't allow a bot to assign a role positioned above its own highest role. Move Veyra's role higher, or the verified role lower, in **Server Settings → Roles** on Discord itself.

## AutoMod or Anti-Raid won't turn on

These two need a Discord privileged intent enabled first. See [Privileged Intents](/discord-setup/privileged-intents) — the module will name exactly which one is missing.

## A self-role, ticket, or verification panel looks outdated in Discord

You likely deployed your changes but didn't also click that module's **Publish** button. See [Draft, Deploy & Publish](/dashboard/draft-deploy-publish).

## More module-specific issues will be added here after launch

If you hit something not covered above, see [Getting Help](/troubleshooting/getting-help).
