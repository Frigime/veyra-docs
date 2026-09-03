# Draft, Deploy & Publish

This is the one concept worth understanding properly before you touch any module — it explains why changing a setting doesn't always change your Discord server right away.

## Draft: editing is always safe

Every setting you change in Veyra — toggling a rule, adding a role reward, editing a welcome message — is saved as a **draft** first. Your live Discord server keeps behaving exactly as it did before. You can experiment freely; nothing breaks while you're editing.

## Deploy: making the draft live

Nothing you've changed affects your real server until you click **Deploy changes** in the header. Deploying takes your entire draft — every module you've touched — and makes it the live, active configuration.

![The header's draft/live revision indicator, alongside the Deploy Changes button](/screenshots/dashboard/draft-deploy-header.png)

::: tip How to tell if you're up to date
The header shows something like `Brouillon #144 · En ligne #143` — your draft revision and the currently deployed revision. When they match, everything you've configured is live. When they don't, you have unsaved changes waiting to be deployed.
:::

## Publish: for messages Discord has to actually post

A few modules go one step further than deploy, because they control an actual message Veyra posts in your server — a self-role panel, a ticket panel, or a verification panel. For these, deploying updates the *setting*, but you additionally need to click that module's own **Publish** button to make Veyra create or update the real Discord message.

Modules that need Publish:

- [Roles](/community/roles) — self-role panels
- [Support → Tickets](/support/tickets) — ticket panels
- [Verification](/community/verification) — the verification panel

::: warning The most common "why isn't this working" moment
If you've edited a self-role, ticket, or verification panel and deployed it, but the message in Discord still looks old (or doesn't exist yet) — you likely just need to click that panel's **Publish** button too. Deploy and Publish are two separate steps for these three modules only.
:::

## The one exception: enabling/disabling a module

Turning a module on or off from the [Modules page](/dashboard/modules-page) is the *only* action in Veyra that takes effect immediately, without a Deploy step. Everything *inside* that module still follows the normal draft → deploy flow.

## Next

[Enabling & Disabling Modules](/dashboard/modules-page).
