# Automatic Checks

Before asking you to sign in, Veyra checks that everything you just entered actually works — so you find out about a typo now, not after clicking around blindly.

Veyra checks, in order:

1. **Database** — that Veyra can read and write its own storage.
2. **Discord application** — that the Application ID is real and reachable.
3. **Bot authentication** — that the Bot Token is valid and Discord accepts it.
4. **OAuth configuration** — that the Client Secret and Redirect URI are set up correctly.

## If a check fails

Each failed check explains what's wrong. The most common issues:

- **Bot authentication fails** — the Bot Token was mistyped, or was reset in Discord after you copied it (tokens shown by Discord are one-time views; if you reset it again, copy the *new* one).
- **OAuth configuration fails** — the Redirect URI wasn't added in Discord, or doesn't match exactly. See [Getting Your Credentials](/discord-setup/getting-credentials).

Click **Edit credentials** to go back and fix a value, then **Run checks again**.

## Next

Once every check passes, continue to [Signing In & Choosing Your Server](/first-run/signing-in-choosing-server).
