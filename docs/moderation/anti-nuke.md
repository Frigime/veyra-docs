# Anti-Nuke

**Anti-Nuke** watches for rapid, destructive changes to your server — channels or roles being mass-deleted, a wave of bans, dangerous permissions being granted — the pattern of a compromised admin account or a malicious bot, and can automatically respond before real damage is done.

## Available protections

Turn on individually, each with its own threshold and response: channel deletion/creation, role deletion/creation, mass ban, mass kick, webhook creation/deletion, dangerous role permission updates, administrator grants, and suspicious bot additions.

## Setting it up

1. Enable **Anti-Nuke** from [Modules](/dashboard/modules-page).
2. Open **Anti-Nuke**, turn on the protections you want (**Mass Ban** is a sensible first one), and set a **logs channel**.
3. Mark trusted roles/users (typically yourself and senior staff) so their own legitimate actions never trigger a false alarm.
4. Save the draft, then [deploy](/dashboard/draft-deploy-publish).

## See also

[Anti-Raid](/moderation/anti-raid) for the join-flood threat, rather than destructive-action threat this module covers.
