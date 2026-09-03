# Tickets

**Tickets** gives members a button to open a private support channel with your staff, with claiming, transcripts, and automatic cleanup.

## What you'll need first

A text channel for the panel, and optionally a category for opened tickets to be created under.

![The Tickets configure tab, editing the default Support panel](/screenshots/support/tickets-configure.png)

## Setting it up

1. Enable **Tickets** from [Modules](/dashboard/modules-page).
2. Open **Tickets**, click **New panel** (or edit the default **Support** panel Veyra starts you with).
3. Set the publication channel, and optionally a category for open tickets and a separate category to move closed tickets into.
4. Assign **staff roles** who can see and manage opened tickets.
5. Customize the button label/emoji, the panel message, and the message shown when a ticket opens.
6. Set limits if you want them — maximum open tickets per member, a cooldown between opens.
7. Save the draft, then [deploy](/dashboard/draft-deploy-publish).
8. Click **Publish** to post the panel to Discord.

![A published ticket panel as it appears in Discord](/screenshots/support/tickets-discord-panel.png)

## Managing open tickets

From the **Tickets** page, staff can claim a ticket (assign themselves), close it, reopen it, or generate a transcript. If **Transcript on close** is enabled, Veyra automatically saves a record of the conversation when a ticket is closed.

::: warning Deleting a panel doesn't delete its Discord message
Removing a panel from the dashboard only removes the *draft* — if it was already published, the message stays in Discord until you delete it there yourself. Existing (already-opened) tickets are also unaffected by deleting the panel that created them.
:::
