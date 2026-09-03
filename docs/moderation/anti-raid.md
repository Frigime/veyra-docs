# Anti-Raid

**Anti-Raid** watches for unusually fast waves of new members joining — the signature of a raid — and responds automatically before you're even online to react.

## What you'll need first

::: warning Requires an intent
Anti-Raid needs the **Server Members Intent** enabled in Discord's Developer Portal to see members joining. See [Privileged Intents](/discord-setup/privileged-intents).
:::

## How it works

Anti-Raid tracks join rate and how many of those new accounts look suspiciously young, and escalates through severity levels (elevated → high → critical) as the pattern gets worse — each level can trigger its own response, such as alerting your staff or forcing new members through [Verification](/community/verification).

## Setting it up

1. Enable **Anti-Raid** (part of the Security module) from [Modules](/dashboard/modules-page).
2. Open **Anti-Raid**, set a **logs channel** for alerts.
3. Optionally set a **quarantine role** to automatically restrict suspicious joiners, and mark any roles/accounts as trusted so they're never flagged.
4. Save the draft, then [deploy](/dashboard/draft-deploy-publish).

## See also

[Anti-Nuke](/moderation/anti-nuke) protects against a different threat — a compromised staff account making destructive changes, rather than a wave of new joins.
