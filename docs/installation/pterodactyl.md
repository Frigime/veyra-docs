# Pterodactyl / Pelican

Veyra runs on a standard Node.js Pterodactyl or Pelican server — no Docker-in-Docker or custom daemon needed.

## Requirements

- **Server type**: Generic Node.js Server (Node.js 22 or 24)
- **Egg/image**: the official `Node.js (Generic)` egg, or an equivalent Node 22/24 image
- **Memory**: 512 MB minimum, 1 GB recommended for busier servers

## 1. Upload Veyra

Upload the Veyra release files (or pull the repository) into `/home/container` using your panel's file manager or SFTP.

## 2. Install and build

In your panel's Console/Terminal tab:

```bash
npm install
npm run build
```

## 3. Set the startup command

In the panel's **Startup** tab, set the startup command to:

```
npm start
```

(equivalently `node scripts/start.mjs`)

## 4. Set panel variables

In the panel's **Variables** section:

- `PORT` — leave as <code v-pre>{{SERVER_PORT}}</code> (bound automatically to your allocated port)
- `WEB_URL` — your public address, e.g. <code v-pre>your-server-ip:{{SERVER_PORT}}</code> (over `http`) or `https://bot.yourdomain.com`
- `API_URL` — same as `WEB_URL`

No Discord tokens or encryption keys go in panel variables — you'll enter those later, inside Veyra's own setup wizard.

## 5. Start the server

Click **Start**. Watch the console for the **Veyra First-Run Setup Security Code**.

Open <code v-pre>your-server-ip:{{SERVER_PORT}}</code> (or your domain) in a browser and enter the code.

## Data persistence

Veyra's database (`/home/container/data/veyra.db`) and encryption key (`/home/container/data/master.key`) are created automatically on first boot and survive every **Stop**, **Start**, and **Restart** in the panel.

::: tip
Next you'll need a Discord application — see [Discord Setup](/discord-setup/creating-application), then finish with [First-Run Setup](/first-run/unlocking-setup).
:::
