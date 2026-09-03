# Custom Commands

**Custom Commands** lets you create your own server-specific commands — a name, a trigger style, and a response — without writing any code.

## Setting it up

1. Enable **Custom Commands** from [Modules](/dashboard/modules-page).
2. Open **Custom Commands**, click to create a new one.
3. Give it a name, choose how it's triggered (slash command, a text prefix, or both), and write its response (supports plain text or a rich embed, with variables like `{user.mention}` and `{server.name}`).
4. Optionally restrict it to certain roles or channels, add a cooldown, or make its response ephemeral (only visible to the person who ran it).
5. Save — commands are active as soon as you save, no separate deploy step.

## Using it

Once created, members can run it as `/customcommand run name:<yourcommand>`, or by typing your configured prefix if you enabled prefix triggering (for example `!yourcommand`).
