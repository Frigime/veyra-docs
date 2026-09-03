# The Bot Looks Online But Doesn't Respond

Your bot shows as online in Discord's member list, but a module you configured doesn't seem to do anything. Work through this in order — it's almost always one of these three.

## 1. Did you deploy?

By far the most common cause. Editing a module in the dashboard only creates a **draft** — nothing changes on Discord until you click **Deploy changes**. Check the header's revision indicator; if your draft number is higher than the deployed number, that's your answer.

→ [Draft, Deploy & Publish](/dashboard/draft-deploy-publish)

## 2. Does it also need Publish?

Roles panels, Ticket panels, and the Verification panel need a second click — that module's own **Publish** button — even after deploying, because deploying alone doesn't post or update the actual Discord message.

→ [Draft, Deploy & Publish](/dashboard/draft-deploy-publish)

## 3. Is a required privileged intent missing?

AutoMod and Anti-Raid silently can't function without their required Discord intent turned on.

→ [Privileged Intents](/discord-setup/privileged-intents)

## 4. Does the module have channel permissions?

Veyra needs, at minimum, **View Channel** and **Send Messages** in any channel a module is configured to post in — plus whatever else that specific module's page mentions (Roles needs **Manage Roles**, Temporary Voice needs **Manage Channels** and **Move Members**, and so on).

## Still not working?

Check [System Health](/dashboard/system-health) to confirm Veyra's Discord connection itself is healthy, then see [Module-Specific Issues](/troubleshooting/module-issues) or [Getting Help](/troubleshooting/getting-help).
