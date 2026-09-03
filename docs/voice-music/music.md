# Music

**Music** plays audio in a voice channel — queue, playback controls, and a live Now Playing message — sourced from YouTube by default.

## What you'll need first

**Python 3** and **FFmpeg** must be available on the machine running Veyra (already true automatically if you're using [Docker](/installation/docker); otherwise see [What You'll Need](/getting-started/what-you-need)). Without them, Music's YouTube playback can't resolve or stream audio.

## First-time setup

1. Enable **Music** from [Modules](/dashboard/modules-page).
2. Open **Music** — you'll be asked to complete a one-time setup choosing your audio source. Veyra's managed YouTube fallback works out of the box with no extra credentials.
3. Optionally restrict Music to specific text/voice channels, set a DJ role required to control playback, and adjust the default volume and idle-disconnect timer.
4. Save the draft, then [deploy](/dashboard/draft-deploy-publish).

![The Now Playing card with an active track](/screenshots/voice-music/now-playing.png)

## Using it

Once deployed, members use Veyra's music commands in Discord (`/play`, `/pause`, `/resume`, `/skip`, `/stop`, `/queue`, `/nowplaying`, `/volume`, `/loop`, `/shuffle`, `/leave`) — or control playback directly from the dashboard's **Music** page, which mirrors what's happening live in the voice channel.

## See also

If Music won't play anything, see [Module-Specific Issues](/troubleshooting/module-issues) — most Music problems trace back to the Python/FFmpeg prerequisite above.
