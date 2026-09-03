# Windows (One-Click Scripts)

The fastest way to run Veyra on a Windows PC, with no terminal commands to type.

## 1. Install Node.js

Veyra needs **Node.js 22 or newer**. Download and install it from [nodejs.org](https://nodejs.org) if you don't already have it — the default installer options are fine.

## 2. Install Veyra

Extract the Veyra release folder anywhere you like (e.g. your Desktop), then double-click:

```
install.bat
```

This installs Veyra's dependencies and compiles the production build. A console window will open and close automatically when it's done — this can take a few minutes the first time.

## 3. Start Veyra

Double-click:

```
start.bat
```

A console window opens and stays open — this is Veyra actually running. Leave it open while you use the bot.

## 4. Continue setup in your browser

Copy the **Veyra First-Run Setup Security Code** shown in the console window, then open:

```
http://localhost:4000
```

in your browser. Keep that console window handy — you'll paste the code into the browser in the next step.

::: tip
Before you continue, you'll need a Discord application. Head to [Discord Setup](/discord-setup/creating-application) next, then come back and finish with [First-Run Setup](/first-run/unlocking-setup).
:::
