# Temporary Voice

**Temporary Voice** creates a private, owner-controlled voice room automatically whenever someone joins a designated "trigger" channel — and deletes it automatically once everyone leaves.

## What you'll need first

A real voice channel to use as the trigger, and optionally a category for created rooms to appear under.

## Setting it up

1. Enable **Temporary Voice** from [Modules](/dashboard/modules-page).
2. Open **Temporary Voice**, select your trigger voice channel and (optionally) a category.
3. Set a naming template (for example `🎧 {username}'s room`), a default user limit, and how long an empty room waits before being deleted.
4. Choose which controls the room's owner gets: rename, lock, set user limit, remove members.
5. Save the draft, then [deploy](/dashboard/draft-deploy-publish) — the change takes effect within a few seconds.

## Using it

A member joins the trigger channel → Veyra creates a room and moves them into it, marking them as owner. From inside that room, the owner can use `/voice rename`, `/voice lock`, `/voice unlock`, `/voice limit`, and `/voice remove` (whichever controls you enabled). When the room empties out, Veyra deletes it after the configured delay.

::: tip Permissions
Veyra needs **Manage Channels**, **Move Members**, **View Channels**, and **Connect** permissions in your server for this module to work.
:::
