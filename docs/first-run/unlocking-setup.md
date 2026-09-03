# Unlocking Setup

The first time you open Veyra's dashboard, it's in **setup mode** — nothing works yet except the setup wizard itself, and it's protected by a one-time code so a stranger can't configure your bot before you do.

## Find your security code

When Veyra starts for the first time, its console prints something like:

```
Veyra First-Run Setup Security Code: A7B2-9F4D
```

This appears in whichever console you used to start Veyra — see [Installation](/installation/windows) if you don't have it open anymore.

## Enter the code

Open Veyra's dashboard address in your browser (`http://localhost:4000` unless you configured something else) and type in the code shown.

Once accepted, you'll move on to connecting your Discord application.

::: tip This code only matters once
After you finish First-Run Setup, this code is permanently deleted and can never be used again — setup mode closes for good. If you ever need to redo First-Run Setup entirely (wrong Discord application, for example), see [Resetting First-Run Setup](/maintenance/resetting-setup).
:::

## Next

[Connecting Your Discord Application](/first-run/connecting-discord).
