# Enabling & Disabling Modules

Every optional part of Veyra — AutoMod, Tickets, Music, all of it — starts **disabled**. You turn on only what you actually want to use.

## Where to find it

Open **Configuration → Modules** in the sidebar to see every available module, whether it's enabled, and a short description of what it does.

![The Modules page, showing every module as a toggleable card](/screenshots/dashboard/modules.png)

## Turning a module on or off

Click a module's toggle. Unlike everything else in Veyra, this takes effect **immediately** — no Deploy step needed. The moment you flip it, the module starts (or stops) running on your real Discord server.

::: tip Why is this different from everything else?
Enabling a module doesn't change *how* it behaves — it just decides whether it runs at all. All of the actual configuration inside that module (which channel, which roles, what message) still goes through the normal [Draft, Deploy & Publish](/dashboard/draft-deploy-publish) flow, and won't do anything on Discord until you configure it and deploy.
:::

## A sensible order

For most modules, a good first pass is:

1. Enable the module here.
2. Open its page from the sidebar and configure it.
3. Save the draft.
4. Click **Deploy changes**.
5. If it's Roles, Tickets, or Verification — also click that module's **Publish** button.

## Next

Once you're comfortable with modules, jump into whichever ones you actually want to use — start with [Moderation](/moderation/moderation) or [Welcome](/community/welcome) if you're not sure.
