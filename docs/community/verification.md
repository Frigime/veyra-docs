# Verification

**Verification** requires new members to complete a step before they can access the rest of your server — useful for keeping out bots and raiders.

## What you'll need first

- A text channel for the verification panel to live in.
- A role to grant once someone verifies (this role should sit *below* Veyra's own role in your server's role list).

![The Verification configure tab, alongside a live Discord preview of the panel](/screenshots/community/verification-configure.png)

## Verification methods

Choose whichever fits how strict you want to be:

- **Simple Button** — one click, fastest.
- **Image CAPTCHA** — type the characters shown in a generated image.
- **Rules Acceptance** — must acknowledge server rules first.
- **Question** — must answer a question you set.
- **Multi-Step** — combine more than one of the above.

## Setting it up

1. Enable **Verification** from [Modules](/dashboard/modules-page).
2. Open **Verification**, select the channel and the role to grant on success.
3. Choose a method and configure it (for CAPTCHA: length and attempt limits; for Question: your question and expected answer).
4. Save the draft, then [deploy](/dashboard/draft-deploy-publish) — this saves your settings.
5. Click **Publish panel** to actually post (or update) the verification message in Discord. See [Draft, Deploy & Publish](/dashboard/draft-deploy-publish) for why this extra step exists.

::: tip Testing it
Test with a second Discord account if you have one — verifying with your own admin account won't tell you much, since admins can usually already do everything.
:::
