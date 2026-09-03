# Reverse Proxy / Custom Domain

If you want to run Veyra behind a reverse proxy (nginx, Caddy, Traefik, etc.) or serve it from your own domain instead of `localhost` or a raw IP/port, there are a couple of things to line up so sign-in and OAuth keep working correctly.

## Why this matters

Veyra's sign-in flow uses Discord OAuth, which redirects back to a specific URL after you authorize the application. That URL has to match, exactly, in three places:

1. What Discord is told to redirect to (set in the [Discord Developer Portal](/discord-setup/creating-application))
2. What Veyra expects (`DISCORD_REDIRECT_URI` — see [Environment Variables](/reference/environment-variables))
3. The actual public address your dashboard is reachable at

If any of these disagree — `http` vs `https`, a missing/extra trailing slash, `www.` vs no `www.`, or the wrong port — sign-in will fail.

## Basic setup

1. Point your reverse proxy at Veyra's dashboard (and API, if served separately) on their local ports.
2. Terminate TLS (HTTPS) at the reverse proxy if you want a secure public URL — recommended for anything beyond local testing.
3. Set `WEB_URL` (and `API_URL`, if applicable) to your final public URL, e.g. `https://bot.yourdomain.com`.
4. Set `DISCORD_REDIRECT_URI` to match the redirect URI you register in the Discord Developer Portal, using your public domain.
5. Update the redirect URI in your Discord application's OAuth settings to match exactly.
6. Restart Veyra so the new environment values take effect.

::: tip Test with a fresh sign-in
After changing any of these, sign out and sign back in through the dashboard to confirm the OAuth round trip completes cleanly.
:::

## Common pitfalls

- **Trailing slash mismatches** — `https://bot.example.com/callback` and `https://bot.example.com/callback/` are different URIs to Discord.
- **HTTP vs HTTPS** — if your reverse proxy terminates TLS, make sure Veyra is configured to generate `https://` URLs, not `http://`.
- **Proxy not forwarding headers** — some reverse proxies need explicit configuration to forward the original host/protocol so Veyra generates correct URLs. Check your proxy's documentation for `X-Forwarded-Proto` / `X-Forwarded-Host` equivalents.

If sign-in still fails after double-checking the above, see [Common Setup Problems](/troubleshooting/common-setup-problems).
