# Privileged Intents

Some Veyra modules need Discord to share information it doesn't hand out by default — Discord calls these **Privileged Gateway Intents**, and you turn them on yourself, once, in the Developer Portal.

## Where to find them

In your application, open the **Bot** tab and scroll to **Privileged Gateway Intents**. You'll see three toggles; Veyra needs two of them, depending on which modules you use:

| Intent | Turn it on if you use… |
|---|---|
| **Server Members Intent** | **Anti-Raid** (it needs to see members joining) |
| **Message Content Intent** | **AutoMod** (it needs to read message text to filter it) |
| Presence Intent | Not required by any Veyra V1 module — safe to leave off |

## Turning them on

Toggle the switch for each intent you need, then click **Save Changes** at the bottom of the page.

::: tip You can do this later
You don't have to enable these before finishing First-Run Setup. If you skip them, AutoMod and Anti-Raid will tell you exactly which intent is missing when you try to enable them — just come back to this page, flip the toggle, and try again.
:::

## Next

Continue to [First-Run Setup](/first-run/unlocking-setup) to finish connecting Veyra.
