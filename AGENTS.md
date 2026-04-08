# AGENTS.md

> **Important:** Always update this file when something is added, changed, or amended in the project. This serves as the living memory for AI agents working on this repo.

## Project Overview

- **Site:** Documentation for [Promptodex](https://promptodex.com) — "The GitHub for AI Prompts"
- **Framework:** [VitePress](https://vitepress.dev) (v1.x)
- **Content:** All pages are Markdown files under `docs/`
- **GitHub repo:** `mrsteele/docs.promptodex.com`

## Commands

| Command | Purpose |
|---------|---------|
| `npm run docs:dev` | Dev server with hot reload |
| `npm run docs:build` | Production build |
| `npm run docs:preview` | Preview the production build locally |

## Project Structure

```
docs/
  index.md                  # Homepage (VitePress frontmatter layout: home)
  .vitepress/
    config.mjs              # Site config, nav, sidebar, plugins
  introduction/             # What/Why/Core Concepts
  quick-start/              # Install, First Prompt, Variables, Piping
  writing-prompts/          # Prompt Structure, Variables, Defaults, Best Practices
  cli/                      # pod-cli: Install, Commands, Passing Variables, Config, Auth, Project Mgmt
  sdk/                      # promptodex npm: Overview, Node.js, TypeScript, Private Prompts
  publishing/               # Creating Prompts, Versioning, Private Prompts
  registry/                 # Finding Prompts, Slugs, Trust & Security
  advanced/                 # Version Pinning, Pipelines, Testing
  api/                      # CLI Commands ref, SDK API ref, Template Syntax ref
  examples/                 # Real-world CLI + code recipes
  community/                # Contributing, repos, reporting issues
```

## Key Gotcha: `{{` Double Curly Braces

VitePress uses Vue under the hood, so `{{` in Markdown is parsed as a Vue template expression. This is a **critical** issue because Promptodex template syntax uses `{{variableName}}` everywhere.

### How it's handled

1. **Code fences** (triple backtick blocks) are safe — Vue doesn't parse inside them.
2. **Inline code** (`backticks`) — a custom markdown-it plugin in `config.mjs` adds `v-pre` to all inline `<code>` elements so `{{}}` is not parsed.
3. **Plain text / table cells** — wrap the section in `<div v-pre>...</div>` to disable Vue parsing (see `api/template-syntax.md` for an example).
4. **YAML frontmatter** — avoid `{{` entirely in frontmatter values; rephrase instead.

If a build fails with a `vue` error about "Did not expect a type annotation here", it's almost certainly an unescaped `{{` in non-code-block context.

## Important: No Namespace Syntax

Prompt slugs do **not** use namespace prefixes. Use `summarize`, not `mrsteele/summarize`. The only place `mrsteele/` should appear is in GitHub repo URLs.

## SEO & Crawler Optimization

- **Sitemap** auto-generated at `/sitemap.xml` via VitePress `sitemap` config.
- **robots.txt** at `docs/public/robots.txt` — allows all crawlers.
- **llms.txt** at `docs/public/llms.txt` — AI crawler summary (emerging standard for GPTBot, Claude, etc.).
- **Open Graph / Twitter Card** meta tags in `config.mjs` `head` array.
- **Meta keywords & description** in `config.mjs`.
- **Canonical URL** set to `https://docs.promptodex.com`.
- The site URL is defined as `SITE_URL` constant at the top of `config.mjs`.

## Static Assets

- `docs/public/logo.svg` — copied from promptodex.com
- `docs/public/robots.txt`
- `docs/public/llms.txt`

## Adding New Pages

1. Create the `.md` file in the appropriate `docs/` subdirectory.
2. Add a sidebar entry in `docs/.vitepress/config.mjs` under the appropriate section.
3. If the page uses `{{variable}}` in plain text (outside code fences), use `<div v-pre>` wrappers.
4. Run `npm run docs:build` to verify no Vue parse errors.

## Features Configured

- **Edit link:** Every page has "Edit this page on GitHub" linking to `mrsteele/docs.promptodex.com` on the `main` branch.
- **Local search:** Built-in VitePress search (`search.provider: 'local'`).
- **GitHub social link:** In the nav bar.
- **Footer:** MIT license, © 2026 Promptodex.

## External Services Documented

| Service | What it is | npm package |
|---------|-----------|-------------|
| [promptodex.com](https://promptodex.com) | Web UI for creating/browsing/forking prompts | — |
| pod-cli | CLI to fetch/run prompts from the terminal | `pod-cli` |
| promptodex SDK | JS/TS library to fetch/render prompts in code (does NOT run AI models) | `promptodex` |

## Conventions

- Cross-link between pages rather than duplicating content.
- Use VitePress `::: tip` / `::: warning` containers for callouts.
- Use `::: code-group` for showing CLI vs SDK examples side by side.
- Keep each page focused — link to related pages via "Next Steps" at the bottom.
