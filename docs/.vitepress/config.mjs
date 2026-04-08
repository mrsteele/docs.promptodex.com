import { defineConfig } from 'vitepress'

const GITHUB_REPO = 'https://github.com/mrsteele/docs.promptodex.com'

export default defineConfig({
  title: 'Promptodex Docs',
  description: 'Documentation for Promptodex — Version Control for AI Prompts',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  markdown: {
    config: (md) => {
      // Add v-pre to all inline code so {{ }} syntax is not parsed by Vue
      md.renderer.rules.code_inline = (tokens, idx) => {
        const content = md.utils.escapeHtml(tokens[idx].content)
        return `<code v-pre>${content}</code>`
      }
    },
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Promptodex',

    nav: [
      { text: 'Guide', link: '/introduction/what-is-promptodex' },
      { text: 'API Reference', link: '/api/' },
      { text: 'Examples', link: '/examples/' },
      { text: 'Promptodex', link: 'https://promptodex.com' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Promptodex?', link: '/introduction/what-is-promptodex' },
          { text: 'Why Promptodex?', link: '/introduction/why-promptodex' },
          { text: 'Core Concepts', link: '/introduction/core-concepts' },
        ],
      },
      {
        text: 'Quick Start',
        items: [
          { text: 'Installation', link: '/quick-start/installation' },
          { text: 'Your First Prompt', link: '/quick-start/first-prompt' },
          { text: 'Using Variables', link: '/quick-start/using-variables' },
          { text: 'Piping Input', link: '/quick-start/piping-input' },
        ],
      },
      {
        text: 'Writing Prompts',
        items: [
          { text: 'Prompt Structure', link: '/writing-prompts/prompt-structure' },
          { text: 'Variables', link: '/writing-prompts/variables' },
          { text: 'Defaults', link: '/writing-prompts/defaults' },
          { text: 'Best Practices', link: '/writing-prompts/best-practices' },
        ],
      },
      {
        text: 'CLI (pod-cli)',
        items: [
          { text: 'Installation', link: '/cli/installation' },
          { text: 'Commands', link: '/cli/commands' },
          { text: 'Passing Variables', link: '/cli/passing-variables' },
          { text: 'Configuration', link: '/cli/configuration' },
          { text: 'Authentication', link: '/cli/authentication' },
          { text: 'Project Management', link: '/cli/project-management' },
        ],
      },
      {
        text: 'Using in Code',
        items: [
          { text: 'Overview', link: '/sdk/overview' },
          { text: 'Node.js', link: '/sdk/nodejs' },
          { text: 'TypeScript', link: '/sdk/typescript' },
          { text: 'Private Prompts', link: '/sdk/private-prompts' },
        ],
      },
      {
        text: 'Publishing Prompts',
        items: [
          { text: 'Creating Prompts', link: '/publishing/creating-prompts' },
          { text: 'Versioning', link: '/publishing/versioning' },
          { text: 'Private Prompts', link: '/publishing/private-prompts' },
        ],
      },
      {
        text: 'Registry',
        items: [
          { text: 'Finding Prompts', link: '/registry/finding-prompts' },
          { text: 'Slugs', link: '/registry/namespaces' },
          { text: 'Trust & Security', link: '/registry/trust-and-security' },
        ],
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Version Pinning', link: '/advanced/version-pinning' },
          { text: 'Pipelines', link: '/advanced/pipelines' },
          { text: 'Prompt Testing', link: '/advanced/testing' },
        ],
      },
      {
        text: 'API Reference',
        items: [
          { text: 'CLI Commands', link: '/api/' },
          { text: 'SDK API', link: '/api/sdk' },
          { text: 'Template Syntax', link: '/api/template-syntax' },
        ],
      },
      {
        text: 'Examples',
        link: '/examples/',
      },
      {
        text: 'Community',
        link: '/community/',
      },
    ],

    editLink: {
      pattern: `${GITHUB_REPO}/edit/main/docs/:path`,
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: GITHUB_REPO },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2026 Promptodex',
    },

    search: {
      provider: 'local',
    },
  },
})
