import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/veyra-docs/',
  title: 'Veyra',
  description: 'Official documentation for Veyra — the self-hosted Discord bot studio.',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/veyra-docs/favicon.svg', type: 'image/svg+xml' }]
  ],

  themeConfig: {
    logo: '/favicon.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Modules', link: '/moderation/moderation' },
      { text: 'Troubleshooting', link: '/troubleshooting/common-setup-problems' }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Welcome to Veyra', link: '/getting-started/' },
          { text: 'What You\'ll Need', link: '/getting-started/what-you-need' },
          { text: 'Choosing an Install Method', link: '/getting-started/choosing-install-method' }
        ]
      },
      {
        text: 'Installation',
        collapsed: false,
        items: [
          { text: 'Windows (One-Click Scripts)', link: '/installation/windows' },
          { text: 'Linux, macOS & VPS', link: '/installation/linux-macos-vps' },
          { text: 'Docker', link: '/installation/docker' },
          { text: 'Pterodactyl / Pelican', link: '/installation/pterodactyl' }
        ]
      },
      {
        text: 'Discord Setup',
        collapsed: false,
        items: [
          { text: 'Creating Your Discord Application', link: '/discord-setup/creating-application' },
          { text: 'Getting Your Credentials', link: '/discord-setup/getting-credentials' },
          { text: 'Privileged Intents', link: '/discord-setup/privileged-intents' }
        ]
      },
      {
        text: 'First-Run Setup',
        collapsed: false,
        items: [
          { text: 'Unlocking Setup', link: '/first-run/unlocking-setup' },
          { text: 'Connecting Your Discord Application', link: '/first-run/connecting-discord' },
          { text: 'Automatic Checks', link: '/first-run/automatic-checks' },
          { text: 'Signing In & Choosing Your Server', link: '/first-run/signing-in-choosing-server' }
        ]
      },
      {
        text: 'Dashboard',
        collapsed: false,
        items: [
          { text: 'Dashboard Tour', link: '/dashboard/tour' },
          { text: 'Draft, Deploy & Publish', link: '/dashboard/draft-deploy-publish' },
          { text: 'Enabling & Disabling Modules', link: '/dashboard/modules-page' },
          { text: 'Analytics', link: '/dashboard/analytics' },
          { text: 'Activity', link: '/dashboard/activity' },
          { text: 'System Health', link: '/dashboard/system-health' },
          { text: 'Server Settings', link: '/dashboard/server-settings' },
          { text: 'Bot Settings', link: '/dashboard/bot-settings' },
          { text: 'Themes', link: '/dashboard/themes' },
          { text: 'Language', link: '/dashboard/language' }
        ]
      },
      {
        text: 'Moderation',
        collapsed: true,
        items: [
          { text: 'Moderation', link: '/moderation/moderation' },
          { text: 'AutoMod', link: '/moderation/automod' },
          { text: 'Anti-Raid', link: '/moderation/anti-raid' },
          { text: 'Anti-Nuke', link: '/moderation/anti-nuke' },
          { text: 'Logs', link: '/moderation/logs' }
        ]
      },
      {
        text: 'Community',
        collapsed: true,
        items: [
          { text: 'Welcome', link: '/community/welcome' },
          { text: 'Goodbye', link: '/community/goodbye' },
          { text: 'Verification', link: '/community/verification' },
          { text: 'Roles', link: '/community/roles' },
          { text: 'Levels', link: '/community/levels' },
          { text: 'Economy', link: '/community/economy' }
        ]
      },
      {
        text: 'Support',
        collapsed: true,
        items: [
          { text: 'Tickets', link: '/support/tickets' }
        ]
      },
      {
        text: 'Engagement',
        collapsed: true,
        items: [
          { text: 'Giveaways', link: '/engagement/giveaways' },
          { text: 'Polls', link: '/engagement/polls' }
        ]
      },
      {
        text: 'Voice & Music',
        collapsed: true,
        items: [
          { text: 'Music', link: '/voice-music/music' },
          { text: 'Temporary Voice', link: '/voice-music/temporary-voice' }
        ]
      },
      {
        text: 'Automation',
        collapsed: true,
        items: [
          { text: 'Automations', link: '/automation/automations' },
          { text: 'Custom Commands', link: '/automation/custom-commands' },
          { text: 'Social Feeds', link: '/automation/social-feeds' }
        ]
      },
      {
        text: 'Configuration',
        collapsed: true,
        items: [
          { text: 'Embed Builder', link: '/configuration/embed-builder' }
        ]
      },
      {
        text: 'Maintenance',
        collapsed: true,
        items: [
          { text: 'Backing Up Your Data', link: '/maintenance/backups' },
          { text: 'Updating Veyra', link: '/maintenance/updating' },
          { text: 'Resetting First-Run Setup', link: '/maintenance/resetting-setup' }
        ]
      },
      {
        text: 'Troubleshooting / FAQ',
        collapsed: true,
        items: [
          { text: 'Common Setup Problems', link: '/troubleshooting/common-setup-problems' },
          { text: 'Bot Looks Online But Doesn\'t Respond', link: '/troubleshooting/bot-not-responding' },
          { text: 'Module-Specific Issues', link: '/troubleshooting/module-issues' },
          { text: 'Getting Help', link: '/troubleshooting/getting-help' }
        ]
      },
      {
        text: 'Reference',
        collapsed: true,
        items: [
          { text: 'Security & Privacy', link: '/reference/security' },
          { text: 'Environment Variables', link: '/reference/environment-variables' },
          { text: 'Reverse Proxy / Custom Domain', link: '/reference/reverse-proxy' }
        ]
      }
    ],

    socialLinks: [],

    footer: {
      message: 'Veyra — self-hosted Discord bot studio.',
      copyright: 'Configure → Preview → Deploy'
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next'
    }
  }
})
