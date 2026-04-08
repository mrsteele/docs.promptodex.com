# Core Concepts

Before diving into the tools, it helps to understand the key concepts that make Promptodex work.

## Prompts

A **prompt** is a text template stored on Promptodex. Every prompt has:

- A **slug** — a unique identifier like `summarize` or `tweet-thread`
- **Content** — the actual prompt text, optionally with variables
- **Versions** — a history of revisions
- **Visibility** — public or private

Example prompt content:

```
Summarize the following article about {{topic}} in {{language:english}}:

{{content}}
```

## Variables

Variables make prompts dynamic and reusable. They use double curly brace syntax:

```
{{variableName}}
```

You can set default values with a colon:

```
{{language:english}}
```

When a prompt is rendered, variables are replaced with the values you provide. Missing variables without defaults become empty strings.

Learn more in [Writing Prompts → Variables](/writing-prompts/variables).

## Versions

Every time a prompt is edited, a new version is created. Versions are numbered sequentially (1, 2, 3, ...).

- **Latest** — by default, you always get the latest version
- **Pinned** — use `@version` syntax to lock to a specific version: `summarize@2`

This means you can iterate on prompts without breaking existing users.

## Slugs

Prompts are identified by **slugs** — unique, URL-friendly names:

```
summarize
tweet-thread
translate
```

Slugs make prompts easy to reference from the CLI, SDK, or the web.

## Public vs. Private Prompts

- **Public prompts** are visible to everyone. They can be forked, bookmarked, and used by anyone.
- **Private prompts** require an API key to access. Use them for proprietary or sensitive prompt content.

```bash
# Public — anyone can run this
pod summarize

# Private — requires authentication
pod my-private-prompt  # needs pod login or API key
```

## Forking

Any public prompt can be **forked** — creating your own copy that you can modify independently. Attribution is automatic, and you can continue to pull in improvements from the original.

## Model Recommendations

Prompt authors can recommend which AI model works best for their prompt (e.g., GPT-4.1, Claude Sonnet 4). The CLI respects these recommendations by default, but you can always override with `--model`.

## The Registry

The Promptodex registry is the central hub where all prompts live. It's accessed by:

- The [website](https://promptodex.com) for browsing and editing
- The [CLI](/cli/installation) for running prompts from your terminal
- The [SDK](/sdk/overview) for loading prompts in code

## Next Steps

- [Quick Start](/quick-start/installation) — Install the tools and run your first prompt
- [Writing Prompts](/writing-prompts/prompt-structure) — Learn the prompt syntax in detail
